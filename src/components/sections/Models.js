import { listFeatured } from "@/controllers/modelsController";
import ModelCard from "@/components/ui/ModelCard";

export default async function Models() {
  const { ok, data: models, error } = await listFeatured(4);

  return (
    <section id="models" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              La nostra flota
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Models destacats</h2>
            <p className="mt-3 text-muted max-w-xl">
              Tria la camper que millor s&apos;adapta al teu estil de viatge.
            </p>
          </div>
          <a href="#tots-models" className="text-primary hover:text-primary-hover font-medium text-sm">
            Veure tots els models →
          </a>
        </div>

        {!ok && <p className="text-red-400">{error}</p>}

        {ok && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}