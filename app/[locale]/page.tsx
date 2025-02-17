"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkUser = localStorage.getItem("user");

    const lang = pathname.split("/")[1] || "en";

    router.push(checkUser ? `/${lang}/home` : `/${lang}/login`);
  }, [pathname]);

  return null;
}
