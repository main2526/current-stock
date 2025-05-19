// app/stock/page.tsx
"use client";
import { getStockData } from "@/lib/getStock";

export default async function StockPage() {
  const data = await getStockData();

  const normal = data?.normalStock || [];
  const mirage = data?.mirageStock || [];

  const secondsLeft = data?.nextStockChange || 0;

  return (
    <main className="min-h-screen  text-white py-12 px-6 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl animate-pulse font-extrabold text-center mb-6 tracking-wide text-white animate-blink-slow md:block hidden">
          💀 Stock Actual de Blox Fruits X TurtleBloxFruits
        </h1>


        <h1 className="text-5xl animate-pulse font-extrabold text-center mb-6 tracking-wide text-white animate-blink-slow md:hidden block">
         Current Stock
        </h1> 

        <p className="text-center text-gray-400 mb-12 tracking-widest uppercase text-sm">
          ⏳ Stock Normal 4 horas &gt; Mirage Stock 2 horas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Stock Normal */}
          <div className="bg-gradient-to-br from-[#111421] to-[#20243c] rounded-3xl shadow-[0_0_25px_#57f287] border border-[#57f287] p-8 hover:scale-[1.05] transform transition-transform duration-500 cursor-pointer">
            <h2 className="text-3xl font-bold mb-6 text-lime-400 drop-shadow-[0_0_8px_rgba(87,242,135,0.8)]">
              🧺 Frutas en Stock Normal
            </h2>
            {normal.length > 0 ? (
              <ul className="space-y-3 list-disc list-inside text-gray-300 text-lg">
                {normal.map((fruit: string, i: number) => (
                  <li
                    key={i}
                    className="hover:text-lime-400 transition-colors duration-300 cursor-default"
                  >
                    {fruit}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">No hay frutas disponibles.</p>
            )}
          </div>

          {/* Stock Mirage */}
          <div className="bg-gradient-to-br from-[#1a0f28] to-[#3b2054] rounded-3xl shadow-[0_0_25px_#d75af6] border border-[#d75af6] p-8 hover:scale-[1.05] transform transition-transform duration-500 cursor-pointer">
            <h2 className="text-3xl font-bold mb-6 text-fuchsia-400 drop-shadow-[0_0_10px_rgba(215,90,246,0.9)]">
              🌌 Frutas en Stock Mirage
            </h2>
            {mirage.length > 0 ? (
              <ul className="space-y-3 list-disc list-inside text-gray-300 text-lg">
                {mirage.map((fruit: string, i: number) => (
                  <li
                    key={i}
                    className="hover:text-fuchsia-400 transition-colors duration-300 cursor-default"
                  >
                    {fruit}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">
                No hay frutas Mirage disponibles.
              </p>
            )}
          </div>
        </div>

        {/* Botón YouTube */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://www.youtube.com/@BootsDev-X"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-white font-extrabold text-xl tracking-widest uppercase shadow-lg hover:shadow-[0_0_25px_#ff0000] transition-shadow duration-500 select-none"
          >
            {/* SVG YouTube */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="yt-ringo2-svg_yt11"
              width="93"
              height="20"
           
            >
              <g>
                <path
                  d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z"
                  fill="#FF0033"
                ></path>
                <path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white"></path>
              </g>
            </svg>
            Sígueme en YouTube
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes blinkSlow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-blink-slow {
          animation: blinkSlow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
