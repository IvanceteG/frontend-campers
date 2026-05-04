import Link from "next/link";

export default function ModelCard({ model }) {
  return (
    <article className="bg-background-soft border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group">
      <div className="relative h-48 bg-gradient-to-br from-border to-background-soft overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-soft/80 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground">{model.name}</h3>

        <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted">
          <span>👥 {model.seats} places</span>
          <span>🛏️ {model.beds} llits</span>
          <span>🚿 {model.bathroom}</span>
          <span>📍 {model.parking}</span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">{model.pricePerDay} €</span>
            <span className="text-xs text-muted ml-1">/ dia</span>
          </div>
          <Link href={`/models/${model.slug}`} className="text-sm font-medium text-primary hover:text-primary-hover">
            Veure més →
          </Link>
        </div>
      </div>
    </article>
  );
}