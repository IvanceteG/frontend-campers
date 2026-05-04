"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", pickupDate: "", returnDate: "", message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Omple els camps obligatoris." });
      return;
    }
    console.log("Contact form data:", form);
    setStatus({ type: "success", message: "Sol·licitud enviada! Et contactarem aviat." });
    setForm({ name: "", email: "", phone: "", pickupDate: "", returnDate: "", message: "" });
  }

  return (
    <section id="contacte" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contacta</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Reserva la teva furgoneta</h2>
          <p className="mt-3 text-muted">Omple el formulari i et respondrem aviat.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-background-soft border border-border rounded-2xl p-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Nom *" name="name" value={form.name} onChange={handleChange} placeholder="El teu nom complet" />
            <Field label="Correu electrònic *" name="email" type="email" value={form.email} onChange={handleChange} placeholder="exemple@correu.com" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Field label="Telèfon" name="phone" value={form.phone} onChange={handleChange} placeholder="600 000 000" />
            <Field label="Data de recollida" name="pickupDate" type="date" value={form.pickupDate} onChange={handleChange} />
            <Field label="Data de tornada" name="returnDate" type="date" value={form.returnDate} onChange={handleChange} />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Missatge *</label>
            <textarea
              name="message" value={form.message} onChange={handleChange} rows={4}
              placeholder="Explica què necessites..."
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          {status.type && (
            <p className={`text-sm ${status.type === "error" ? "text-red-400" : "text-primary"}`}>
              {status.message}
            </p>
          )}

          <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-background font-semibold py-3 rounded-lg transition-colors">
            Comprova disponibilitat
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}