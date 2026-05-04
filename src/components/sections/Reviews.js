const reviews = [
  { id: 1, name: "Josep P.", rating: 5, text: "Experiència increïble! La furgoneta estava impecable." },
  { id: 2, name: "Laura M.", rating: 5, text: "Molt bon servei i atenció al client. Repetirem segur!" },
  { id: 3, name: "Marc G.", rating: 5, text: "Tot perfecte, des de la reserva fins a l'entrega." },
  { id: 4, name: "Anna T.", rating: 4, text: "Una furgoneta molt còmoda. Ens va encantar la ruta." },
];

export default function Reviews() {
  return (
    <section id="opinions" className="py-24 bg-background-soft border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonis</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">El que diuen els nostres clients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <article key={r.id} className="bg-background border border-border rounded-xl p-5">
              <div className="flex gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < r.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{r.text}</p>
              <p className="mt-4 text-sm font-semibold text-primary">{r.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}