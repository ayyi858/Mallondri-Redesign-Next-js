"use client";

import { useState, useRef, useEffect } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

type ChatMessage = { role: "user" | "assistant"; content: string };

const QUICK_REPLIES = [
  "Paket apa saja?",
  "Harga layanan",
  "Jam operasional",
  "Antar jemput",
];

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
  }, [messages, loading]);

  const sendMessage = async (textToSend?: string) => {
    const text = (textToSend ?? input).trim();
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
          className="absolute bottom-full right-0 mb-2 flex max-h-[88vh] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_24px_64px_-12px_rgba(26,90,135,0.2)] sm:mb-3 sm:w-[360px] sm:rounded-3xl md:w-[400px]"
          role="dialog"
          aria-label="Chatbot Asisten Mallondri"
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 border-b border-primary/10 px-4 py-3.5"
            style={{ background: "linear-gradient(135deg, #1A5A87 0%, #1a6b9a 100%)" }}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20">
              <ChatbotIcon className="h-6 w-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-sm font-bold tracking-tight text-white">
                Asisten Mallondri
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/90">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_6px_rgba(52,211,153,0.6)]"
                  aria-hidden
                />
                Online · siap membantu
              </p>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="flex min-h-[240px] max-h-[360px] flex-col gap-4 overflow-y-auto bg-slate-50/60 p-4"
          >
            {messages.length === 0 && (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 py-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <ChatbotIcon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-primary">
                    Halo, ada yang bisa dibantu?
                  </p>
                  <p className="mt-1 text-xs text-primary/60">
                    Tanya paket, harga, jam buka, atau layanan Mallondri.
                  </p>
                </div>
                <div className="flex w-full flex-wrap justify-center gap-2">
                  {QUICK_REPLIES.map((label) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => sendMessage(label)}
                      disabled={loading}
                      className="rounded-full border border-primary/20 bg-white px-4 py-2 text-xs font-medium text-primary shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5 disabled:opacity-50"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-white shadow-md"
                      : "border border-primary/10 bg-white text-primary shadow-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl border border-primary/10 bg-white px-4 py-3 shadow-sm">
                  <span className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-primary/10 bg-white p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ketik pesan..."
                className="min-w-0 flex-1 rounded-xl border border-primary/15 bg-slate-50/80 px-4 py-3 text-sm text-primary placeholder:text-primary/50 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white transition-all disabled:opacity-50"
                style={{
                  background: loading || !input.trim() ? "#94a3b8" : "#F37021",
                }}
                aria-label="Kirim pesan"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9 2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="mt-2.5 text-center text-xs text-primary/50">
              Butuh respon cepat?{" "}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Chat via WhatsApp
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex min-h-[52px] min-w-[52px] items-center justify-center gap-2 rounded-full px-4 py-3 text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
        style={{ background: "linear-gradient(135deg, #1A5A87 0%, #1a6b9a 100%)" }}
        aria-expanded={open}
        aria-label={open ? "Tutup chatbot" : "Buka chatbot"}
      >
        <ChatbotIcon className="h-6 w-6 shrink-0" />
        <span className="hidden whitespace-nowrap text-sm font-semibold md:inline">
          {open ? "Tutup" : "Butuh bantuan?"}
        </span>
      </button>
    </div>
  );
}
