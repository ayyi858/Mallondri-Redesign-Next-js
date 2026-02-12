import { NextRequest, NextResponse } from "next/server";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

const SYSTEM_PROMPT = `Kamu adalah asisten virtual Mallondri, layanan laundry profesional di Tinambung, Sulawesi Barat.
Tugasmu: menjawab pertanyaan tentang layanan, paket, harga, dan jam operasional dengan ramah dan singkat.

Informasi penting:
- Paket: BOS (Rp 170K/30 hari), JURAGAN (Rp 230K/45 hari, populer), SULTAN (Rp 350K/60 hari).
- Layanan: Regular 5K/kg, Express 8K/kg, Setrika 7K/kg. Dry cleaning, helm, selimut, karpet, sepatu, boneka, gorden (lihat website untuk detail).
- Antar jemput gratis area Tinambung. Kilat 3 jam +50%. Parfum 3K/kg, Packaging 5K/order.
- Jam: Sen–Sab 07:00–21:00, Minggu 08:00–20:00.
- Kontak: WhatsApp 0812-4202-6524, Email info@mallondri.my.id.

Arahkan pelanggan ke WhatsApp untuk pemesanan. Jawab dalam Bahasa Indonesia, singkat dan profesional.`;

type Message = { role: "user" | "assistant" | "system"; content: string };

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "GROQ_API_KEY tidak dikonfigurasi. Tambahkan di .env.local" },
      { status: 500 }
    );
  }

  let body: { messages?: Message[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body harus JSON dengan messages" }, { status: 400 });
  }

  const messages = body.messages as Message[] | undefined;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "messages array wajib" }, { status: 400 });
  }

  const groqMessages: Message[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...messages,
  ];

  try {
    const res = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: groqMessages,
        max_tokens: 512,
        temperature: 0.5,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Groq API error:", res.status, err);
      return NextResponse.json(
        { error: "Gagal memproses chat. Coba lagi." },
        { status: 502 }
      );
    }

    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const content =
      data.choices?.[0]?.message?.content ?? "Maaf, tidak ada respons. Silakan coba lagi.";

    return NextResponse.json({ message: content });
  } catch (e) {
    console.error("Chat API error:", e);
    return NextResponse.json(
      { error: "Terjadi kesalahan. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
