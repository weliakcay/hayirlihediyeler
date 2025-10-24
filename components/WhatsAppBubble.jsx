import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppBubble() {
  return (
    <Link
      href="https://wa.me/905525551010"
      className="fixed bottom-24 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-emerald-900 text-gold-200 shadow-soft transition hover:scale-105 sm:bottom-8 sm:h-14 sm:w-14 sm:right-8"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle size={22} />
    </Link>
  );
}
