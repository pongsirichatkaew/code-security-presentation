---
transition: fade
auto-animate: true
---

# API06:2023 — Business Flow Control Prevention

<div class="mb-6 text-lg">
<strong>Rule:</strong> Business flows need <span v-mark.orange="1">constraints</span>, not just endpoints.
</div>

<div class="flex items-center justify-center gap-6 mt-10">
  <div class="px-6 py-5 rounded-lg border border-white/20 text-center">
    User
    <div class="text-sm opacity-70 mt-1">Triggers refund repeatedly</div>
  </div>

  <div class="text-3xl opacity-60">→</div>

  <div class="px-6 py-5 rounded-lg border border-yellow-400/60 text-center">
    API
    <div class="text-sm opacity-80 mt-1">
      No business limit
    </div>
  </div>
</div>

<ul class="mt-10 space-y-4 text-lg">
  <li>Enforce business rules (e.g. refund once)</li>
  <li>Validate state transitions</li>
  <li>Design flows, not just endpoints</li>
</ul>
