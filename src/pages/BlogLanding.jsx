import React from "react";
import { Link } from "react-router-dom";
import data from "../data/fisika.json";

export default function BlogLanding() {
  return (
    <main className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Materi {data.group}</h1>
      {data.content.map((item) => (
        <div key={item.no} className="border p-4 rounded shadow hover:bg-purple-50 transition">
          <h2 className="text-xl font-semibold">{item.judul}</h2>
          <p className="text-sm text-gray-600">{item.topik} • {item.subtopik}</p>
          <Link
            to={`/materi/${item.no}`}
            className="text-purple-600 hover:underline inline-block mt-2"
          >
            Baca selengkapnya →
          </Link>
        </div>
      ))}
    </main>
  );
}
