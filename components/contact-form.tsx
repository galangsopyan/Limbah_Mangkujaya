"use client";

import { useForm } from "react-hook-form";
import { MessageCircle, Send } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm({
  whatsapp,
}: {
  whatsapp: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const message = `
Halo UD Sekawan Teknik 👋

Saya ingin berkonsultasi mengenai jasa.

Nama: ${data.name}
No. WhatsApp: ${data.phone}
Layanan: ${data.service}

Detail:
${data.message}

Mohon informasi lebih lanjut mengenai estimasi harga dan prosesnya.
Terima kasih.
`;

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 sm:p-9"
    >
      <div className="mb-7">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
          <MessageCircle />
        </div>

        <h3 className="text-2xl font-black text-slate-950">
          Minta Penawaran
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Isi data singkat berikut dan kami akan menghubungi Anda
          melalui WhatsApp.
        </p>
      </div>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Nama
          </label>

          <input
            {...register("name", {
              required: "Nama wajib diisi",
            })}
            placeholder="Masukkan nama Anda"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          />

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Nomor WhatsApp
          </label>

          <input
            {...register("phone", {
              required: "Nomor WhatsApp wajib diisi",
            })}
            type="tel"
            placeholder="08xxxxxxxxxx"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          />

          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Service */}
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Kebutuhan
          </label>

          <select
            {...register("service", {
              required: "Silakan pilih layanan",
            })}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          >
            <option value="">Pilih layanan</option>
            <option value="Besi Tua & Scrap Logam">
              Besi Tua & Scrap Logam
            </option>
            <option value="Komputer & Elektronik">
              Komputer & Elektronik
            </option>
            <option value="AC & Mesin Pendingin">
              AC & Mesin Pendingin
            </option>
            <option value="Mesin Industri">
              Mesin Industri
            </option>
            <option value="Bongkar Gudang">
              Bongkar Gudang
            </option>
            <option value="Likuidasi Aset">
              Likuidasi Aset
            </option>
            <option value="Lainnya">Lainnya</option>
          </select>

          {errors.service && (
            <p className="mt-1 text-xs text-red-500">
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Detail Barang / Kebutuhan
          </label>

          <textarea
            {...register("message", {
              required: "Detail kebutuhan wajib diisi",
            })}
            rows={4}
            placeholder="Contoh: Ada sekitar 500kg besi tua di gudang..."
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          />

          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-black text-white transition hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
        >
          Kirim ke WhatsApp
          <Send size={18} />
        </button>

        <p className="text-center text-xs text-slate-400">
          Dengan mengirim form, Anda akan diarahkan ke WhatsApp.
        </p>
      </div>
    </form>
  );
}