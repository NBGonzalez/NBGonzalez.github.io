// components/I18nProvider.tsx
"use client";

import { useEffect, useState } from "react";
import i18n from "@/lib/i18n";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(i18n.isInitialized);

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.init().then(() => setIsReady(true));
    }
  }, []);

  // Mostrar loading mientras i18n se inicializa
  if (!isReady) {
    return <div className="hidden">Loading i18n...</div>;
  }

  return <>{children}</>;
}