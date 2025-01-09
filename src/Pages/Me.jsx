import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Me() {
  const navigate = useNavigate();
  window.onload = () => {
    navigate("/dashboard");
  };
  return <div>Loading.... </div>;
}
