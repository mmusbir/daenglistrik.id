import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Zap,
  Camera,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

/**
 * DAENGLISTRIK.ID - Professional Electrical & CCTV Services Website
 * Design: Professional Technical Authority
 * Colors: Navy Blue (#001B44), Golden Yellow (#FFC107)
 * Typography: Poppins (Bold for headers, Regular for body)
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");

  const whatsappNumber = "087861817876";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  const electricalServices = [
    {
      title: "Instalasi Listrik Rumah",
      description: "Pemasangan sistem kelistrikan baru dengan standar keselamatan tertinggi",
      icon: "⚡",
    },
    {
      title: "Tambah Daya",
      description: "Upgrade kapasitas listrik untuk kebutuhan daya yang lebih besar",
      icon: "🔌",
    },
    {
      title: "Perbaikan Konslet",
      description: "Diagnosis dan perbaikan masalah kelistrikan dengan cepat dan aman",
      icon: "🔧",
    },
    {
      title: "Pasang Stop Kontak",
      description: "Instalasi stop kontak dan saklar dengan desain modern",
      icon: "🔲",
    },
    {
      title: "Pasang Lampu",
      description: "Pemasangan lampu dan sistem pencahayaan profesional",
      icon: "💡",
    },
    {
      title: "Panel Listrik",
      description: "Instalasi dan maintenance panel listrik untuk rumah dan kantor",
      icon: "📊",
    },
  ];

  const cctvServices = [
    {
      title: "Pasang CCTV Rumah",
      description: "Sistem keamanan CCTV untuk perlindungan rumah 24/7",
      icon: "📹",
    },
    {
      title: "CCTV Kantor",
      description: "Solusi monitoring kantor dengan teknologi terkini",
      icon: "🏢",
    },
    {
      title: "CCTV Gudang",
      description: "Sistem keamanan gudang dengan coverage area luas",
      icon: "📦",
    },
    {
      title: "Service CCTV",
      description: "Maintenance dan perbaikan sistem CCTV yang sudah ada",
      icon: "🔧",
    },
    {
      title: "Setting Online HP",
      description: "Konfigurasi akses CCTV melalui smartphone Anda",
      icon: "📱",
    },
    {
      title: "Maintenance CCTV",
      description: "Perawatan berkala untuk performa optimal sistem keamanan",
      icon: "⚙️",
    },
  ];

  const advantages = [
    { title: "Teknisi Profesional", description: "Tim berpengalaman dan tersertifikasi" },
    { title: "Pengerjaan Rapi", description: "Hasil instalasi yang rapih dan profesional" },
    { title: "Fast Response", description: "Respon cepat untuk panggilan darurat" },
    { title: "Bergaransi", description: "Semua pekerjaan dilengkapi garansi resmi" },
    { title: "Survey Gratis", description: "Konsultasi dan survey lokasi tanpa biaya" },
  ];

  const testimonials = [
    {
      name: "Ibu Siti",
      location: "Makassar",
      rating: 5,
      comment: "Sangat profesional dan cepat. Instalasi listrik rumah saya selesai dalam 2 hari dengan hasil yang rapi.",
    },
    {
      name: "Pak Budi",
      location: "Gowa",
      rating: 5,
      comment: "Teknisinya ramah dan berpengalaman. CCTV yang dipasang bekerja sempurna dan bisa diakses dari HP.",
    },
    {
      name: "PT Maju Jaya",
      location: "Makassar",
      rating: 5,
      comment: "Layanan maintenance CCTV kantor kami sangat memuaskan. Response time mereka luar biasa cepat.",
    },
  ];

  const serviceAreas = [
    "Makassar",
    "Gowa",
    "Maros",
    "Takalar",
    "Jeneponto",
    "Bantaeng",
    "Pangkep",
  ];

  const faqs = [
    {
      question: "Apakah ada garansi untuk pekerjaan?",
      answer: "Ya, semua pekerjaan kami dilengkapi dengan garansi resmi sesuai dengan jenis layanan.",
    },
    {
      question: "Bisa panggilan darurat?",
      answer: "Tentu! Kami melayani panggilan darurat 24/7 untuk masalah kelistrikan mendesak.",
    },
    {
      question: "Melayani luar kota?",
      answer: "Ya, kami melayani area Makassar dan sekitarnya termasuk Gowa, Maros, dan kota-kota lainnya.",
    },
    {
      question: "Bisa survey lokasi?",
      answer: "Bisa! Kami menyediakan survey lokasi gratis untuk menentukan solusi terbaik.",
    },
    {
      question: "Bisa pembayaran transfer?",
      answer: "Tentu, kami menerima berbagai metode pembayaran termasuk transfer bank.",
    },
  ];

  const navItems = [
    { id: "services", label: "Layanan" },
    { id: "portfolio", label: "Portofolio" },
    { id: "testimonials", label: "Testimoni" },
    { id: "contact", label: "Kontak" },
  ];

  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.2, 0.5, 0.8],
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <img src="/storage/logo.png" alt="DAENG LISTRIK" className="h-16 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2 rounded-full bg-[#F5F5F5] p-1">
            {navItems.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeSection === item.id
                    ? "bg-[#001B44] text-white shadow-sm"
                    : "text-[#2C3E50] hover:bg-white hover:text-[#001B44]"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 hover:bg-[#F5F5F5] transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#001B44]" />
            ) : (
              <Menu className="w-6 h-6 text-[#001B44]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#E8E8E8] py-4">
            <div className="container flex flex-col gap-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`rounded-lg px-4 py-3 text-left font-medium transition ${
                    activeSection === item.id
                      ? "bg-[#001B44] text-white"
                      : "text-[#2C3E50] hover:bg-[#F5F5F5] hover:text-[#001B44]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#001B44] to-[#003366] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#FFC107] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#FFC107] rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Solusi Listrik & CCTV Profesional
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Melayani dalam dan luar kota Makassar dengan teknisi berpengalaman dan hasil kerja terjamin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#FFC107] text-[#001B44] hover:bg-yellow-500 font-bold"
                  >
                    Hubungi WhatsApp
                  </Button>
                </a>
                <a href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#001B44]"
                  >
                    Konsultasi Gratis
                  </Button>
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#FFC107]">500+</div>
                  <div className="text-sm text-gray-300">Proyek Selesai</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FFC107]">10+</div>
                  <div className="text-sm text-gray-300">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FFC107]">24/7</div>
                  <div className="text-sm text-gray-300">Siap Melayani</div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663652929203/VN6VcM8duHZ4EYLQSi26fv/hero-electrical-services-enZWnfP6JXkBuBJq9aJnND.webp"
                alt="Teknisi Listrik Profesional"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001B44] mb-4">Tentang DAENG LISTRIK</h2>
            <p className="text-lg text-[#2C3E50]">
              Kami adalah penyedia layanan jasa kelistrikan dan CCTV terpercaya di Makassar dengan komitmen memberikan
              solusi profesional dan berkualitas tinggi untuk rumah, kantor, dan industri.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition">
                <CheckCircle className="w-8 h-8 text-[#FFC107] mb-4" />
                <h3 className="font-bold text-[#001B44] mb-2">{adv.title}</h3>
                <p className="text-sm text-[#7A8A99]">{adv.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Electrical Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001B44] mb-4">Layanan Kelistrikan</h2>
            <p className="text-lg text-[#2C3E50]">Solusi lengkap untuk semua kebutuhan kelistrikan Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electricalServices.map((service, idx) => (
              <Card
                key={idx}
                className="p-8 bg-gradient-to-br from-[#F5F5F5] to-white border-0 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#001B44] mb-3">{service.title}</h3>
                <p className="text-[#7A8A99] mb-6">{service.description}</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#FFC107] text-[#001B44] hover:bg-yellow-500">
                    Pesan Sekarang
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CCTV Services */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001B44] mb-4">Layanan CCTV</h2>
            <p className="text-lg text-[#2C3E50]">Sistem keamanan canggih untuk perlindungan maksimal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cctvServices.map((service, idx) => (
              <Card
                key={idx}
                className="p-8 bg-white border-0 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#001B44] mb-3">{service.title}</h3>
                <p className="text-[#7A8A99] mb-6">{service.description}</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#FFC107] text-[#001B44] hover:bg-yellow-500">
                    Pesan Sekarang
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001B44] mb-4">Portofolio Pekerjaan</h2>
            <p className="text-lg text-[#2C3E50]">Hasil kerja profesional dari proyek-proyek kami</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663652929203/VN6VcM8duHZ4EYLQSi26fv/portfolio-electrical-work-oEKubyog7Khggxx5qX2Xjs.webp"
                alt="Instalasi Panel Listrik Profesional"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663652929203/VN6VcM8duHZ4EYLQSi26fv/portfolio-cctv-installation-aNiFJ42DYv7x6EKojKWTse.webp"
                alt="Instalasi CCTV Profesional"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#001B44] hover:bg-[#002d66]">
                Lihat Lebih Banyak Proyek
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#F5F5F5]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001B44] mb-4">Testimoni Pelanggan</h2>
            <p className="text-lg text-[#2C3E50]">Kepuasan pelanggan adalah prioritas kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8 bg-white border-0 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
                <p className="text-[#2C3E50] mb-6 italic">"{testimonial.comment}"</p>
                <div className="border-t border-[#E8E8E8] pt-4">
                  <p className="font-bold text-[#001B44]">{testimonial.name}</p>
                  <p className="text-sm text-[#7A8A99] flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {testimonial.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001B44] mb-4">Area Layanan</h2>
            <p className="text-lg text-[#2C3E50]">Kami melayani seluruh area Makassar dan sekitarnya</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-lg">
                    <MapPin className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                    <span className="text-[#2C3E50] font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#001B44] to-[#003366] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#FFC107] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#FFC107] hover:underline">
                      {whatsappNumber}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#FFC107] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Lokasi</p>
                    <p className="text-gray-300">Makassar, Sulawesi Selatan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#FFC107] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Jam Operasional</p>
                    <p className="text-gray-300">Senin - Minggu: 08:00 - 18:00</p>
                    <p className="text-gray-300">Darurat 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001B44] mb-4">Pertanyaan Umum</h2>
            <p className="text-lg text-[#2C3E50]">Jawaban untuk pertanyaan yang sering diajukan</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-6 bg-white border-0 shadow-md">
                <h3 className="font-bold text-[#001B44] mb-3 text-lg">{faq.question}</h3>
                <p className="text-[#2C3E50]">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#001B44] to-[#003366] text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Memulai Proyek Anda?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan kelistrikan dan
            CCTV Anda.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#FFC107] text-[#001B44] hover:bg-yellow-500 font-bold">
              Hubungi WhatsApp Sekarang
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001B44] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/storage/logo.png" alt="DAENG LISTRIK" className="h-20 w-auto" />
              </div>
              <p className="text-gray-300">Solusi kelistrikan dan CCTV profesional untuk Makassar dan sekitarnya.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#services" className="hover:text-[#FFC107] transition">
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-[#FFC107] transition">
                    Portofolio
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-[#FFC107] transition">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] transition">
                    WhatsApp: {whatsappNumber}
                  </a>
                </li>
                <li>Makassar, Sulawesi Selatan</li>
                <li>Layanan 24/7</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Area Layanan</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {serviceAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#003366] pt-8 text-center text-gray-300">
            <p>&copy; 2026 DAENGLISTRIK.ID. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        title="Chat dengan kami di WhatsApp"
        aria-label="Chat dengan kami di WhatsApp"
      >
        <MessageCircle className="h-7 w-7" strokeWidth={2.25} />
      </a>
    </div>
  );
}
