# Mignacca site

Site institucional da Mignacca em Next.js.

## O que mudou

- o único código de backend do projeto era um Server Action para enviar o formulário de contato por e-mail via Resend
- esse formulário já estava desativado na página de contato, então o backend não era necessário para o site atual
- o projeto agora está configurado como frontend-only com exportação estática para hospedagem no GitHub Pages

## Desenvolvimento

```bash
npm ci
npm run dev
```

## Build estático

```bash
npm run build
```

O build gera a versão estática em `out/`.

## GitHub Pages

- `next.config.ts` usa `output: "export"` para gerar arquivos estáticos
- `trailingSlash: true` evita depender de rewrites no host
- `public/.nojekyll` garante que a pasta `_next/` seja publicada corretamente no GitHub Pages

Se no futuro o formulário de contato por e-mail voltar a ser necessário, será preciso reintroduzir algum serviço externo ou backend para processar o envio.
