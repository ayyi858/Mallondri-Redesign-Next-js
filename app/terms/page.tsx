import Link from "next/link";

export const metadata = {
  title: "Syarat & Ketentuan | Mallondri",
  description: "Syarat dan ketentuan layanan Mallondri laundry.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-28 pb-24">
      <h1 className="font-heading text-3xl font-semibold text-primary">Syarat & Ketentuan</h1>
      <p className="mt-4 text-primary/80">
        Halaman ini akan berisi syarat dan ketentuan layanan Mallondri. Kembali ke{" "}
        <Link href="/" className="text-primary underline hover:no-underline">beranda</Link>.
      </p>
    </div>
  );
}
