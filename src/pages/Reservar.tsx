import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { courses } from "../lib/data"
import { StepProgress } from "../components/StepProgress"
import { StepTransition } from "../components/StepTransition"
import { NotFound } from "./NotFound"

const steps = ["Curso", "Datos del alumno", "Contacto y pago", "Confirmación"]

export function Reservar() {
  const { slug } = useParams()
  const course = courses.find((c) => c.slug === slug)
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ nombre: "", edad: "", email: "", telefono: "", metodo: "transferencia", notas: "" })
  const [submitted, setSubmitted] = useState(false)

  if (!course) return <NotFound />
  if (course.availability === "agotado") {
    return (
      <div className="mx-auto max-w-xl px-5 py-24 text-center sm:px-8">
        <h1 className="font-display text-3xl uppercase">Este taller está agotado</h1>
        <p className="mt-4 text-ink-soft">Escríbenos y te avisamos en cuanto se libere un lugar.</p>
        <Link to={`/otros/cursos/${course.slug}`} className="mt-6 inline-block border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest">
          Volver al curso
        </Link>
      </div>
    )
  }

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const canAdvance =
    (step === 1 && form.nombre.trim() && form.edad.trim()) ||
    (step === 2 && form.email.trim() && form.telefono.trim()) ||
    step === 0

  const next = () => {
    if (step === 2) {
      setSubmitted(true)
      setStep(3)
      return
    }
    setStep((s) => Math.min(s + 1, steps.length - 1))
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
      <Link to={`/otros/cursos/${course.slug}`} className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite hover:text-ink">
        ← {course.title}
      </Link>
      <h1 className="mt-3 mb-8 font-display text-[clamp(2rem,5.6vw,3.2rem)] uppercase leading-[0.9]">Reservar lugar</h1>

      <StepProgress steps={steps} current={step} />

      <div className="py-8">
       <StepTransition step={step}>
        {step === 0 && (
          <div className="border border-ink/15 p-5">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">{course.date} — {course.time}</span>
            <h2 className="mt-1 font-display text-2xl uppercase">{course.title}</h2>
            <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-wide text-graphite-soft">
              {course.level} — {course.location}
            </p>
            <p className="mt-4 font-display text-2xl">{course.price}</p>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col gap-5">
            <Field label="Nombre completo" value={form.nombre} onChange={update("nombre")} placeholder="Nombre y apellido" />
            <Field label="Edad" value={form.edad} onChange={update("edad")} placeholder="Edad del alumno o alumna" />
            <Field label="Notas (opcional)" value={form.notas} onChange={update("notas")} placeholder="Alergias, experiencia previa, alguna consideración" textarea />
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-5">
            <Field label="Correo" value={form.email} onChange={update("email")} placeholder="tu@email.com" type="email" />
            <Field label="WhatsApp" value={form.telefono} onChange={update("telefono")} placeholder="55 0000 0000" type="tel" />
            <div>
              <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Método de contacto para el pago</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  { id: "transferencia", label: "Transferencia" },
                  { id: "estudio", label: "En el estudio" },
                  { id: "whatsapp", label: "Coordinar por WhatsApp" },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, metodo: m.id }))}
                    className={`border px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-widest transition-colors ${
                      form.metodo === m.id ? "border-ink bg-ink text-bone" : "border-bone-shade-2 text-graphite hover:border-ink hover:text-ink"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && submitted && (
          <div className="border border-ink/15 p-6 text-center">
            <p className="font-mono text-[0.62rem] uppercase tracking-widest text-verde">Lugar apartado</p>
            <h2 className="mt-2 font-display text-2xl uppercase">Te esperamos, {form.nombre.split(" ")[0] || "por aquí"}</h2>
            <p className="mt-3 text-ink-soft">
              Confirmamos tu lugar en <strong>{course.title}</strong> por WhatsApp o correo dentro de las próximas 24 horas, con los datos para completar el pago vía {form.metodo === "transferencia" ? "transferencia" : form.metodo === "estudio" ? "pago en el estudio" : "WhatsApp"}.
            </p>
          </div>
        )}
       </StepTransition>
      </div>

      {step < 3 && (
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
            {step === 2 ? "Confirmar reservación" : "Continuar"}
          </button>
        </div>
      )}
    </div>
  )
}

function Field({
  label,
  textarea,
  ...props
}: { label: string; textarea?: boolean } & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = label.toLowerCase().replace(/\s+/g, "-")
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">{label}</span>
      {textarea ? (
        <textarea id={id} rows={3} className="border border-bone-shade-2 bg-bone px-3 py-2 text-ink outline-none focus:border-ink" {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input id={id} className="border border-bone-shade-2 bg-bone px-3 py-2 text-ink outline-none focus:border-ink" {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />
      )}
    </label>
  )
}
