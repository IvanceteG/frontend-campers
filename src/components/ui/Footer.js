export default function Footer() {
  return (
    <footer className="bg-background-soft border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} VanLife Rentals. Tots els drets reservats.</p>
        <div className="flex gap-6">
          <span>Pagament 100% segur</span>
          <span>Cancel·lació flexible</span>
          <span>Suport 24/7</span>
        </div>
      </div>
    </footer>
  );
}