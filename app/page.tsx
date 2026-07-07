"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[url('https://images.unsplash.com/photo-1558030006-450675393462')] bg-cover bg-center">
        <div className="bg-black/70 p-8 rounded-xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-red-600"
          >
            Parrilla al Paso 🔥
          </motion.h1>

          <p className="mt-4 text-lg">
            Viernes y Sábados — sabor bien argentino 🇦🇷
          </p>

         {/*<motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
          >
            Ver Menú
          </motion.button>*/}
        </div>
      </section>

      {/* MENÚ */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-yellow-500">
          Nuestro Menú
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Viernes */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-red-500">Viernes</h3>
            <ul className="mt-4 space-y-2">
              <li>🥩 Vacío (porción o sandwich)</li>
              <li>🌭 Choripán</li>
              <li>🍟 Papas fritas</li>
            </ul>
          </motion.div>

          {/* Sábado */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-red-500">Sábado</h3>
            <ul className="mt-4 space-y-2">
              <li>🍕 Matambre a la pizza</li>
              <li>🥪 Sándwich de bondiola</li>
              
              <li>🌭 Choripán</li>
              <li>🍟 Papas fritas</li>
            </ul>
          </motion.div>

          {/* Extras */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-red-500">Extras</h3>
            <ul className="mt-4 space-y-2">
              <li>🧄 Chimichurri casero</li>
              <li>🥗 Salsa criolla</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* SOBRE VOS */}
      <section className="py-16 px-6 bg-zinc-950 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-yellow-500"
        >
          Hecho con pasión ❤️
        </motion.h2>

        <p className="mt-6 max-w-xl mx-auto">
          Soy Natalia, cocino cada fin de semana con amor y dedicación.
          Todo es casero, hecho en el momento y pensado para que disfrutes
          el verdadero sabor de la parrilla argentina.
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-red-500">
          Hacé tu pedido 📲
        </h2>

        <a
          href="https://wa.me/5491164806794"
          target="_blank"
          className="inline-block mt-6 bg-green-500 text-black px-6 py-3 rounded-lg font-bold"
        >
          Pedir por WhatsApp
        </a>
      </section>

    </main>
  );
}