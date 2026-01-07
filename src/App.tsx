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

const App: React.FC = () => {
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
      sizes: [
        "Ø 6mm",
        "Ø 8mm",
        "Ø 10mm",
        "Ø 12mm",
        "Ø 16mm",
        "Ø 19mm",
        "Ø 22mm",
        "Ø 25mm",
        "Ø 29mm",
        "Ø 32mm",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                PD. Saudara
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["beranda", "produk", "tentang", "kontak"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === section
                      ? "text-cyan-400"
                      : "text-gray-300"
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2 p-4">
              {["beranda", "produk", "tentang", "kontak"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all"
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
      <section
        id="beranda"
        className="pt-32 pb-20 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgc3Ryb2tlPSJyZ2JhKDYsMTgyLDIxMiwwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                Supplier Besi Terpercaya
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Solusi Besi Berkualitas
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Untuk Proyek Anda
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Distributor besi dan baja terlengkap dengan harga kompetitif dan
              layanan terbaik untuk mendukung kesuksesan proyek konstruksi Anda
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/30"
                onClick={() => scrollToSection("produk")}
              >
                Lihat Produk <ChevronRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-xl"
                onClick={() => scrollToSection("kontak")}
              >
                Hubungi Kami
              </Button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto">
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Produks Section */}
      <section id="produk" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Produk Kami
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Berbagai jenis produk besi dan baja berkualitas tinggi untuk
              kebutuhan konstruksi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produks.map((produk, idx) => (
              <Card
                key={idx}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {produk.image}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {produk.name}
                  </h3>
                  <p className="text-gray-400">{produk.desc}</p>
                  <Button
                    variant="outline"
                    className="
                      w-full
                      border-cyan-500/50
                      text-[#1b273a]
                      hover:bg-[#00c9f7]
                      hover:border-[#00c9f7]
                      transition-colors
                    "
                    onClick={() => setSelectedProduct(produk)}
                  >
                    Detail Produk
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-5xl">{selectedProduct.image}</div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-400">{selectedProduct.desc}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-red-500/20 border border-slate-700 hover:border-red-500/50 flex items-center justify-center transition-all group"
              >
                <X
                  className="text-gray-400 group-hover:text-red-400"
                  size={20}
                />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Description */}
              {selectedProduct.fullDesc && (
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                    <span>Deskripsi Produk</span>
                  </h4>
                  <p className="text-gray-300 leading-relaxed pl-5">
                    {selectedProduct.fullDesc}
                  </p>
                </div>
              )}

              {/* Specifications */}
              {selectedProduct.specs && (
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                    <span>Spesifikasi</span>
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3 pl-5">
                    {selectedProduct.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all group"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-300">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {selectedProduct.sizes && (
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                    <span>Ukuran Tersedia</span>
                  </h4>
                  <div className="flex flex-wrap gap-3 pl-5">
                    {selectedProduct.sizes.map((size, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 font-mono font-semibold hover:scale-105 hover:border-cyan-500/50 transition-all cursor-default"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {selectedProduct.applications && (
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                    <span>Aplikasi Penggunaan</span>
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3 pl-5">
                    {selectedProduct.applications.map((app, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <ChevronRight className="text-white" size={20} />
                        </div>
                        <span className="text-gray-300">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/30"
                  onClick={() =>
                    window.open("https://wa.me/6281234567890", "_blank")
                  }
                >
                  <FaWhatsapp className="mr-2" size={20} />
                  Hubungi Kami
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
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

      {/* Tentang Kami  Section */}
      <section id="tentang" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Tentang Kami
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Pd. Saudara adalah distributor besi dan baja terpercaya yang
                telah melayani berbagai proyek konstruksi. Kami berkomitmen
                menyediakan produk berkualitas tinggi dengan harga kompetitif.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Dengan pengalaman bertahun-tahun, kami memahami kebutuhan
                industri konstruksi dan siap mendukung kesuksesan proyek Anda
                dengan produk terbaik dan layanan profesional.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-3xl font-bold text-cyan-400">20+</div>
                  <div className="text-sm text-gray-400 mt-1">Tahun</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-3xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-gray-400 mt-1">Proyek</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-sm text-gray-400 mt-1">Puas</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-9xl">🏗️</div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-3xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Hubungi Kami
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Siap membantu kebutuhan proyek besi dan bengkel las Anda.
              Konsultasi & penawaran gratis.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* CONTACT INFO CARD */}
            <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 space-y-6">
              {/* CTA WHATSAPP */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Chat WhatsApp Sekarang
              </a>

              {/* PHONE */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Telepon / WhatsApp
                  </h4>
                  <a
                    href="tel:+6281234567890"
                    className="text-cyan-400 hover:underline"
                  >
                    +62 812-3456-7890
                  </a>
                  <p className="text-gray-400 text-sm">
                    Setiap hari, 07:00 – 17:00
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a
                    href="mailto:pd.saudarairon@gmail.com"
                    className="text-cyan-400 hover:underline"
                  >
                    pd.saudarairon@gmail.com
                  </a>
                  <p className="text-gray-400 text-sm">
                    Respon maksimal 24 jam
                  </p>
                </div>
              </div>

              {/* LOCATIONS */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Lokasi Kami</h4>
                  <p className="text-cyan-400 text-sm">
                    <strong>Toko Besi:</strong> Jl. Rancabali No.10A, Cimahi
                  </p>
                  <p className="text-cyan-400 text-sm">
                    <strong>Bengkel Las:</strong> Jl. Gn. Batu No.1A, Bandung
                  </p>
                </div>
              </div>
            </div>

            {/* MAPS */}
            <div className="space-y-8">
              {/* MAP 1 */}
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Toko Besi PD Saudara
                </h4>
                <div className="w-full h-[240px] rounded-xl overflow-hidden border border-slate-700/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0268371797397!2d107.5631045106792!3d-6.8873887930829065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e50059628d45%3A0x798e276b9cad575!2sToko%20Besi%20PD%20SAUDARA!5e0!3m2!1sid!2sid!4v1767769788876!5m2!1sid!2sid"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Toko+Besi+PD+Saudara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-cyan-400 hover:underline"
                >
                  Buka di Google Maps →
                </a>
              </div>

              {/* MAP 2 */}
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Bengkel Las Listrik PD Saudara
                </h4>
                <div className="w-full h-[240px] rounded-xl overflow-hidden border border-slate-700/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.005818260837!2d107.5709181!3d-6.8899054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e51845f62d87%3A0x58e850ee3a19ad82!2sBengkel%20Las%20Listrik%20(PD.%20SAUDARA)!5e0!3m2!1sid!2sid!4v1767771173391!5m2!1sid!2sid"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Bengkel+Las+Listrik+PD+Saudara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-cyan-400 hover:underline"
                >
                  Buka di Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          {/* TOP */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* BRAND */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  PD. Saudara
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Penyedia solusi besi dan konstruksi baja terpercaya untuk
                kebutuhan proyek rumah, industri, dan komersial.
              </p>
            </div>

            {/* CONTACT US */}
            <div>
              <h4 className="text-white font-semibold mb-4">Kontak</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center space-x-3">
                  <FaWhatsapp className="text-green-500" />
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <FaEnvelope />
                  <a
                    href="mailto:pd.saudarairon@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    pd.saudarairon@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <FaMapMarkerAlt />
                  <span>
                    Jl. Rancabali No.10A, Cimahi & Jl. Gn. Batu No.1A, Bandung
                  </span>
                </li>
              </ul>
            </div>

            {/* ABOUT US */}
            <div>
              <h4 className="text-white font-semibold mb-4">Tentang Kami</h4>
              <button
                onClick={() => scrollToSection("tentang")}
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Tentang Perusahaan
              </button>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-white font-semibold mb-4">Layanan</h4>
              <button
                onClick={() => scrollToSection("produk")}
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Produk Kami
              </button>
            </div>
          </div>

          {/* SOCIAL & COPYRIGHT */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 border-t border-slate-700/50 pt-6">
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaFacebookF size={22} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaTiktok size={22} />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>

            <div className="text-center text-gray-400 text-sm">
              © 2026 PD. Saudara. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
