"use client";

import { ErrorBoundary } from "@/components/error-boundary";
import { InputField, TextareaField } from "@/components/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type CreateOrderFormData, createOrderSchema } from "@/lib/form-schemas";
import { logger } from "@/lib/logger";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export function CreateOrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<CreateOrderFormData>({
    resolver: zodResolver(createOrderSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<CreateOrderFormData> = async (data) => {
    try {
      logger.debug("Form submitted with data:", data);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Order created successfully!");
      logger.info("Order created:", data);
      reset();
    } catch (error) {
      logger.error("Failed to create order:", error);
      toast.error("Failed to create order");
    }
  };

  return (
    <ErrorBoundary componentName="CreateOrderForm">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create New Order</CardTitle>
          <CardDescription>Fill in the form below to create a new order</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Customer Information</h3>

              <InputField
                label="Customer Name"
                placeholder="John Doe"
                register={register("customerName")}
                error={errors.customerName?.message ?? ""}
                required
              />

              <InputField
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                register={register("customerEmail")}
                error={errors.customerEmail?.message ?? ""}
                required
              />

              <InputField
                label="Phone Number"
                type="tel"
                placeholder="1234567890"
                register={register("customerPhone")}
                error={errors.customerPhone?.message ?? ""}
              />
            </div>

            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-sm font-semibold text-foreground">Product Information</h3>

              <InputField
                label="Product Name"
                placeholder="Product name"
                register={register("productName")}
                error={errors.productName?.message ?? ""}
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Quantity"
                  type="number"
                  register={register("quantity")}
                  error={errors.quantity?.message ?? ""}
                  required
                />

                <InputField
                  label="Unit Price"
                  type="number"
                  register={register("unitPrice")}
                  error={errors.unitPrice?.message ?? ""}
                  required
                />
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <TextareaField
                label="Notes"
                placeholder="Add any additional notes about this order..."
                register={register("notes")}
                error={errors.notes?.message ?? ""}
                rows={4}
              />
            </div>

            <div className="flex gap-2 pt-4 border-t">
              <Button type="submit" disabled={isSubmitting || !isValid} className="flex-1">
                {isSubmitting ? "Creating..." : "Create Order"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => reset()}
                disabled={isSubmitting}
                className="flex-1"
              >
                Clear Form
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </ErrorBoundary>
  );
}
