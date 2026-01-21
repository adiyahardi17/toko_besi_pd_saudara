import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Package,
  Shield,
  Zap,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("beranda");
  const [selectedProduct, setSelectedProduct] = useState<Produk | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title =
      "PD. SAUDARA - Distributor Besi & Baja Berkualitas | Toko Besi Cimahi Bandung";
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  interface Produk {
    name: string;
    desc: string;
    image: string;
    fullDesc?: string;
    specs?: string[];
    sizes?: string[];
    applications?: string[];
    prices?: HargaProduk[];
  }

  interface HargaProduk {
    size: string;
    price: number;
  }

  interface Feature {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    title: string;
    desc: string;
  }

  const produks: Produk[] = [
    {
      name: "Besi Beton",
      desc: "SNI berkualitas tinggi untuk konstruksi",
      image: "🏗️",
      fullDesc:
        "Besi beton berkualitas tinggi dengan sertifikasi SNI yang telah teruji kekuatannya. Cocok untuk berbagai jenis konstruksi bangunan seperti rumah tinggal, gedung bertingkat, jembatan, dan infrastruktur lainnya.",
      specs: [
        "Standar SNI 2052:2017",
        "Kekuatan Tarik 400-550 MPa",
        "Permukaan Ulir (Deformed)",
        "Baja Karbon Rendah",
        "Tahan Korosi",
      ],
      prices: [
        { size: "Ø 6mm", price: 35000 },
        { size: "Ø 8mm", price: 48000 },
        { size: "Ø 10mm", price: 72000 },
        { size: "Ø 12mm", price: 98000 },
      ],
      applications: [
        "Struktur Kolom Bangunan",
        "Balok dan Sloof",
        "Pondasi Cakar Ayam",
        "Plat Lantai",
        "Konstruksi Jembatan",
        "Infrastruktur Jalan",
      ],
    },
    { name: "Besi Hollow", desc: "Berbagai ukuran dan ketebalan", image: "⬜" },
    { name: "Besi Siku", desc: "Profil L untuk rangka bangunan", image: "📐" },
    {
      name: "Plat Besi",
      desc: "Lembaran besi berbagai ketebalan",
      image: "📋",
    },
    { name: "Besi H Beam", desc: "Struktur berat dan jembatan", image: "🏭" },
    { name: "Besi Wiremesh", desc: "Jaring besi untuk cor beton", image: "🔲" },
  ];

  const features: Feature[] = [
    {
      icon: Shield,
      title: "Kualitas Terjamin",
      desc: "Produk bersertifikat SNI",
    },
    {
      icon: Zap,
      title: "Pengiriman Cepat",
      desc: "Layanan antar ke lokasi proyek",
    },
    { icon: Package, title: "Stok Lengkap", desc: "Berbagai jenis dan ukuran" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-blue-700">
                PD. SAUDARA
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["beranda", "produk", "tentang", "kontak"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-base font-semibold transition-colors ${
                    activeSection === section
                      ? "text-blue-700 border-b-2 border-blue-700"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {section === "beranda"
                    ? "Beranda"
                    : section === "produk"
                      ? "Produk"
                      : section === "tentang"
                        ? "Tentang Kami"
                        : "Kontak"}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 bg-white border-t border-gray-200 mt-2 p-4">
              {["beranda", "produk", "tentang", "kontak"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-700 hover:bg-gray-100 rounded"
                >
                  {section === "beranda"
                    ? "Beranda"
                    : section === "produk"
                      ? "Produk"
                      : section === "tentang"
                        ? "Tentang Kami"
                        : "Kontak"}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section
          id="beranda"
          className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <span className="px-5 py-2 bg-blue-100 border-2 border-blue-300 rounded-full text-blue-800 text-base font-bold">
                  Supplier Besi Terpercaya
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                Solusi Besi Berkualitas
                <br />
                <span className="text-blue-700">Untuk Proyek Anda</span>
              </h1>

              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Distributor besi dan baja terlengkap dengan harga kompetitif dan
                layanan terbaik untuk mendukung kesuksesan proyek konstruksi
                Anda
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-7 text-lg font-semibold rounded-lg shadow-lg"
                  onClick={() => scrollToSection("produk")}
                >
                  Lihat Produk <ChevronRight className="ml-2" size={22} />
                </Button>
                <Button
                  size="lg"
                  className="bg-white border-3 border-blue-700 text-blue-700 hover:bg-blue-50 px-10 py-7 text-lg font-semibold rounded-lg"
                  onClick={() => scrollToSection("kontak")}
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="mt-20 grid md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <Card
                  key={idx}
                  className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mx-auto">
                      <feature.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-base">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produk" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Produk Kami
              </h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Berbagai jenis produk besi dan baja berkualitas tinggi untuk
                kebutuhan konstruksi Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {produks.map((produk, idx) => (
                <Card
                  key={idx}
                  className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="text-7xl mb-4 text-center">
                      {produk.image}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 text-center">
                      {produk.name}
                    </h3>
                    <p className="text-gray-700 text-center text-base">
                      {produk.desc}
                    </p>
                    <Button
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-6 text-base"
                      onClick={() => setSelectedProduct(produk)}
                    >
                      Lihat Detail
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <Button
                size="lg"
                className="px-12 py-7 bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold"
                onClick={() => (window.location.href = "/produk-lengkap")}
              >
                Lihat Produk Lengkap
              </Button>
            </div>
          </div>
        </section>

        {/* Product Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b-2 border-gray-200 p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{selectedProduct.image}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {selectedProduct.desc}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-12 h-12 rounded-lg bg-gray-200 hover:bg-red-200 border-2 border-gray-400 hover:border-red-500 flex items-center justify-center transition-all"
                  aria-label="Tutup detail produk"
                >
                  <X className="text-gray-900 hover:text-red-700" size={24} />
                </button>
              </div>

              <div className="p-8 space-y-8">
                {selectedProduct.fullDesc && (
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-700 pl-4">
                      Deskripsi Produk
                    </h4>
                    <p className="text-gray-800 text-lg leading-relaxed pl-6">
                      {selectedProduct.fullDesc}
                    </p>
                  </div>
                )}

                {selectedProduct.specs && (
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-700 pl-4">
                      Spesifikasi
                    </h4>
                    <div className="space-y-3 pl-6">
                      {selectedProduct.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg border border-gray-200"
                        >
                          <div className="w-3 h-3 rounded-full bg-blue-700 mt-1.5 flex-shrink-0"></div>
                          <span className="text-gray-800 text-base">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProduct.prices && (
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
                          {selectedProduct.prices.map((item, idx) => (
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

                {selectedProduct.applications && (
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-700 pl-4">
                      Aplikasi Penggunaan
                    </h4>
                    <div className="space-y-3 pl-6">
                      {selectedProduct.applications.map((app, idx) => (
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
                      setSelectedProduct(null);
                      scrollToSection("kontak");
                    }}
                  >
                    Info Lebih Lanjut
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        <section id="tentang" className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Tentang Kami
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  PD. Saudara adalah distributor besi dan baja terpercaya yang
                  telah melayani berbagai proyek konstruksi. Kami berkomitmen
                  menyediakan produk berkualitas tinggi dengan harga kompetitif.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Dengan pengalaman bertahun-tahun, kami memahami kebutuhan
                  industri konstruksi dan siap mendukung kesuksesan proyek Anda
                  dengan produk terbaik dan layanan profesional.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-6 bg-white rounded-lg border-2 border-gray-200 shadow-md">
                    <div className="text-4xl font-bold text-blue-700">20+</div>
                    <div className="text-base text-gray-700 mt-2 font-semibold">
                      Tahun
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border-2 border-gray-200 shadow-md">
                    <div className="text-4xl font-bold text-blue-700">500+</div>
                    <div className="text-base text-gray-700 mt-2 font-semibold">
                      Proyek
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border-2 border-gray-200 shadow-md">
                    <div className="text-4xl font-bold text-blue-700">100%</div>
                    <div className="text-base text-gray-700 mt-2 font-semibold">
                      Puas
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-blue-100 rounded-lg border-4 border-blue-300 flex items-center justify-center shadow-xl">
                  <div className="text-9xl">🏗️</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Hubungi Kami
              </h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Siap membantu kebutuhan proyek besi dan bengkel las Anda.
                Konsultasi & penawaran gratis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 space-y-6 shadow-lg">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-lg transition shadow-md"
                >
                  <FaWhatsapp className="inline mr-2 mb-1" size={24} />
                  Chat WhatsApp Sekarang
                </a>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-lg mb-1">
                      Telepon / WhatsApp
                    </h4>
                    <a
                      href="tel:+6281234567890"
                      className="text-blue-700 hover:underline text-lg font-semibold"
                    >
                      +62 812-3456-7890
                    </a>
                    <p className="text-gray-600 text-base mt-1">
                      Setiap hari, 07:00 – 17:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-lg mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:pd.saudarairon@gmail.com"
                      className="text-blue-700 hover:underline text-base font-semibold"
                    >
                      pd.saudarairon@gmail.com
                    </a>
                    <p className="text-gray-600 text-base mt-1">
                      Respon maksimal 24 jam
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-lg mb-2">
                      Lokasi Kami
                    </h4>
                    <p className="text-gray-800 text-base mb-1">
                      <strong>Toko Besi:</strong> Jl. Rancabali No.10A, Cimahi
                    </p>
                    <p className="text-gray-800 text-base">
                      <strong>Bengkel Las:</strong> Jl. Gn. Batu No.1A, Bandung
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-gray-900 font-bold text-xl mb-3">
                    Toko Besi PD Saudara
                  </h4>
                  <div className="w-full h-[280px] rounded-lg overflow-hidden border-2 border-gray-300 shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0268371797397!2d107.5631045106792!3d-6.8873887930829065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e50059628d45%3A0x798e276b9cad575!2sToko%20Besi%20PD%20SAUDARA!5e0!3m2!1sid!2sid!4v1767769788876!5m2!1sid!2sid"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      title="Lokasi Toko Besi PD Saudara di Google Maps"
                    />
                  </div>
                  <a
                    href="https://maps.google.com/?q=Toko+Besi+PD+Saudara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-base text-blue-700 hover:underline font-semibold"
                  >
                    Buka di Google Maps →
                  </a>
                </div>

                <div>
                  <h4 className="text-gray-900 font-bold text-xl mb-3">
                    Bengkel Las Listrik PD Saudara
                  </h4>
                  <div className="w-full h-[280px] rounded-lg overflow-hidden border-2 border-gray-300 shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.005818260837!2d107.5709181!3d-6.8899054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e51845f62d87%3A0x58e850ee3a19ad82!2sBengkel%20Las%20Listrik%20(PD.%20SAUDARA)!5e0!3m2!1sid!2sid!4v1767771173391!5m2!1sid!2sid"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      title="Lokasi Bengkel Las Listrik PD Saudara di Google Maps"
                    />
                  </div>
                  <a
                    href="https://maps.google.com/?q=Bengkel+Las+Listrik+PD+Saudara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-base text-blue-700 hover:underline font-semibold"
                  >
                    Buka di Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t-2 border-gray-300 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-bold text-blue-700">
                  PD. SAUDARA
                </span>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Penyedia solusi besi dan konstruksi baja terpercaya untuk
                kebutuhan proyek rumah, industri, dan komersial.
              </p>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold text-lg mb-4">Kontak</h4>
              <ul className="space-y-3 text-gray-700 text-base">
                <li className="flex items-center space-x-3">
                  <FaWhatsapp className="text-green-600" size={20} />
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <FaEnvelope size={18} />
                  <a
                    href="mailto:pd.saudarairon@gmail.com"
                    className="hover:text-blue-700 transition-colors"
                  >
                    pd.saudarairon@gmail.com
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt size={18} className="mt-1 flex-shrink-0" />
                  <span>
                    Jl. Rancabali No.10A, Cimahi & Jl. Gn. Batu No.1A, Bandung
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold text-lg mb-4">
                Tentang Kami
              </h4>
              <button
                onClick={() => scrollToSection("tentang")}
                className="text-gray-700 text-base hover:text-blue-700 transition-colors"
              >
                Tentang Perusahaan
              </button>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold text-lg mb-4">Layanan</h4>
              <button
                onClick={() => scrollToSection("produk")}
                className="text-gray-700 text-base hover:text-blue-700 transition-colors"
              >
                Produk Kami
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 border-t-2 border-gray-300 pt-8">
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700 transition-colors"
                aria-label="Kunjungi halaman Facebook kami"
              >
                <FaFacebookF size={26} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700 transition-colors"
                aria-label="Kunjungi halaman Instagram kami"
              >
                <FaInstagram size={26} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700 transition-colors"
                aria-label="Kunjungi halaman TikTok kami"
              >
                <FaTiktok size={26} />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
                aria-label="Hubungi kami via WhatsApp"
              >
                <FaWhatsapp size={26} />
              </a>
            </div>

            <div className="text-center text-gray-700 text-base font-semibold">
              © 2026 PD. SAUDARA. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
