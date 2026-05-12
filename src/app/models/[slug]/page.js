import Link from "next/link";
import { notFound } from "next/navigation";
import { showModel } from "@/controllers/modelsController";
import { getAllModels } from "@/services/modelsService";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ModelDetailImage from "@/components/ui/ModelDetailImage";

// Generació estàtica de paràmetres per a SSG
export async function generateStaticParams() {
  const models = await getAllModels();
  return models.map((m) => ({ slug: m.slug }));
}

// Metadata dinàmica per SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { ok, data: model } = await showModel(slug);
  if (!ok) return { title: "Model no trobat — VanLife Rentals" };
  return {
    title: `${model.name} — VanLife Rentals`,
    description: model.description,
  };
}

export default async function ModelDetailPage({ params }) {
  const { slug } = await params;
  const { ok, data: model } = await showModel(slug);

  if (!ok || !model) {
    notFound();
  }

  return (
    <main className="relative">
      <Navbar />

      <article className="pt-32 pb-16 bg-grain">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/#models"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
          >
            <span aria-hidden="true">←</span> Tornar al catàleg
          </Link>

          <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
            <ModelDetailImage
              src={model.image}
              alt={`Furgoneta ${model.name}`}
              type={model.type}
            />

            <div>
              <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                {model.name}
              </h1>
              <p className="mt-4 text-muted leading-relaxed">
                {model.description}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-4">
                <Stat label="Places" value={model.seats} />
                <Stat label="Llits" value={model.beds} />
                <Stat label="Bany" value={model.bathroom} />
                <Stat label="Equipament" value={model.parking} />
              </dl>

              <div className="mt-8 p-5 bg-card border border-border rounded-2xl flex items-end justify-between">
                <div>
                  <span className="text-xs text-muted uppercase tracking-wider">
                    Des de
                  </span>
                  <div>
                    <span className="font-display text-4xl font-bold text-primary">
                      {model.pricePerDay} €
                    </span>
                    <span className="text-sm text-muted ml-1">/ dia</span>
                  </div>
                </div>
                <Link
                  href="/#contacte"
                  className="bg-foreground hover:bg-primary text-card font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Reservar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <dt className="text-xs text-muted uppercase tracking-wider">{label}</dt>
      <dd className="mt-1 font-semibold text-foreground">{value}</dd>
    </div>
  );
}
