#!/usr/bin/env bun

import { Server } from "socket.io";

const io = new Server(4001, {
  cors: { origin: "*" },
});

setInterval(() => {
  const statuses = ["processing", "shipped", "delivered", "cancelled"] as const;
  const randomOrderId = `ORD-${Math.floor(Math.random() * 9000) + 1000}`;

  io.emit("order-update", {
    id: randomOrderId,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    updatedAt: new Date().toISOString(),
    total: Math.round(Math.random() * 4000 + 100) / 100,
  });
}, 4000);

io.on("connection", (_socket) => {
  // Code
});
