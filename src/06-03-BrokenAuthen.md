---
layoutClass: gap-24
transition: fade
auto-animate: true
level: 2
---

# Broken Authentication — enforcing verification

<div class="mb-6 text-lg">
Same endpoint.  
Stronger <span v-mark.orange="1">authentication rule</span>.
</div>

````md magic-move {lines: true}
```ts {*}
app.post('/login', async (req, res) => {
  const user = await userRepo.findByEmail(req.body.email);
  if (!user || user.password !== req.body.password) {
    throw new UnauthorizedError();
  }
  return { token: signJwt({ userId: user.id }, 'WEAK-PASSWORD') };
});
```

```ts {*|8-10|13|*}
app.post('/login', async (req, res) => {
    const user = await userRepo.findByEmail(req.body.email);

    if (!user) {
        throw new UnauthorizedError();
    }

    if (!user || !bcrypt.compareSync(req.body.password, user.passwordHash)) {
        throw new UnauthorizedError();
    }

    return {
        token: signJwt({ userId: user.id }, process.env.JWT_SECRET),
    };
});
```
````
