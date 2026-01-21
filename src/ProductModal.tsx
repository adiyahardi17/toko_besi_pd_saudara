import React from "react";
import { X, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface HargaProduk {
  size: string;
  price: number;
}

interface Produk {
  name: string;
  desc: string;
  image: string;
  fullDesc?: string;
  specs?: string[];
  applications?: string[];
  prices?: HargaProduk[];
}

interface ProductModalProps {
  product: Produk;
  onClose: () => void;
  scrollToSection: (section: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  scrollToSection,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b-2 border-gray-200 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-5xl">{product.image}</div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-700 text-lg">{product.desc}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-lg bg-gray-200 hover:bg-red-200 border-2 border-gray-400 hover:border-red-500 flex items-center justify-center transition-all"
            aria-label="Tutup detail produk"
          >
            <X className="text-gray-900 hover:text-red-700" size={24} />
          </button>
        </div>

        <div className="p-8 space-y-8">
          {product.fullDesc && (
            <div className="space-y-3">
              <h4 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-700 pl-4">
                Deskripsi Produk
              </h4>
              <p className="text-gray-800 text-lg leading-relaxed pl-6">
                {product.fullDesc}
              </p>
            </div>
          )}

          {product.specs && (
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-700 pl-4">
                Spesifikasi
              </h4>
              <div className="space-y-3 pl-6">
                {product.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <div className="w-3 h-3 rounded-full bg-blue-700 mt-1.5 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {product.prices && (
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-700 pl-4">
                Daftar Harga
              </h4>

              <div className="overflow-x-auto pl-6">
                <table className="w-full border-2 border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-blue-700">
                    <tr>
                      <th className="text-left px-6 py-4 text-white font-bold text-lg">
                        Ukuran
                      </th>
                      <th className="text-right px-6 py-4 text-white font-bold text-lg">
                        Harga
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {product.prices.map((item, idx) => (
                      <tr
                        key={idx}
                        className="border-t-2 border-gray-200 hover:bg-blue-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-gray-900 font-semibold text-base">
                          {item.size}
                        </td>
                        <td className="px-6 py-4 text-right text-blue-700 font-bold text-base">
                          Rp {item.price.toLocaleString("id-ID")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {product.applications && (
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-700 pl-4">
                Aplikasi Penggunaan
              </h4>
              <div className="space-y-3 pl-6">
                {product.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="text-white" size={24} />
                    </div>
                    <span className="text-gray-800 text-base font-medium">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              size="lg"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-base"
              onClick={() =>
                window.open("https://wa.me/6281234567890", "_blank")
              }
            >
              <FaWhatsapp className="mr-2" size={24} />
              Hubungi via WhatsApp
            </Button>
            <Button
              size="lg"
              className="flex-1 bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-6 text-base"
              onClick={() => {
                onClose();
                scrollToSection("kontak");
              }}
            >
              Info Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
