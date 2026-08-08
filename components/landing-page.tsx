"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Factory,
  HardHat,
  Laptop,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Recycle,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  X,
  Wrench,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./contact-form";

const WHATSAPP = "6281320005406";

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const services = [
  {
    icon: Recycle,
    title: "Besi Tua & Scrap Logam",
    description:
      "Pembelian besi tua, baja, tembaga, aluminium, kuningan dan berbagai jenis scrap dalam skala kecil maupun besar.",
    price: "Mulai Rp 3.000/kg",
  },
  {
    icon: Laptop,
    title: "Komputer & Elektronik",
    description:
      "Menerima komputer, server, printer, UPS, laptop dan perangkat elektronik kantor yang sudah tidak digunakan.",
    price: "Survey & penawaran",
  },
  {
    icon: Zap,
    title: "AC & Mesin Pendingin",
    description:
      "Pembelian dan pembongkaran AC split, AC standing, chiller, freezer dan berbagai mesin pendingin.",
    price: "Harga kompetitif",
  },
  {
    icon: Factory,
    title: "Mesin Industri & Pabrik",
    description:
      "Spesialis pembelian mesin pabrik, genset, dinamo, forklift dan peralatan industri yang sudah tidak terpakai.",
    price: "Survey gratis",
  },
  {
    icon: PackageCheck,
    title: "Bongkar Gudang & Kantor",
    description:
      "Layanan pembongkaran dan pembersihan inventaris gudang, kantor, toko, restoran maupun fasilitas perusahaan.",
    price: "Custom quotation",
  },
  {
    icon: Truck,
    title: "Penjemputan Gratis",
    description:
      "Tim kami datang langsung ke lokasi Anda untuk proses survey, pengangkutan dan pembersihan barang.",
    price: "Area tertentu",
  },
];

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Konsultasi",
    description:
      "Hubungi kami melalui WhatsApp dan ceritakan jenis barang atau aset yang ingin Anda jual.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Survey Lokasi",
    description:
      "Tim kami datang ke lokasi untuk melihat kondisi, jumlah dan jenis barang secara langsung.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Penawaran Harga",
    description:
      "Kami memberikan penawaran harga yang transparan dan kompetitif berdasarkan hasil survey.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Angkut & Selesai",
    description:
      "Setelah deal, tim kami melakukan pengangkutan dan pembayaran sesuai kesepakatan.",
  },
];

const portfolios = [
  {
    title: "Borongan Barang Bekas",
    category: "Barang Bekas",
    image: "/portfolio/portofolio1.jpg",
  },
  {
    title: "Mesin Industri",
    category: "Mesin Industri",
    image: "/portfolio/industri.jpg",
  },
  {
    title: "Jual Beli Kulkas Bekas",
    category: "Elektronik",
    image: "/portfolio/portofolio2.jpg",
  },
  {
    title: "Pembongkaran AC",
    category: "AC & Pendingin",
    image: "/portfolio/portofolio3.jpg",
  },
];

const testimonials = [
  {
    name: "Bapak Hendra",
    role: "Manager Operasional Pabrik",
    text: "UD Sekawan Teknik sangat profesional dalam menangani likuidasi mesin-mesin pabrik kami. Proses penimbangan transparan dan tim bergerak cepat.",
    initials: "H",
  },
  {
    name: "Ibu Rina",
    role: "Pemilik Gudang",
    text: "Sangat membantu ketika gudang kami harus segera dikosongkan. Tim datang tepat waktu dan proses pengangkutan berjalan sangat rapi.",
    initials: "R",
  },
  {
    name: "Bapak Andi",
    role: "Owner Perusahaan",
    text: "Penawarannya bagus, komunikasinya mudah dan proses pembayaran sesuai dengan kesepakatan. Sangat direkomendasikan.",
    initials: "A",
  },
];

const packages = [
  {
    name: "BASIC",
    description: "Untuk kebutuhan kecil dan perorangan",
    price: "Custom",
    popular: false,
    features: [
      "Konsultasi gratis",
      "Survey lokasi",
      "Penawaran harga",
      "Penjemputan barang",
      "Pembayaran tunai/transfer",
    ],
  },
  {
    name: "PRO",
    description: "Untuk gudang, kantor & usaha",
    price: "Custom",
    popular: true,
    features: [
      "Semua fitur Basic",
      "Survey lebih detail",
      "Tim bongkar & angkut",
      "Dokumentasi pekerjaan",
      "Prioritas jadwal",
      "Harga lebih kompetitif",
    ],
  },
  {
    name: "BUSINESS",
    description: "Untuk pabrik & likuidasi aset",
    price: "Custom",
    popular: false,
    features: [
      "Semua fitur Pro",
      "Penanganan skala besar",
      "Tim operasional khusus",
      "Pengangkutan volume besar",
      "Laporan pekerjaan",
      "Kontrak kerja perusahaan",
    ],
  },
];

const faqs = [
  {
    question: "Apakah bisa survey ke lokasi?",
    answer:
      "Bisa. Kami menyediakan survey lokasi untuk membantu menentukan jenis barang, volume, kondisi dan harga penawaran.",
  },
  {
    question: "Apakah ada biaya survey?",
    answer:
      "Survey gratis untuk area layanan kami. Untuk lokasi tertentu di luar area utama, silakan konsultasikan terlebih dahulu.",
  },
  {
    question: "Barang apa saja yang bisa dijual?",
    answer:
      "Kami menerima berbagai barang seperti besi tua, scrap logam, komputer, elektronik, AC, mesin industri, peralatan kantor dan aset tidak terpakai lainnya.",
  },
  {
    question: "Apakah barang langsung dijemput?",
    answer:
      "Ya. Setelah harga disepakati, tim kami dapat melakukan penjemputan atau pengangkutan dari lokasi Anda.",
  },
  {
    question: "Bagaimana cara mendapatkan penawaran?",
    answer:
      "Klik tombol Chat WhatsApp, kirim foto atau informasi barang Anda. Tim kami akan membantu memberikan estimasi dan menjadwalkan survey jika diperlukan.",
  },
];

export default function LandingPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const goWhatsApp = () => {
    window.open(
      whatsappLink(
        "Halo UD Limbah Mangku Jaya, saya ingin konsultasi mengenai barang/aset yang ingin saya jual."
      ),
      "_blank"
    );
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-7xl px-4 lg:px-6">
          <nav className="rounded-2xl border border-white/20 bg-slate-950/80 px-4 py-3 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="#beranda"
                className="flex items-center gap-3 text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-600/30">
                <span className="text-[15px] font-black italic tracking-tight text-white">
                LMS
                </span>
                
                </div>

                <div>
                  <p className="text-sm font-black leading-none">
                    <span className="text-blue-400">LIMBAH MANGKU JAYA</span>
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-slate-400">
                    Professional Service
                  </p>
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden items-center gap-7 lg:flex">
                <NavLink href="#beranda">Beranda</NavLink>
                <NavLink href="#layanan">Layanan</NavLink>
                <NavLink href="#portofolio">Portofolio</NavLink>
                <NavLink href="#harga">Harga</NavLink>
                <NavLink href="#kontak">Kontak</NavLink>
              </div>

              {/* Desktop CTA */}
              <button
                onClick={goWhatsApp}
                className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 lg:flex"
              >
                <MessageCircle size={17} />
                Konsultasi Gratis
              </button>

              {/* Mobile Button */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white lg:hidden"
              >
                {mobileMenu ? <X /> : <Menu />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="border-t border-white/10 pt-4 lg:hidden"
              >
                <div className="flex flex-col gap-1">
                  {[
                    ["Beranda", "#beranda"],
                    ["Layanan", "#layanan"],
                    ["Portofolio", "#portofolio"],
                    ["Harga", "#harga"],
                    ["Kontak", "#kontak"],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMobileMenu(false)}
                      className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                    >
                      {label}
                    </a>
                  ))}

                  <button
                    onClick={goWhatsApp}
                    className="mt-2 rounded-xl bg-blue-600 px-4 py-3 font-bold text-white"
                  >
                    Konsultasi Gratis
                  </button>
                </div>
              </motion.div>
            )}
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="beranda"
        className="relative flex min-h-[780px] items-center overflow-hidden bg-slate-950 pt-32"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-6">
          {/* Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300"
            >
              <Sparkles size={15} />
              Solusi Profesional & Terpercaya
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Ubah Barang
              <span className="block text-blue-500">
                Tidak Terpakai
              </span>
              Menjadi Nilai.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Kami membantu Anda menjual barang bekas, scrap logam,
              komputer, AC, mesin industri hingga likuidasi aset dengan
              proses cepat, transparan dan profesional.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#harga"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
              >
                Lihat Harga
                <ArrowRight size={18} />
              </a>

              <button
                onClick={goWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Chat WhatsApp
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Check className="text-blue-500" size={18} />
                Survey Gratis
              </div>

              <div className="flex items-center gap-2">
                <Check className="text-blue-500" size={18} />
                Harga Kompetitif
              </div>

              <div className="flex items-center gap-2">
                <Check className="text-blue-500" size={18} />
                Penjemputan
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-slate-950">
                <Image
                  src="/images/hero1.jpg"
                  alt="Limbah Mangku Jaya"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                        <Truck className="text-white" />
                      </div>

                      <div>
                        <p className="font-bold text-white">
                          Penjemputan Barang
                        </p>
                        <p className="text-sm text-slate-400">
                          Cepat • Aman • Profesional
                        </p>
                      </div>

                      <ArrowUpRight className="ml-auto text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-39 -left-5 z-5 hidden rounded-2xl border border-white/10 bg-white p-5 shadow-2xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <ShieldCheck />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Dipercaya Klien</p>
                  <p className="font-black text-slate-900">100% Profesional</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 lg:px-6">
          <TrustItem
            icon={ShieldCheck}
            title="Profesional"
            description="Tim berpengalaman"
          />
          <TrustItem
            icon={Clock3}
            title="Cepat"
            description="Respon & proses cepat"
          />
          <TrustItem
            icon={Recycle}
            title="Beragam"
            description="Berbagai jenis barang"
          />
          <TrustItem
            icon={MapPin}
            title="Lokal"
            description="Melayani area Jawa Barat"
          />
        </div>
      </section>

      {/* ================= PROBLEM SOLUTION ================= */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionTitle
            eyebrow="MASALAH & SOLUSI"
            title="Barang menumpuk tidak harus menjadi beban."
            description="Kami membantu mengubah aset yang tidak lagi digunakan menjadi nilai ekonomi dengan proses yang lebih mudah."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            <ProblemCard
              number="01"
              title="Gudang Penuh"
              description="Barang lama terus menumpuk dan membuat ruang kerja semakin sempit."
              solution="Kami datang ke lokasi dan membantu mengosongkan barang yang sudah tidak digunakan."
            />

            <ProblemCard
              number="02"
              title="Tidak Tahu Harga"
              description="Sulit menentukan harga jual barang bekas atau aset lama."
              solution="Tim kami melakukan survey dan memberikan penawaran berdasarkan kondisi serta volume barang."
            />

            <ProblemCard
              number="03"
              title="Repot Mengangkut"
              description="Barang berat dan jumlah banyak membuat proses penjualan menjadi merepotkan."
              solution="Kami menyediakan tim bongkar, angkut dan penjemputan sesuai kebutuhan."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="layanan" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionTitle
            eyebrow="LAYANAN KAMI"
            title="Solusi lengkap untuk kebutuhan Anda."
            description="Mulai dari barang bekas rumah tangga hingga aset perusahaan dan mesin industri skala besar."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-slate-300 transition group-hover:text-blue-600"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-black text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[90px] text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Harga
                    </p>
                    <p className="mt-1 font-black text-blue-600">
                      {service.price}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-slate-950 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionTitle
            dark
            eyebrow="CARA KERJA"
            title="Dari konsultasi sampai selesai."
            description="Proses sederhana dan transparan tanpa prosedur yang membingungkan."
          />

          <div className="relative mt-16">
            <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-white/10 lg:block" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-10 lg:grid-cols-4"
            >
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    variants={fadeUp}
                    key={step.number}
                    className="relative text-center"
                  >
                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-slate-900 shadow-xl">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                        <Icon size={26} />
                      </div>

                      <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-slate-950">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-black">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portofolio" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionTitle
            eyebrow="PORTOFOLIO"
            title="Beberapa pekerjaan yang telah kami tangani."
            description="Kami terbiasa menangani pekerjaan dari skala kecil hingga kebutuhan perusahaan."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {portfolios.map((item) => (
              <motion.div
                variants={fadeUp}
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                      {item.category}
                    </p>

                    <h3 className="mt-1 font-black text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionTitle
            eyebrow="TESTIMONI"
            title="Dipercaya oleh klien kami."
            description="Kepuasan dan kepercayaan pelanggan menjadi bagian penting dari pekerjaan kami."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-14 grid gap-6 lg:grid-cols-3"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                variants={fadeUp}
                key={testimonial.name}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={17} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-8 text-slate-600">
                  “{testimonial.text}”
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-black text-blue-600">
                    {testimonial.initials}
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="harga" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionTitle
            eyebrow="PAKET LAYANAN"
            title="Pilih kebutuhan yang sesuai."
            description="Setiap pekerjaan memiliki kondisi dan volume berbeda. Hubungi kami untuk mendapatkan penawaran yang sesuai."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-14 grid gap-6 lg:grid-cols-3"
          >
            {packages.map((pkg) => (
              <motion.div
                variants={fadeUp}
                key={pkg.name}
                className={`relative rounded-3xl border p-8 ${
                  pkg.popular
                    ? "border-blue-600 bg-slate-950 text-white shadow-2xl shadow-blue-900/10"
                    : "border-slate-200 bg-white"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
                    Paling Populer
                  </div>
                )}

                <p
                  className={`text-sm font-black tracking-[0.2em] ${
                    pkg.popular ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {pkg.name}
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  {pkg.price}
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    pkg.popular ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {pkg.description}
                </p>

                <div
                  className={`my-7 h-px ${
                    pkg.popular ? "bg-white/10" : "bg-slate-100"
                  }`}
                />

                <div className="space-y-4">
                  {pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          pkg.popular
                            ? "bg-blue-600"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        <Check size={13} />
                      </div>

                      <span
                        className={
                          pkg.popular
                            ? "text-slate-300"
                            : "text-slate-600"
                        }
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={goWhatsApp}
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-black transition ${
                    pkg.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-950 text-white hover:bg-blue-600"
                  }`}
                >
                  Minta Penawaran
                  <ArrowRight size={17} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 lg:px-6">
          <SectionTitle
            eyebrow="FAQ"
            title="Pertanyaan yang sering ditanyakan."
            description="Informasi singkat sebelum Anda menghubungi tim kami."
          />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const active = activeFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <button
                    onClick={() =>
                      setActiveFaq(active ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 p-6 text-left"
                  >
                    <span className="font-bold text-slate-900">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`shrink-0 transition ${
                        active
                          ? "rotate-180 text-blue-600"
                          : "text-slate-400"
                      }`}
                    />
                  </button>

                  {active && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-6 pb-6"
                    >
                      <p className="border-t border-slate-100 pt-5 text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
<section
  id="kontak"
  className="bg-white py-24"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Header */}
    <div className="mb-14 text-center">
      <span className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-600">
        HUBUNGI KAMI
      </span>

      <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
        Punya barang yang ingin dijual?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
        Kirimkan informasi barang Anda. Tim kami akan membantu
        memberikan estimasi dan mengatur jadwal survey.
      </p>
    </div>

    {/* Content */}
    <div className="grid gap-8 lg:grid-cols-2">

      {/* ================= LEFT : CONTACT INFO ================= */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">

        <h3 className="text-2xl font-bold text-slate-950">
          Informasi Kontak
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Hubungi kami untuk konsultasi, penawaran harga, survey lokasi,
          maupun informasi layanan borongan dan jual beli barang bekas.
        </p>

        <div className="mt-8 space-y-5">

          <ContactInfo
            icon={MapPin}
            title="Alamat"
            text="Jl. Muwardi No.16, RT.7/RW.2, Grogol, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450"
          />

          <ContactInfo
            icon={Phone}
            title="WhatsApp"
            text="+62 81320005406"
          />

          <ContactInfo
            icon={Mail}
            title="Email"
            text="limbahmangkujaya@gmail.com"
          />

        </div>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${WHATSAPP}?text=Halo%20UD%20Limbah%20Mangku%20Jaya,%20saya%20ingin%20konsultasi.`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition duration-300 hover:bg-green-700 hover:shadow-lg"
        >
          Chat WhatsApp
        </a>

      </div>

      {/* ================= RIGHT : FORM ================= */}
      <div>
        <ContactForm whatsapp={WHATSAPP} />
      </div>

    </div>

    {/* ================= GOOGLE MAP ================= */}
    <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Map Header */}
      <div className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-950">
            Lokasi Kami
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Jl. Muwardi No.16, RT.7/RW.2, Grogol, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450
          </p>
        </div>

        <a
          href="https://maps.app.goo.gl/fVBC7ezqnjT4JkGu8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
        >
          Buka di Google Maps
        </a>
      </div>

      {/* Map */}
      <div className="h-[400px] w-full sm:h-[450px]">

        <iframe
          src="https://www.google.com/maps?q=Pebayuran%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi UD Limbah Mangku Jaya"
        />

      </div>

    </div>

  </div>
</section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-5 pb-10 lg:px-6">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600 px-7 py-16 text-white sm:px-12 lg:px-20 lg:py-20">
          <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-slate-950/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="font-bold text-blue-100">
                SIAP MEMULAI?
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Jangan biarkan aset Anda terus menumpuk.
              </h2>

              <p className="mt-5 leading-7 text-blue-100">
                Konsultasikan barang atau aset Anda sekarang dan
                dapatkan penawaran terbaik dari tim kami.
              </p>
            </div>

            <button
              onClick={goWhatsApp}
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 font-black text-blue-600 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <MessageCircle size={20} />
              Chat WhatsApp
            </button>
          </div>
        </div>
      </section>

     {/* ================= FOOTER ================= */}
<footer className="bg-slate-950 text-white">
  <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
            LMS
          </div>

          <div>
            <p className="text-sm font-black tracking-wide">
              LIMBAHMANGKU JAYA
            </p>
            <p className="text-xs text-slate-400">
              Professional Service
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
          Solusi profesional untuk barang bekas, scrap, mesin
          industri dan likuidasi aset.
        </p>
      </div>

      {/* Menu */}
      <div>
        <h3 className="font-black">Menu</h3>

        <div className="mt-5 space-y-3 text-sm text-slate-400">
          <FooterLink href="#beranda" text="Beranda" />
          <FooterLink href="#layanan" text="Layanan" />
          <FooterLink href="#portofolio" text="Portofolio" />
          <FooterLink href="#harga" text="Harga" />
          <FooterLink href="#kontak" text="Kontak" />
        </div>
      </div>

      {/* Layanan */}
      <div>
        <h3 className="font-black">Layanan</h3>

        <div className="mt-5 space-y-3 text-sm text-slate-400">
          <p>Besi Tua &amp; Scrap</p>
          <p>Komputer &amp; Elektronik</p>
          <p>AC &amp; Mesin Pendingin</p>
          <p>Mesin Industri</p>
          <p>Bongkar Gudang</p>
        </div>
      </div>

      {/* Alamat */}
      <div>
        <h3 className="font-black">Alamat Kami</h3>

        <div className="mt-5 space-y-4 text-sm text-slate-400">

          <div className="flex gap-3">
            <MapPin
              className="shrink-0 text-blue-500"
              size={18}
            />

            <span>
              Jl. Muwardi No.16, RT.7/RW.2, Grogol,
              Kec. Grogol petamburan,
              <br />
              Kota Jakarta Barat, Indonesia
            </span>
          </div>

          <div className="flex gap-3">
            <Phone
              className="shrink-0 text-blue-500"
              size={18}
            />

            <span>+62 81320005406</span>
          </div>

          <div className="flex gap-3">
            <Mail
              className="shrink-0 text-blue-500"
              size={18}
            />

            <span>limbahmangkujaya@gmail.com</span>
          </div>

        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row">
      <p>
        © {new Date().getFullYear()} Limbah Mangku Jaya. All
        rights reserved.
      </p>

      <div className="flex gap-5">
        <a href="#" className="hover:text-white">
          Instagram
        </a>

        <a href="#" className="hover:text-white">
          Facebook
        </a>

        <a href="#" className="hover:text-white">
          TikTok
        </a>
      </div>
    </div>
  </div>
</footer>

{/* ================= FLOATING WHATSAPP ================= */}
<button
  onClick={goWhatsApp}
  aria-label="Chat WhatsApp"
  className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-900/30 transition hover:scale-110 hover:bg-green-600"
>
  <MessageCircle size={25} />
</button>

</main>
);

}

/* ================= COMPONENTS ================= */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
    >
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p
        className={`text-sm font-black uppercase tracking-[0.2em] ${
          dark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-5 text-base leading-8 ${
          dark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function ProblemCard({
  number,
  title,
  description,
  solution,
}: {
  number: string;
  title: string;
  description: string;
  solution: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-3xl border border-slate-200 bg-white p-7"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-black text-slate-300">
          {number}
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-500">
          <Check size={20} strokeWidth={3} />
        </div>
      </div>

      <h3 className="mt-6 text-xl font-black">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {description}
      </p>

      <div className="mt-6 rounded-2xl bg-blue-50 p-5">
        <p className="text-xs font-black uppercase tracking-wider text-blue-600">
          Solusi Kami
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-700">
          {solution}
        </p>
      </div>
    </motion.div>
  );
}

function TrustItem({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon size={20} />
      </div>

      <div>
        <p className="text-sm font-black text-slate-900">
          {title}
        </p>

        <p className="text-xs text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon size={18} />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {title}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-700">
          {text}
        </p>
      </div>
    </div>
  );
}

function FooterLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <a
      href={href}
      className="transition hover:text-white"
    >
      {text}
    </a>
  );
}
