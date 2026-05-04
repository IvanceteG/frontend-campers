import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "#inici", label: "Inici" },
    { href: "#models", label: "Catàleg" },
    { href: "#nosaltres", label: "Sobre nosaltres" },
    { href: "#contacte", label: "Contacte" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
          <span className="font-bold text-lg tracking-tight">
            VanLife <span className="text-muted font-normal">Rentals</span>
          </span>
        </Link>

        {/* Enllaços */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contacte"
          className="bg-primary hover:bg-primary-hover text-background font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          Reserva ara
        </Link>
      </nav>
    </header>
  );
}