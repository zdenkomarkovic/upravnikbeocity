"use client";

import { CONTACT } from "@/lib/constants";

interface PhoneLinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function PhoneLink({ className, children }: PhoneLinkProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag_report_conversion === "function") {
      (window as any).gtag_report_conversion();
    }
  };

  return (
    <a href={`tel:${CONTACT.phone}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
