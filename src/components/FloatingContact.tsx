import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      <a
        href="https://wa.me/1234567890" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-4 bg-foreground text-background px-3 py-1 rounded-sm text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>
      <a
        href="tel:+1234567890" // Replace with actual phone number
        className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
        aria-label="Call Us"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-4 bg-foreground text-background px-3 py-1 rounded-sm text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us
        </span>
      </a>
    </div>
  );
}
