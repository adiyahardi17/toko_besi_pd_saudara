import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

export default function ProdukLengkap() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-20">
      <div className="grid md:grid-cols-2 gap-8">
        {produkList.map((produk) => (
          <div
            key={produk.name}
            className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500 transition"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              {produk.name}
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-300">
                      Ukuran
                    </th>
                    <th className="text-right px-4 py-3 text-gray-300">
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
                      <td className="px-4 py-3 text-gray-200">{row.ukuran}</td>
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
              className="inline-flex items-center mt-4 text-cyan-400 hover:underline"
            >
              Tanya Harga <ChevronRight size={18} />
            </a>
          </div>
        ))}
      </div>

      <div className="inline-flex items-center gap-2 mb-6 mr-6 mt-10 justify-end">
        <button
          onClick={() => window.history.back()}
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            border
            border-slate-700
            text-gray-300
            hover:text-white
            hover:border-cyan-500
            hover:bg-cyan-500/10
            transition-all
          "
        >
          <ChevronLeft size={18} />
          Kembali
        </button>
      </div>
    </div>
  );
}
