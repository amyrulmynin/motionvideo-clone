import type { Metadata } from "next";

import { RegisterPage } from "@/components/auth-page";

export const metadata: Metadata = {
  title: "Create account · Forge UI",
  description: "Create your Forge UI workspace account.",
};

export default function Page() {
  return <RegisterPage />;
}
