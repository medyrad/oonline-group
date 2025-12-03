import { ApiClient } from "@/services/api-client";
import type { Order } from "@/types";

const client = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000",
});

export async function fetchOrders(): Promise<Order[]> {
  return client.get<Order[]>("/orders");
}
