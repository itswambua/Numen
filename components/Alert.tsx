"use client";
import { useState } from "react";

interface AlertProps {
  message: string;
  type?: "success" | "error";
  onClose?: () => void;
}

export default function Alert({ message, type = "success", onClose }: AlertProps) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  const bgColor = type === "success" ? "bg-green-600" : "bg-red-500";

  return (
    <div
      className={`transition-all duration-300 ease-in-out mb-4 rounded-lg px-6 py-4 text-white shadow-lg max-w-xl mx-auto ${bgColor}`}
      role="alert"
    >
      <div className="flex justify-between items-start">
        <span>{message}</span>
        <button onClick={handleClose} className="ml-4 text-white hover:text-gray-200 font-bold">
          &times;
        </button>
      </div>
    </div>
  );
}
