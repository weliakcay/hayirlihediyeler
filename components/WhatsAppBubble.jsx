import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppBubble() {
  return (
    <Link
      href="https://wa.me/905525551010"
      className="fixed bottom-6 left-6 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/30 bg-emerald-900 text-gold-200 shadow-soft transition hover:scale-105"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle size={22} />
    </Link>
  );
}
