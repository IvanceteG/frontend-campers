import Link from "next/link";

export default function Hero() {
  return (
    <section id="inici" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            La teva aventura
            <br />
            <span className="text-primary">comença aquí</span>
          </h1>

          <p className="mt-6 text-lg text-muted max-w-lg">
            Furgonetes camper totalment equipades per viure experiències inoblidables arreu del territori.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#models" className="bg-primary hover:bg-primary-hover text-background font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2">
              Descobreix els models →
            </Link>
            <button type="button" className="border border-border hover:border-primary text-foreground font-semibold px-6 py-3.5 rounded-lg transition-colors">
              ▶ Veure vídeo
            </button>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm">
            <span className="text-foreground font-medium">Excel·lent</span>
            <div className="flex gap-0.5 text-primary">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-muted">4.8/5 a Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
}