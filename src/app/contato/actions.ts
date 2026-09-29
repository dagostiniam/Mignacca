"use server";

import { z } from "zod";
import { company } from "@/data/company";
import { services } from "@/data/services";

const serviceSlugs = services.map((s) => s.slug) as [string, ...string[]];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo."),
  companyName: z.string().trim().max(120).optional().or(z.literal("")),
  whatsapp: z.string().trim().min(8, "Informe um WhatsApp válido."),
  email: z.string().trim().email("Informe um e-mail válido."),
  city: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.union([z.enum(serviceSlugs), z.literal("outro")]).optional(),
  message: z.string().trim().min(10, "Conte um pouco mais sobre o que você precisa."),
  consent: z.literal("on", { message: "É necessário aceitar o tratamento dos seus dados." }),
  // Honeypot — real users never fill this hidden field.
  website: z.string().max(0).optional().or(z.literal("")),
});

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Verifique os campos destacados e tente novamente.",
      fieldErrors,
    };
  }

  if (parsed.data.website) {
    // Honeypot triggered — silently report success without sending anything.
    return { status: "success" };
  }

  const { name, companyName, whatsapp, email, city, service, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.warn(
      "[contato] RESEND_API_KEY / CONTACT_TO_EMAIL não configurados — mensagem recebida mas não enviada por e-mail.",
      { name, email, whatsapp },
    );
    return {
      status: "error",
      message:
        "No momento não conseguimos enviar sua mensagem automaticamente. Fale com a gente diretamente pelo WhatsApp — respondemos rápido.",
    };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const serviceName = services.find((s) => s.slug === service)?.name ?? "Não especificado";

    await resend.emails.send({
      from: `Site ${company.name} <onboarding@resend.dev>`,
      to,
      replyTo: email,
      subject: `Novo contato pelo site — ${name}`,
      text: [
        `Nome: ${name}`,
        `Empresa: ${companyName || "—"}`,
        `WhatsApp: ${whatsapp}`,
        `E-mail: ${email}`,
        `Cidade: ${city || "—"}`,
        `Serviço de interesse: ${serviceName}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
    });

    return {
      status: "success",
      message: "Mensagem enviada! Nossa equipe entrará em contato em breve.",
    };
  } catch (error) {
    console.error("[contato] Falha ao enviar e-mail", error);
    return {
      status: "error",
      message:
        "Não foi possível enviar sua mensagem agora. Tente novamente em instantes ou fale com a gente pelo WhatsApp.",
    };
  }
}
