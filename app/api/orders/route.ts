import { NextRequest, NextResponse } from "next/server";
import { getOrders, createOrder } from "@/lib/db";

export async function GET() {
  try {
    const orders = await getOrders();
    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error getting orders:", error);
    return NextResponse.json(
      { error: "Failed to get orders" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { commerceOrder, productId, productName, price, customerEmail, customerName, status, flowToken, date } = body;

    // Validate required fields
    if (!commerceOrder || !productId || !productName || !price || !customerEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const order = await createOrder({
      commerceOrder,
      productId,
      productName,
      price: Number(price),
      customerEmail,
      customerName,
      status: status || 'pending',
      flowToken,
      date: date || new Date().toISOString(),
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
