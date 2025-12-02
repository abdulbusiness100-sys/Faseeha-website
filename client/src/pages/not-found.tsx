import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-none shadow-lg">
        <CardContent className="pt-8 pb-8 px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center text-destructive">
              <AlertCircle className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-3xl font-serif font-bold text-primary mb-2">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link href="/">
            <Button className="w-full rounded-full">Return Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
