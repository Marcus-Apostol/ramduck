# RAMduck

The teaser website for **RAMduck**, a stealth-mode startup building an AI that runs on a blockchain. The site deliberately reveals very little: it builds curiosity with a boot-log animation, three "declassified" hints, a redacted "classified file" visitors can try (and fail) to declassify, and an early-access waitlist.

## Tech

- [TanStack Start](https://tanstack.com/start) + React 19
- Tailwind CSS 4 (brand tokens in `src/styles.css`)
- Netlify Forms for the waitlist
- Netlify Image CDN for the logo and banner

## Run locally

```bash
pnpm install
netlify dev   # or: pnpm dev
```

Waitlist submissions only work on a deployed Netlify site; view them in the Netlify UI under **Forms → waitlist**.

## Next ideas

- Swap redacted copy for the real story on reveal day
- Add a launch date / countdown once one is set
- Social links and a press kit
