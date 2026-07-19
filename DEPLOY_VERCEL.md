Passos rápidos para deploy no Vercel

1. Crie uma conta em https://vercel.com e faça login.
2. No painel do Vercel, clique em "New Project" → "Import Git Repository" e selecione este repositório.
3. Garanta que o comando de build esteja `npm run build` (padrão: `next build`). O Vercel vai usar `vercel.json` para o builder do Next.
4. Antes de deploy, copie `.env.example` para `.env.local` e preencha as variáveis necessárias.
   - Variáveis públicas devem começar com `NEXT_PUBLIC_`.
5. Opcional: defina a versão do Node nas configurações do projeto no Vercel para `18.x` se necessário.
6. Clique em "Deploy".

Comandos locais úteis:

```powershell
npm install
npm run build
npm run start
```
