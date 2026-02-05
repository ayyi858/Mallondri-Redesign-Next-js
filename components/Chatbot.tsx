"use client";

import { useState, useRef, useEffect } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

type ChatMessage = { role: "user" | "assistant"; content: string };

function ChatbotIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 2 13.574 2 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: text }].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.error ?? "Gagal mengirim. Coba lagi." },
        ]);
        return;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.message ?? "" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Koneksi gagal. Silakan coba lagi." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6 md:right-10" ref={popupRef}>
      {open && (
        <div
          className="absolute bottom-full right-0 mb-2 flex max-h-[85vh] w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_20px_60px_-12px_rgba(26,90,135,0.25)] sm:mb-3 sm:w-[340px] sm:rounded-3xl md:w-[380px]"
          role="dialog"
          aria-label="Chatbot Asisten Mallondri"
        >
          <div className="border-b border-white/10 bg-linear-to-r from-primary to-[#1a6b9a] px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <ChatbotIcon className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-heading text-sm font-bold text-white">Asisten Mallondri</p>
                <p className="flex items-center gap-1.5 text-xs text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                  Online · siap bantu
                </p>
              </div>
            </div>
          </div>

          <div
            ref={listRef}
            className="flex max-h-[320px] min-h-[200px] flex-col gap-3 overflow-y-auto bg-slate-50/50 p-4"
          >
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-2 py-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <ChatbotIcon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-primary/80">Halo! Ada yang bisa dibantu?</p>
                <p className="text-xs text-primary/55">Tanya paket, harga, atau layanan Mallondri.</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white text-primary border border-primary/10 shadow-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl border border-primary/10 bg-white px-4 py-2.5 text-sm text-primary/70 shadow-sm">
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/50 [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/50 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/50 [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-primary/10 bg-white p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ketik pesan..."
                className="flex-1 rounded-xl border border-primary/15 bg-slate-50/80 px-4 py-2.5 text-sm text-primary placeholder:text-primary/45 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                disabled={loading}
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-all hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary"
                aria-label="Kirim pesan"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9 2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-center text-xs text-primary/50">
              Atau{" "}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
                chat via WhatsApp
              </a>
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex min-h-[48px] min-w-[48px] items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-primary to-[#1a6b9a] px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-4px_rgba(26,90,135,0.4)] transition-all hover:shadow-[0_12px_32px_-4px_rgba(26,90,135,0.45)] hover:-translate-y-0.5 sm:min-w-0 md:px-4"
        aria-expanded={open}
        aria-label={open ? "Tutup chatbot" : "Buka chatbot"}
      >
        <ChatbotIcon className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
        <span className="hidden whitespace-nowrap md:inline">
          {open ? "Tutup" : "Butuh bantuan?"}
        </span>
      </button>
    </div>
  );
}
