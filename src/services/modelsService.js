import { camperModels } from "@/data/models";

/**
 * Capa de servei: aïlla l'origen de dades.
 * Si està definida NEXT_PUBLIC_API_URL, fem fetch a l'API real.
 * Si no, retornem dades mock locals (útil mentre el backend no està llest).
 */
const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchFromApi(path) {
  const res = await fetch(`${API_URL}${path}`, {
    // Cache: cada hora. Ajustar segons necessitat.
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`API ${path} ha retornat ${res.status}`);
  }
  return res.json();
}

export async function getAllModels() {
  if (API_URL) {
    return fetchFromApi("/api/models");
  }
  return camperModels;
}

export async function getModelBySlug(slug) {
  if (API_URL) {
    try {
      return await fetchFromApi(`/api/models/${slug}`);
    } catch {
      return null;
    }
  }
  return camperModels.find((m) => m.slug === slug) ?? null;
}

export async function getFeaturedModels(limit = 4) {
  if (API_URL) {
    return fetchFromApi(`/api/models?featured=true&limit=${limit}`);
  }
  return camperModels.filter((m) => m.featured).slice(0, limit);
}
