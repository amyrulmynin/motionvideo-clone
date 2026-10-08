import type { Metadata } from "next";

import { LoginPage } from "@/components/auth-page";

export const metadata: Metadata = {
  title: "Sign in · Forge UI",
  description: "Sign in to your Forge UI workspace.",
};

export default function Page() {
  return <LoginPage />;
}
