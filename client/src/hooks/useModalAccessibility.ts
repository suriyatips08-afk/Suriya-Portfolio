import { useEffect, type RefObject } from "react";

export function useModalAccessibility<T extends HTMLElement>(
  open: boolean,
  containerRef: RefObject<T | null>,
  onClose: () => void,
) {
  useEffect(() => {
    if (!open) return;
    const container = containerRef.current;
    if (!container) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const root = document.getElementById("root");
    const background = Array.from(root?.children ?? []).filter(
      (child): child is HTMLElement => child instanceof HTMLElement && !child.contains(container),
    );
    const wasInert = background.map((child) => child.inert);
    background.forEach((child) => { child.inert = true; });

    const getFocusable = () => Array.from(container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )).filter((element) => element.getAttribute("aria-hidden") !== "true" && !element.closest("[inert]"));

    const firstFocus = container.querySelector<HTMLElement>("[data-overlay-autofocus]") ?? getFocusable()[0] ?? container;
    const focusFrame = window.requestAnimationFrame(() => firstFocus.focus());

    const trap = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = getFocusable();
      if (!focusable.length) {
        event.preventDefault();
        container.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (!container.contains(active)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && (active === first || active === container)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || active === container)) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", trap);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", trap);
      background.forEach((child, index) => { child.inert = wasInert[index]; });
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [open, containerRef, onClose]);
}
