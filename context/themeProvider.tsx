"use client";

import { ReactElement, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

type Childrentype = {
  children: ReactElement | ReactElement[];
};

const ThemeProviders = ({ children }: Childrentype) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeProviders;
