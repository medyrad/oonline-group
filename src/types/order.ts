export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export interface OrderItem {
  name: string;
  qty: number;
  price: number;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
  items: OrderItem[];
}
