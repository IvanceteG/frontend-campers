import { camperModels } from "@/data/models";

export async function getAllModels() {
  return Promise.resolve(camperModels);
}

export async function getModelBySlug(slug) {
  const model = camperModels.find((m) => m.slug === slug);
  return Promise.resolve(model ?? null);
}

export async function getFeaturedModels(limit = 4) {
  return Promise.resolve(camperModels.slice(0, limit));
}