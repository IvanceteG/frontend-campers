import { listFeatured } from "@/controllers/modelsController";
import ModelCard from "@/components/ui/ModelCard";

export default async function Models() {
  const { ok, data: models, error } = await listFeatured(4);

  return (
    <section
      id="models"
      className="relative py-24 bg-background-soft border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              <span aria-hidden="true">✦</span> La nostra flota
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
              Cada camper, <span className="italic text-primary">una història</span> per escriure.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Des de compactes urbanes fins a 4x4 d&apos;aventura. Tria la que
              encaixa amb el teu pròxim viatge.
            </p>
          </div>
          <a
            href="#contacte"
            className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b-2 border-primary pb-1 hover:gap-3 transition-all"
          >
            Veure totes les furgonetes
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {!ok && (
          <div
            role="alert"
            className="bg-card border border-primary/30 text-primary px-4 py-3 rounded-xl"
          >
            {error}
          </div>
        )}

        {ok && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
