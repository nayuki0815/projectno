// components/FadeInPage.tsx
"use client";

import { useEffect, useState } from "react";

export function FadeInPage({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setShow(true);
    }, 30);

    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      className={`overflow-hidden transition-all duration-700 ${
        show ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}