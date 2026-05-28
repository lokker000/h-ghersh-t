import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

interface FlowConfirmation {
  token: string;
  commerceOrder: string;
  amount: number;
  status: number;
  fee: number;
  currency: string;
  subject: string;
  email: string;
  date: string;
  paymentMethod: number;
  optional?: string;
  s: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FlowConfirmation = await request.json();
    const { token, commerceOrder, amount, status, email, s } = body;

    // Verify signature
    const secretKey = process.env.FLOW_SECRET_KEY;
    if (!secretKey) {
      console.error("Flow secret key not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Generate expected signature
    const stringToSign = `${token}${commerceOrder}${amount}${status}${email}${secretKey}`;
    const expectedSignature = crypto.createHash("sha256").update(stringToSign).digest("hex");

    if (s !== expectedSignature) {
      console.error("Invalid signature from Flow");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    // Process payment confirmation
    // Status codes: 1 = pending, 2 = paid, 3 = rejected, 4 = cancelled
    const paymentStatus = status === 2 ? "paid" : status === 1 ? "pending" : "failed";

    // Parse optional data (contains productId and customerName)
    let productId = "";
    let customerName = "";
    if (body.optional) {
      try {
        const optionalData = JSON.parse(body.optional);
        productId = optionalData.productId || "";
        customerName = optionalData.customerName || "";
      } catch (e) {
        console.error("Error parsing optional data:", e);
      }
    }

    // TODO: Save order to database
    // In production, you would save this order to your database
    const order = {
      id: commerceOrder,
      productId,
      productName: body.subject,
      customerEmail: email,
      customerName,
      price: amount,
      status: paymentStatus,
      date: body.date,
      flowToken: token,
    };

    console.log("Payment confirmed:", order);

    // Return success response to Flow
    return NextResponse.json({
      status: "success",
      order,
    });
  } catch (error) {
    console.error("Error processing Flow confirmation:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
