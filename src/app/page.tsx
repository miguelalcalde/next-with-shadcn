import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, LayoutDashboard, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center w-full p-24">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:bg-neutral-100 transition-colors cursor-pointer">
          <a href="/dashboard">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Dashboard</CardTitle>
              <LayoutDashboard className="h-5 w-5 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-500">
                View analytics and manage your business data
              </p>
            </CardContent>
          </a>
        </Card>

        <Card className="hover:bg-neutral-100 transition-colors cursor-pointer">
          <a href="/store">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Store</CardTitle>
              <Store className="h-5 w-5 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-500">
                Browse and manage your product catalog
              </p>
            </CardContent>
          </a>
        </Card>

        <Card className="hover:bg-neutral-100 transition-colors cursor-pointer">
          <a href="/blog">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Blog</CardTitle>
              <BookOpen className="h-5 w-5 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-500">
                Create and manage your blog content
              </p>
            </CardContent>
          </a>
        </Card>
      </div>
    </div>
  );
}
