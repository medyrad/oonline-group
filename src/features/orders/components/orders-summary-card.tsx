"use client";

import { useQuery } from "@tanstack/react-query";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchOrders } from "../services/orders-service";

export function OrdersSummaryCard() {
  const { data, isLoading } = useQuery({
    queryKey: ["orders", "summary"],
    queryFn: fetchOrders,
  });

  const orders = data ?? [];
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders summary</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-muted-foreground text-sm">Loading orders...</p>
        ) : (
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Total orders:</span> {orders.length}
            </p>
            <p>
              <span className="font-semibold">Total revenue:</span> {totalRevenue.toLocaleString()}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
