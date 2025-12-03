#!/usr/bin/env bun

import { Server } from "socket.io";

const io = new Server(4001, {
  cors: { origin: "*" }
});

console.log("Mock WebSocket server running on ws://localhost:4001");
console.log("Sending random order updates every 4 seconds...");

setInterval(() => {
  const statuses = ["processing", "shipped", "delivered", "cancelled"] as const;
  const randomOrderId = `ORD-${Math.floor(Math.random() * 9000) + 1000}`;
  
  io.emit("order-update", {
    id: randomOrderId,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    updatedAt: new Date().toISOString(),
    total: Math.round(Math.random() * 4000 + 100) / 100
  });
}, 4000);

io.on("connection", (socket) => {
  console.log("Client connected to mock socket", socket);
});
