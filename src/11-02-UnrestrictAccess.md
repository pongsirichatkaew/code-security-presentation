---
transition: fade
auto-animate: true
---

# Example — Unrestricted business flow

```ts
app.post('/orders/:id/refund', async (req, res) => {
  await orderService.refund(req.params.id);
  res.sendStatus(200);
});
```

<ul class="mt-10 space-y-6 text-lg">
  <li>The API behaves correctly</li>
  <li>User can trigger refunds <span v-mark.orange="1">as many times as they want</span><span class="ml-2">💸</span></li>
</ul>