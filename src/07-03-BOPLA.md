---
layoutClass: gap-24
transition: fade
auto-animate: true
level: 2
---

# BOPLA — enforcing property-level authorization

<div class="mb-6 text-lg">
Same endpoint.  
Stronger <span v-mark.orange="1">property-level rule</span>.
</div>

````md magic-move {lines: true}
```ts {*}
app.patch('/users/me', async (req, res) => {
  const userId = req.user.id;
  return userRepo.update(userId, req.body);
});
```

```ts {*}
app.patch('/users/me', async (req, res) => {
    const allowedFields = ['name', 'phone', 'address'];
    const payload = pick(req.body, allowedFields);
    userRepo.update(userId, payload);
});
```
````

<div v-click="1" class="mt-6">
Role and privilege-related fields are never  
modifiable through this endpoint.
</div>

<div class="absolute bottom-6 left-8 text-sm opacity-50">
OWASP API Security Top 10 (2023) — Broken Object Property Level Authorization
</div>