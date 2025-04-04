// components>ConfirmationPage.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface OrderItem {
  title: string;
  quantity: number;
  price: number;
  format: string;
}

interface Order {
  _id: string;
  items: OrderItem[];
  totalAmount: number;
  status: string;
}

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = searchParams.get("orderId");
    if (id) setOrderId(id);
  }, [searchParams]);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return;
      try {
        const res = await fetch(`/api/orders/${orderId}`);
        const data = await res.json();
        setOrder(data.order);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) return <p className="text-center mt-10">Loading your order...</p>;
  if (!order) return <p className="text-center text-red-500 mt-10">Order not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">🎉 Thank you for your order!</h1>
      <p className="text-center mb-6">
        Your order ID is <span className="font-mono text-blue-600">{order._id}</span>
      </p>

      <div className="bg-white shadow rounded p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <ul className="space-y-2">
          {order.items.map((item, index) => (
            <li key={index}>
              📘 <strong>{item.title}</strong> ({item.format}) × {item.quantity} — ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p className="mt-4">Total Paid: <strong>${order.totalAmount.toFixed(2)}</strong></p>
        <p>Status: <strong>{order.status}</strong></p>
      </div>

      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
