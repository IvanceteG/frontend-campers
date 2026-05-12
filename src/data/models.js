/**
 * Mock de models de camper.
 * Les imatges es carreguen des de /public/models/ (locals, no externes).
 * Quan el backend estigui llest, `modelsService` farà fetch a l'API real.
 */
export const camperModels = [
  {
    id: 1,
    slug: "sunlight-cliff-640",
    name: "Sunlight Cliff 640",
    type: "Compacta",
    seats: 4,
    beds: 2,
    bathroom: "WC químic",
    parking: "Sensor + GPS",
    pricePerDay: 120,
    description:
      "Camper compacta i àgil, ideal per a parelles. Cuina equipada, frigorífic i llit elevable.",
    image: "/models/sunlight-cliff-640.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "volkswagen-california",
    name: "Volkswagen California",
    type: "Icònica",
    seats: 4,
    beds: 4,
    bathroom: "—",
    parking: "GPS + càmera",
    pricePerDay: 150,
    description:
      "La icona del camperisme amb sostre elevable, cuina lateral i acabats premium.",
    image: "/models/volkswagen-california.jpg",
    featured: true,
  },
  {
    id: 3,
    slug: "ford-transit-custom",
    name: "Ford Transit Custom",
    type: "Familiar",
    seats: 4,
    beds: 4,
    bathroom: "WC",
    parking: "GPS + Bluetooth",
    pricePerDay: 110,
    description:
      "Espai, autonomia i fiabilitat per a famílies. Tendal exterior i taula plegable inclosa.",
    image: "/models/ford-transit-custom.jpg",
    featured: true,
  },
  {
    id: 4,
    slug: "mercedes-marco-polo",
    name: "Mercedes Marco Polo",
    type: "Premium",
    seats: 4,
    beds: 4,
    bathroom: "WC + dutxa",
    parking: "GPS Premium + assistents",
    pricePerDay: 180,
    description:
      "Luxe sobre rodes per al viatger exigent. Climatització bizonal i acabats en cuir.",
    image: "/models/mercedes-marco-polo.jpg",
    featured: true,
  },
  {
    id: 5,
    slug: "fiat-ducato-adventure",
    name: "Fiat Ducato Adventure",
    type: "Aventura",
    seats: 5,
    beds: 4,
    bathroom: "WC + dutxa",
    parking: "Tracció 4x4 + GPS",
    pricePerDay: 165,
    description:
      "Pensada per a rutes off-road. Suspensió reforçada i panell solar de 200W.",
    image: "/models/fiat-ducato-adventure.jpg",
    featured: false,
  },
  {
    id: 6,
    slug: "renault-trafic-spacenomad",
    name: "Renault Trafic SpaceNomad",
    type: "Urbana",
    seats: 4,
    beds: 2,
    bathroom: "—",
    parking: "GPS + càmera 360°",
    pricePerDay: 95,
    description:
      "Compacta i fàcil d'aparcar a ciutat. L'opció més econòmica per escapades curtes.",
    image: "/models/renault-trafic-spacenomad.jpg",
    featured: false,
  },
];
