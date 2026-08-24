import { useState } from "react"
import { Link } from "react-router-dom"
import { StepProgress } from "../components/StepProgress"
import { StepTransition } from "../components/StepTransition"

const steps = ["Tipo de obra", "Dimensiones", "Referencias", "Presupuesto", "Datos", "Confirmación"]

const tipos = [
  { id: "comision", label: "Comisión nueva", detail: "Una pieza original, pensada desde cero para ti." },
  { id: "existente", label: "Obra existente", detail: "Adquirir una pieza ya terminada del catálogo." },
  { id: "restauracion", label: "Restauración", detail: "Recuperar una obra familiar o de colección." },
]

const dimensionOptions = ['Pequeño — hasta 40×40 cm', 'Mediano — hasta 80×100 cm', 'Grande — más de 100 cm', 'Por definir con la artista']

const presupuestos = ["$3,000 – 8,000 MXN", "$8,000 – 18,000 MXN", "$18,000 – 35,000 MXN", "Más de $35,000 MXN"]

export function Adquirir() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    tipo: "",
    dimension: "",
    referencias: "",
    presupuesto: "",
    nombre: "",
    email: "",
    telefono: "",
  })
  const [sent, setSent] = useState(false)

  const canAdvance = [
    !!form.tipo,
    !!form.dimension,
    true,
    !!form.presupuesto,
    !!(form.nombre.trim() && form.email.trim()),
  ][step]

  const next = () => {
    if (step === 4) {
      setSent(true)
      setStep(5)
      return
    }
    setStep((s) => Math.min(s + 1, steps.length - 1))
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
      <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Private viewing</span>
      <h1 className="mt-2 mb-8 font-display text-[clamp(2rem,5.6vw,3.2rem)] uppercase leading-[0.9]">Adquirir una obra</h1>

      <StepProgress steps={steps} current={step} />

      <div className="py-8">
       <StepTransition step={step}>
        {step === 0 && (
          <div className="flex flex-col gap-3">
            {tipos.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setForm((f) => ({ ...f, tipo: t.id }))}
                className={`border p-4 text-left transition-colors ${
                  form.tipo === t.id ? "border-ink bg-ink text-bone" : "border-bone-shade-2 hover:border-ink"
                }`}
              >
                <span className="font-display text-xl uppercase">{t.label}</span>
                <p className={`mt-1 text-sm ${form.tipo === t.id ? "text-bone-shade-2" : "text-ink-soft"}`}>{t.detail}</p>
              </button>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col gap-3">
            {dimensionOptions.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setForm((f) => ({ ...f, dimension: d }))}
                className={`border px-4 py-3 text-left font-mono text-sm uppercase tracking-wide transition-colors ${
                  form.dimension === d ? "border-ink bg-ink text-bone" : "border-bone-shade-2 hover:border-ink"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <label className="flex flex-col gap-1.5">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">
              Referencias (opcional)
            </span>
            <textarea
              rows={5}
              value={form.referencias}
              onChange={(e) => setForm((f) => ({ ...f, referencias: e.target.value }))}
              placeholder="Describe la pieza que imaginas, o pega enlaces a fotos de referencia. Puedes enviar imágenes por correo o WhatsApp después de este paso."
              className="border border-bone-shade-2 bg-bone px-3 py-2 text-ink outline-none focus:border-ink"
            />
          </label>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-3">
            {presupuestos.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setForm((f) => ({ ...f, presupuesto: p }))}
                className={`border px-4 py-3 text-left font-mono text-sm uppercase tracking-wide transition-colors ${
                  form.presupuesto === p ? "border-ink bg-ink text-bone" : "border-bone-shade-2 hover:border-ink"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Nombre completo</span>
              <input
                value={form.nombre}
                onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                className="border border-bone-shade-2 bg-bone px-3 py-2 text-ink outline-none focus:border-ink"
                placeholder="Nombre y apellido"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Correo</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="border border-bone-shade-2 bg-bone px-3 py-2 text-ink outline-none focus:border-ink"
                placeholder="tu@email.com"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">WhatsApp (opcional)</span>
              <input
                type="tel"
                value={form.telefono}
                onChange={(e) => setForm((f) => ({ ...f, telefono: e.target.value }))}
                className="border border-bone-shade-2 bg-bone px-3 py-2 text-ink outline-none focus:border-ink"
                placeholder="55 0000 0000"
              />
            </label>
          </div>
        )}

        {step === 5 && sent && (
          <div className="border border-ink/70 p-6 text-center">
            <p className="font-mono text-[0.62rem] uppercase tracking-widest text-verde">Solicitud enviada</p>
            <h2 className="mt-2 font-display text-2xl uppercase">Gracias, {form.nombre.split(" ")[0] || "por tu interés"}</h2>
            <p className="mt-3 text-ink-soft">
              Mashanta revisa cada solicitud de manera personal. Te contactará por correo o WhatsApp en un plazo de 2–3 días hábiles para agendar tu private viewing.
            </p>
            <Link to="/obras" className="mt-6 inline-block border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest hover:bg-ink hover:text-bone">
              Seguir viendo obra
            </Link>
          </div>
        )}
       </StepTransition>
      </div>

      {step < 5 && (
        <div className="flex items-center justify-between border-t border-bone-shade-2 pt-6">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(s - 1, 0))}
            className={`font-mono text-xs uppercase tracking-widest text-graphite hover:text-ink ${step === 0 ? "invisible" : ""}`}
          >
            ← Atrás
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance}
            className="border border-terracota bg-terracota px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink disabled:cursor-not-allowed disabled:border-bone-shade-2 disabled:bg-bone-shade-2 disabled:text-graphite"
          >
            {step === 4 ? "Enviar solicitud" : "Continuar"}
          </button>
        </div>
      )}
    </div>
  )
}
