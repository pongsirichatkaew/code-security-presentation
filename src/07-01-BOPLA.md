---
layoutClass: gap-24
transition: fade
auto-animate: true
level: 2
---

# API03:2023 — Broken Object Property Level Authorization

This update endpoint looks convenient, but it doesn’t control access at the field level.

```ts
app.patch('/users/me', async (req, res) => {
  const userId = req.user.id;
  return userRepo.update(userId, req.body);
});
```
<ul class="mt-8 space-y-3 text-lg">
    <li> User is correctly authenticated </li>
    <li> Update is limited to <strong>their own account</strong> </li>
    <li> No control over <span v-mark.orange="1">which properties</span> can be changed </li>
</ul>