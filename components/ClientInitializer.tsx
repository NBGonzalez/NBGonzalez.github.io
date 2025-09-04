"use client";

import { useEffect } from "react";
import i18n from "@/lib/i18n";

export default function ClientInitializer() {
  useEffect(() => {
    // Asegurar que i18n esté inicializado en el cliente
    if (!i18n.isInitialized) {
      i18n.init();
    }
  }, []);

  return null;
}