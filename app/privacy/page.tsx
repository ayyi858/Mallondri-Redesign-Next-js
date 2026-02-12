import Link from "next/link";

export const metadata = {
  title: "Kebijakan Privasi | Mallondri Laundry Tinambung",
  description: "Kebijakan privasi Mallondri laundry Tinambung.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-28 pb-24">
      <h1 className="font-heading text-3xl font-bold text-primary">Kebijakan Privasi</h1>
      <p className="mt-4 text-primary/80">
        Halaman ini akan berisi kebijakan privasi Mallondri. Kembali ke{" "}
        <Link href="/" className="text-primary underline hover:no-underline">beranda</Link>.
      </p>
    </div>
  );
}
