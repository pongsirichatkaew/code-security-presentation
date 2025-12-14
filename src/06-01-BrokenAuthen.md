---
layoutClass: gap-24
transition: fade
auto-animate: true
level: 2
---

# API02:2023 — Broken Authentication

This login flow looks fine, but isn’t

```ts{*|3-5|8|*}
app.post('/login', async (req, res) => {
  const user = await userRepo.findByEmail(req.body.email);

  if (!user || user.password !== req.body.password) {
    throw new UnauthorizedError();
  }

  return { token: signJwt({ userId: user.id }, 'WEAK-PASSWORD') };
});
```

<ul class="mt-8 space-y-3 text-lg">
   <li v-click="1"> Password comparison is done <span v-mark.orange="[1,2]">directly</span></li>
   <li v-click="2"> Token is issued <span v-mark.red="2">without additional checks</span>
   </li>
   <li v-click="3"> No protection against brute-force attempts</li>
</ul>