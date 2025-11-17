import { Metadata } from "next";
import { brandConfig } from "@/config/brand.config";

export const metadata: Metadata = {
  title: `Admin Dashboard - ${brandConfig.company.name}`,
  description: "Admin dashboard for managing products and customers",
};
