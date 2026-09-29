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
- `BASE_PATH` pode ser definido no build para publicar em subdiretórios (ex.: `BASE_PATH=/Mignacca` no URL padrão do GitHub Pages)
- `public/.nojekyll` garante que a pasta `_next/` seja publicada corretamente no GitHub Pages

### Deploy automático

O repositório inclui o workflow `/home/runner/work/Mignacca/Mignacca/.github/workflows/deploy-pages.yml`, que publica o conteúdo de `out/` no GitHub Pages a cada push na branch `main`.

Para ativar:

1. No GitHub, abra **Settings → Pages**
2. Em **Source**, selecione **GitHub Actions**
3. Faça push para `main`

### Base path

- URL padrão do GitHub Pages (`https://dagostiniam.github.io/Mignacca/`): mantenha `BASE_PATH: /Mignacca` no workflow
- domínio customizado (`https://www.mignaccacontabilidade.com.br`): deixe `BASE_PATH` vazio, como no workflow atual

Se a branch principal do repositório mudar de nome, atualize também o gatilho `on.push.branches` do workflow.

Como o site é frontend-only, reintroduzir Server Actions, route handlers dependentes de request ou outros recursos que exijam backend quebrará o deploy estático no GitHub Pages.

Se no futuro o formulário de contato por e-mail voltar a ser necessário, será preciso reintroduzir algum serviço externo ou backend para processar o envio.
