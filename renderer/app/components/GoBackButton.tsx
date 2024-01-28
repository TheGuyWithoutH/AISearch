// components/GoBackButton.js

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <div
      className="fixed top-[20px] left-[20px] cursor-pointer"
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        cursor: "pointer",
      }}
      onClick={() => router.back()}
    >
      <FaArrowLeft />
    </div>
  );
};

export default GoBackButton;
