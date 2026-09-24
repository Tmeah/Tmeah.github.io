import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/site.css";
import "@/styles/showcase.css";
import "@/styles/case-study.css";

export function mount(page: ReactNode) {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Missing #root element");
  }
  createRoot(root).render(<StrictMode>{page}</StrictMode>);
}
