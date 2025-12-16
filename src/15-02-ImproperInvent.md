---
transition: fade
auto-animate: true
---

# API09:2023 — API Inventory Prevention

<div class="mb-6 text-lg">
<strong>Rule:</strong> You cannot secure APIs you <span v-mark.orange="1">don’t know exist</span>.
</div>

<div class="flex items-center justify-center gap-6 mt-10">
  <div class="px-6 py-5 rounded-lg border border-white/20 text-center">
    Old API
    <div class="text-sm opacity-70 mt-1">Forgotten endpoint</div>
  </div>

  <div class="text-3xl opacity-60">→</div>

  <div class="px-6 py-5 rounded-lg border border-yellow-400/60 text-center">
    Gateway
    <div class="text-sm opacity-80 mt-1">
      Not registered
    </div>
  </div>
</div>

<ul class="mt-10 space-y-4 text-lg">
  <li>Maintain API inventory</li>
  <li>Centralize API gateway to activate only valid endpoints</li>
</ul>
