import React, { useState, useEffect, useRef } from "react";

function DraggableDateTime({ theme }) {
  const [dateTime, setDateTime] = useState(new Date());
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mouse events
  const handleMouseDown = (e) => {
    setDragging(true);
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => setDragging(false);

  // Attach listeners for dragging
  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  const formattedDate = dateTime.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      className={`fixed  z-50 pt-4 mt-8 ml-3 rounded-lg cursor-move select-none shadow-lg text-sm ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-blue-600 text-white"
      }`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transition: dragging ? "none" : "top 0.1s, left 0.1s",
      }}
    >
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>
    </div>
  );
}

export default DraggableDateTime;
