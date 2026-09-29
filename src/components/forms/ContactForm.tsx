"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { submitContactForm, type ContactFormState } from "@/app/contato/actions";

const initialState: ContactFormState = { status: "idle" };

const inputClasses =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none";

function Field({
  label,
  name,
  error,
  ...rest
}: {
  label: string;
  name: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-text">
        {label}
      </label>
      <input id={name} name={name} className={inputClasses} {...rest} />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <p className="font-display text-xl font-semibold text-primary">
          Mensagem enviada!
        </p>
        <p className="mt-2 text-sm text-text-muted">
          {state.message ?? "Nossa equipe entrará em contato em breve."}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot field — hidden from real users, catches basic bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Não preencher</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Nome completo" name="name" required error={state.fieldErrors?.name} />
        <Field label="Empresa" name="companyName" error={state.fieldErrors?.companyName} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="WhatsApp"
          name="whatsapp"
          type="tel"
          placeholder="(31) 90000-0000"
          required
          error={state.fieldErrors?.whatsapp}
        />
        <Field label="E-mail" name="email" type="email" required error={state.fieldErrors?.email} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Cidade" name="city" error={state.fieldErrors?.city} />
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-text">
            Serviço de interesse
          </label>
          <select id="service" name="service" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Selecione uma opção
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
            <option value="outro">Outro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClasses}
          placeholder="Conte um pouco sobre sua empresa e o que você precisa."
        />
        {state.fieldErrors?.message && (
          <p className="mt-1.5 text-xs text-red-600">{state.fieldErrors.message}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-border-strong text-primary focus:ring-primary"
        />
        <label htmlFor="consent" className="text-xs leading-relaxed text-text-muted">
          Autorizo o uso dos meus dados para que a Mignacca entre em contato
          comigo, em conformidade com a{" "}
          <a href="/privacidade" className="underline hover:text-primary">
            Política de Privacidade
          </a>
          .
        </label>
      </div>
      {state.fieldErrors?.consent && (
        <p className="-mt-3 text-xs text-red-600">{state.fieldErrors.consent}</p>
      )}

      {state.status === "error" && state.message && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">{state.message}</p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isPending}>
        {isPending ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  );
}
