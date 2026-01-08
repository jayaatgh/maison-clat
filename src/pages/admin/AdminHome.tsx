import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, Users, DollarSign } from "lucide-react";

export default function AdminHome() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const [productsRes, ordersRes] = await Promise.all([
        supabase.from("products").select("id", { count: "exact" }),
        supabase.from("orders").select("id, total, status"),
      ]);

      const products = productsRes.count || 0;
      const orders = ordersRes.data || [];
      const revenue = orders.reduce((sum, order) => sum + Number(order.total), 0);
      const pending = orders.filter((o) => o.status === "pending").length;

      setStats({
        totalProducts: products,
        totalOrders: orders.length,
        totalRevenue: revenue,
        pendingOrders: pending,
      });
      setLoading(false);
    }

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      format: (v: number) => v.toString(),
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: ShoppingCart,
      format: (v: number) => v.toString(),
    },
    {
      title: "Total Revenue",
      value: stats.totalRevenue,
      icon: DollarSign,
      format: (v: number) => `$${v.toFixed(2)}`,
    },
    {
      title: "Pending Orders",
      value: stats.pendingOrders,
      icon: Users,
      format: (v: number) => v.toString(),
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-serif mb-8">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.format(stat.value)}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
