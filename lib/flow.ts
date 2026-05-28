interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  badge?: string;
  checkoutUrl?: string;
}

/**
 * FLOW.CL INTEGRATION
 *
 * This file handles Flow.cl payment integration for real purchases.
 *
 * REQUIREMENTS:
 * - Configure environment variables in env-config.txt:
 *   - FLOW_API_KEY
 *   - FLOW_SECRET_KEY
 *   - FLOW_API_URL
 *   - NEXT_PUBLIC_BASE_URL
 *
 * The integration works as follows:
 * 1. createFlowPayment() calls the Flow API to create a payment order
 * 2. Flow returns a payment URL where the user is redirected
 * 3. Flow handles the payment process
 * 4. Flow sends a webhook to /api/flow/confirm with the payment status
 * 5. User is redirected back to /checkout/success or /checkout/cancel
 */

interface FlowPaymentResponse {
  url?: string;
  token?: string;
  error?: string;
}

interface CreatePaymentRequest {
  productId: string;
  productName: string;
  amount: number;
  customerEmail: string;
  customerName?: string;
}

/**
 * Creates a Flow payment for a product
 *
 * @param product - The product to create payment for
 * @param customerEmail - Customer email address
 * @param customerName - Customer name (optional)
 * @returns Payment URL or error
 */
export async function createFlowPayment(
  product: Product,
  customerEmail: string,
  customerName?: string
): Promise<FlowPaymentResponse> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const requestBody: CreatePaymentRequest = {
      productId: product.id,
      productName: product.name,
      amount: product.price,
      customerEmail,
      customerName,
    };

    const response = await fetch(`${baseUrl}/api/flow/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.error || "Failed to create payment",
      };
    }

    return {
      url: data.url,
      token: data.token,
    };
  } catch (error) {
    console.error("Error creating Flow payment:", error);
    return {
      error: "Failed to connect to payment service",
    };
  }
}

/**
 * Handles the "Buy Now" button click
 * Creates a Flow payment and redirects to Flow's checkout
 *
 * @param product - The product being purchased
 * @param customerEmail - Customer email address
 * @param customerName - Customer name (optional)
 */
export async function handleBuyNow(
  product: Product,
  customerEmail: string,
  customerName?: string
) {
  const response = await createFlowPayment(product, customerEmail, customerName);

  if (response.url) {
    window.location.href = response.url;
  } else {
    alert("Error creating payment: " + response.error);
  }
}
