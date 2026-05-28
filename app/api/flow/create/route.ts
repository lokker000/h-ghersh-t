import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

interface CreatePaymentRequest {
  productId: string;
  productName: string;
  amount: number;
  customerEmail: string;
  customerName?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CreatePaymentRequest = await request.json();
    const { productId, productName, amount, customerEmail, customerName } = body;

    // Validate required fields
    if (!productId || !productName || !amount || !customerEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if Flow credentials are configured
    const apiKey = process.env.FLOW_API_KEY;
    const secretKey = process.env.FLOW_SECRET_KEY;
    const apiUrl = process.env.FLOW_API_URL;

    if (!apiKey || !secretKey || !apiUrl) {
      return NextResponse.json(
        { error: "Flow credentials not configured. Please check env-config.txt" },
        { status: 500 }
      );
    }

    // Generate unique order ID
    const commerceOrder = `order-${productId}-${Date.now()}`;
    const subject = productName;
    const currency = "CLP";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Flow API signature generation
    // The signature is: s = apiKey + orderId + amount + subject + currency + email + confirmationUrl + returnUrl + secretKey
    const confirmationUrl = `${baseUrl}/api/flow/confirm`;
    const returnUrl = `${baseUrl}/checkout/success`;

    const stringToSign = `${apiKey}${commerceOrder}${amount}${subject}${currency}${customerEmail}${confirmationUrl}${returnUrl}${secretKey}`;
    const signature = crypto.createHash("sha256").update(stringToSign).digest("hex");

    // Create payment order in Flow
    const flowResponse = await fetch(`${apiUrl}/payment/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey,
        commerceOrder,
        subject,
        currency,
        amount,
        email: customerEmail,
        paymentMethod: 9, // Webpay
        urlConfirmation: confirmationUrl,
        urlReturn: returnUrl,
        optional: JSON.stringify({
          customerName: customerName || "",
          productId,
        }),
        s: signature,
      }),
    });

    if (!flowResponse.ok) {
      const errorText = await flowResponse.text();
      console.error("Flow API error:", errorText);
      return NextResponse.json(
        { error: "Failed to create payment in Flow", details: errorText },
        { status: 500 }
      );
    }

    const flowData = await flowResponse.json();

    return NextResponse.json({
      success: true,
      url: flowData.url || flowData.redirectUrl,
      token: flowData.token,
      commerceOrder,
    });
  } catch (error) {
    console.error("Error creating payment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
