import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

const produkList = [
  {
    name: "Besi Beton",
    rows: [
      { ukuran: "Ø 6mm", harga: "Rp 35.000 / batang" },
      { ukuran: "Ø 8mm", harga: "Rp 48.000 / batang" },
      { ukuran: "Ø 10mm", harga: "Rp 72.000 / batang" },
      { ukuran: "Ø 12mm", harga: "Rp 98.000 / batang" },
    ],
  },
  {
    name: "Besi Hollow",
    rows: [
      { ukuran: "2x4 cm (1.2mm)", harga: "Rp 75.000" },
      { ukuran: "4x4 cm (1.6mm)", harga: "Rp 110.000" },
    ],
  },
  {
    name: "Besi Siku",
    rows: [
      { ukuran: "3x3 cm", harga: "Rp 65.000" },
      { ukuran: "4x4 cm", harga: "Rp 95.000" },
    ],
  },
  {
    name: "Plat Besi",
    rows: [
      { ukuran: "1mm (4x8 ft)", harga: "Rp 450.000 / lembar" },
      { ukuran: "2mm (4x8 ft)", harga: "Rp 850.000 / lembar" },
      { ukuran: "3mm (4x8 ft)", harga: "Rp 1.250.000 / lembar" },
    ],
  },
  {
    name: "Besi H Beam",
    rows: [
      { ukuran: "100x100mm", harga: "Rp 2.500.000 / batang" },
      { ukuran: "150x150mm", harga: "Rp 4.200.000 / batang" },
      { ukuran: "200x200mm", harga: "Rp 6.800.000 / batang" },
    ],
  },
  {
    name: "Besi Wiremesh",
    rows: [
      { ukuran: "M5 (5.4mm)", harga: "Rp 185.000 / lembar" },
      { ukuran: "M6 (6.5mm)", harga: "Rp 245.000 / lembar" },
      { ukuran: "M8 (7.4mm)", harga: "Rp 325.000 / lembar" },
    ],
  },
  {
    name: "Besi CNP",
    rows: [
      { ukuran: "75x35x15 (2.3mm)", harga: "Rp 125.000 / batang" },
      { ukuran: "100x50x20 (2.3mm)", harga: "Rp 165.000 / batang" },
      { ukuran: "125x50x20 (2.3mm)", harga: "Rp 195.000 / batang" },
    ],
  },
  {
    name: "Besi UNP",
    rows: [
      { ukuran: "50x38x5mm", harga: "Rp 145.000 / batang" },
      { ukuran: "80x45x6mm", harga: "Rp 225.000 / batang" },
      { ukuran: "100x50x6mm", harga: "Rp 285.000 / batang" },
    ],
  },
];

export default function ProdukLengkap() {
  useEffect(() => {
    document.title =
      "Daftar Harga Besi & Baja Lengkap 2026 - PD. SAUDARA Cimahi Bandung";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header Section */}
      <header className="bg-slate-900/95 border-b border-slate-700/50 sticky top-0 z-40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              PD. SAUDARA
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Daftar Harga Produk Besi & Baja
            </p>
          </div>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-gray-300 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Kembali</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Katalog Produk Lengkap
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Temukan berbagai jenis besi dan baja berkualitas tinggi dengan harga
            terbaik untuk kebutuhan konstruksi Anda. Semua produk tersedia di
            Toko Besi PD. SAUDARA Cimahi dan Bengkel Las Bandung.
          </p>

          {/* CTA WhatsApp */}
          <div className="mt-6">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-green-500/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Hubungi Kami untuk Harga Terbaik
            </a>
          </div>
        </section>

        {/* Product Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {produkList.map((produk) => (
            <article
              key={produk.name}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                {produk.name}
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
                  <thead className="bg-slate-900">
                    <tr>
                      <th className="text-left px-4 py-3 text-gray-300 font-semibold">
                        Ukuran
                      </th>
                      <th className="text-right px-4 py-3 text-gray-300 font-semibold">
                        Harga
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {produk.rows.map((row, i) => (
                      <tr
                        key={i}
                        className="border-t border-slate-700 hover:bg-cyan-500/5 transition"
                      >
                        <td className="px-4 py-3 text-gray-200 font-mono">
                          {row.ukuran}
                        </td>
                        <td className="px-4 py-3 text-right text-cyan-400 font-semibold">
                          {row.harga}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-cyan-400 hover:text-cyan-300 hover:underline transition-colors group"
              >
                Tanya Harga & Stok
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </article>
          ))}
        </section>

        {/* Info Note */}
        <section className="mt-12 bg-slate-800/40 border border-slate-700/50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Catatan Penting
          </h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✓ Harga dapat berubah sewaktu-waktu mengikuti harga pasar</li>
            <li>✓ Harga belum termasuk ongkos kirim</li>
            <li>✓ Stok terbatas, hubungi kami untuk ketersediaan</li>
            <li>✓ Tersedia diskon untuk pembelian dalam jumlah besar</li>
            <li>✓ Gratis konsultasi pemilihan material</li>
          </ul>
        </section>

        {/* Contact CTA */}
        <section className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Butuh Konsultasi atau Penawaran Khusus?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Tim kami siap membantu Anda memilih produk yang tepat untuk proyek
            konstruksi Anda. Dapatkan harga terbaik dan layanan profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat WhatsApp
            </a>
            <a
              href="tel:+6281234567890"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Telepon Langsung
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/60 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              <span className="text-cyan-400 font-semibold">PD. SAUDARA</span> -
              Toko Besi Cimahi & Bengkel Las Bandung
            </p>
            <p>📍 Jl. Rancabali No.10A, Cimahi | Jl. Gn. Batu No.1A, Bandung</p>
            <p className="mt-4">© 2026 PD. SAUDARA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
