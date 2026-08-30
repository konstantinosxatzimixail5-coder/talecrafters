"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const CONSENT_KEY = "tc-cookie-consent";

type ConsentStatus = "accepted" | "rejected" | null;

/**
 * Dispatches a custom event so analytics/tracking scripts can listen
 * and only initialise when consent === "accepted".
 */
function dispatchConsentEvent(status: "accepted" | "rejected") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("cookie-consent", { detail: { status } })
    );
  }
}

/**
 * Call this from any script that wants to check consent before loading.
 * Returns true only if the user has explicitly accepted.
 */
export function hasOptionalCookieConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentStatus;

    if (stored) {
      // Re-dispatch on load so scripts that mounted late can pick it up
      dispatchConsentEvent(stored);
    } else {
      // First visit: show banner after a short delay
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    dispatchConsentEvent("accepted");
    setVisible(false);
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    dispatchConsentEvent("rejected");
    setVisible(false);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 md:px-8 md:pb-8"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            className="max-w-3xl mx-auto p-6 md:p-8"
            style={{
              backgroundColor: "rgba(24, 24, 31, 0.96)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid var(--brand-concrete)",
              borderRadius: "2px",
            }}
          >
            {/* Banner text */}
            <p
              className="text-sm md:text-base leading-relaxed mb-4"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--brand-white)",
                opacity: 0.88,
              }}
            >
              Even rebels have to ask. We use cookies to track how you stalk us
              and to make this site smarter. The boring ones keep things running.
              The optional ones help us understand what caught your eye. Your
              call.
            </p>

            {/* Privacy & Terms links */}
            <p
              className="text-xs md:text-sm mb-6"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--brand-concrete-light)",
              }}
            >
              Read our{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 transition-opacity duration-200 hover:opacity-70"
                style={{ color: "var(--brand-cyan)" }}
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="underline underline-offset-2 transition-opacity duration-200 hover:opacity-70"
                style={{ color: "var(--brand-cyan)" }}
              >
                Terms of Service
              </Link>
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleReject}
                className="px-5 py-2.5 text-xs tracking-wider transition-colors duration-200 cursor-pointer"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--brand-concrete-light)",
                  backgroundColor: "transparent",
                  border: "1px solid var(--brand-concrete)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-magenta)";
                  e.currentTarget.style.color = "var(--brand-magenta)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-concrete)";
                  e.currentTarget.style.color = "var(--brand-concrete-light)";
                }}
              >
                REJECT
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 text-xs tracking-wider transition-colors duration-200 cursor-pointer"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--brand-black)",
                  backgroundColor: "var(--brand-cyan)",
                  border: "1px solid var(--brand-cyan)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--brand-white)";
                  e.currentTarget.style.borderColor = "var(--brand-white)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--brand-cyan)";
                  e.currentTarget.style.borderColor = "var(--brand-cyan)";
                }}
              >
                ACCEPT
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
