import fs from "node:fs";
import { faker } from "@faker-js/faker";

import type { Order, OrderStatus } from "@/types";

const ORDER_STATUSES: OrderStatus[] = [
  "pending",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
];

const orders: Order[] = Array.from({ length: 1000 }, (_, i) => ({
  id: `ORD-${1000 + i}`,
  customerName: faker.person.fullName(),
  email: faker.internet.email(),
  total: Number.parseFloat(faker.commerce.price({ min: 100, max: 5000 })),
  status: faker.helpers.arrayElement(ORDER_STATUSES),
  createdAt: faker.date.recent({ days: 30 }).toISOString(),
  items: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
    name: faker.commerce.productName(),
    qty: faker.number.int({ min: 1, max: 10 }),
    price: Number.parseFloat(faker.commerce.price()),
  })),
}));
fs.writeFileSync("src/mocks/db.json", JSON.stringify({ orders }, null, 2));
