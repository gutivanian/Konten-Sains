import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, Tag, ExternalLink, Quote } from "lucide-react";
import data from "../data/fisika.json";

export default function BlogDetail() {
  const { id } = useParams();
  const materi = data.content.find((item) => item.no.toString() === id);

  if (!materi) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Materi Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-4">Materi yang Anda cari tidak tersedia.</p>
          <Link to="/" className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header dengan background gradient */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-blue-100">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4" />
                <span className="text-sm">{materi.topik}</span>
              </div>
              <span className="text-blue-300">•</span>
              <span className="text-sm">{materi.subtopik}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {materi.judul}
            </h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        
        {/* Pendahuluan Section */}
        <section className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Quote className="w-5 h-5 mr-2" />
              Pendahuluan
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {materi.pendahuluan.map((paragraf, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-justify">
                {paragraf.join(" ")}
              </p>
            ))}
          </div>
        </section>

        {/* Sejarah Section */}
        <section className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Sejarah
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {materi.sejarah.map((paragraf, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-justify">
                {paragraf.join(" ")}
              </p>
            ))}
          </div>
        </section>

        {/* Isi Section */}
        <section className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Pembahasan
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {materi.isi.map((paragraf, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-justify">
                {paragraf.join(" ")}
              </p>
            ))}
          </div>
        </section>

        {/* Referensi Section */}
        <section className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              Referensi
            </h2>
          </div>
          <div className="p-6 space-y-6">
            
            {/* Daftar Pustaka */}
            {materi.daftar_pustaka.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Daftar Pustaka</h3>
                <ul className="space-y-2">
                  {materi.daftar_pustaka.map((ref, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{ref}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Link Referensi */}
            {materi.referensi_link.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Link Referensi</h3>
                <ul className="space-y-2">
                  {materi.referensi_link.map((link, i) => (
                    <li key={i} className="flex items-start">
                      <ExternalLink className="w-4 h-4 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <a 
                        href={link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors break-all"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Back to top button */}
        <div className="text-center pt-8">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </main>
    </div>
  );
}