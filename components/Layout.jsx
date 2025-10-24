import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppBubble from "./WhatsAppBubble";
import CookieConsent from "./CookieConsent";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cream font-sans text-deep-green">
      <AnnouncementBar message="500 TL üzeri alışverişlerde ücretsiz kargo." />
      <Header />
      <main className="mx-auto w-full max-w-[1400px] px-4 pb-16 pt-8 sm:px-6 md:pt-10 lg:px-8">
        {children}
      </main>
      <Footer />
      <WhatsAppBubble />
      <CookieConsent />
    </div>
  );
}
