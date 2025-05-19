export async function getStockData() {
  try {
    const res = await fetch("https://blox-fruit-stock-fruit.p.rapidapi.com/", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "blox-fruit-stock-fruit.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY!, // Asegúrate de definir esta variable en tu .env.local
      },
      cache: "no-store", // Para evitar que Next.js use datos viejos
    });

    if (!res.ok) {
      console.error("Error al obtener el stock: status", res.status);
      return null;
    }

    const data = await res.json();

    // Mostrar en consola del servidor para debug
    console.log("📦 Datos del stock obtenidos:", data);

    return data;
  } catch (error) {
    console.error("❌ Error en getStockData:", error);
    return null;
  }
}