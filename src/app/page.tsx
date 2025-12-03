import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <Card className="p-12 text-center max-w-md">
        <Button>Add</Button>
      </Card>
    </div>
  );
}
