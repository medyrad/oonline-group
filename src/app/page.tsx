import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreateOrderForm } from "@/features/orders/components/create-order-form";
import { OrdersSummaryCard } from "@/features/orders/components/orders-summary-card";

export default function Home() {
  return (
    <AppShell>
      <section className="grid gap-6 w-full max-w-4xl mx-auto">
        <Card className="p-6 flex items-center justify-between">
          <p className="font-medium">Quick action</p>
          <Button>Add</Button>
        </Card>
        <OrdersSummaryCard />
        <CreateOrderForm />
      </section>
    </AppShell>
  );
}
