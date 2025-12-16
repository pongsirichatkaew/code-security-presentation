---
transition: fade
auto-animate: true
---

# API10:2023 — Unsafe API Consumption Prevention

<div class="mb-6 text-lg">
<strong>Rule:</strong> External APIs must be treated as <span v-mark.orange="1">untrusted</span>.
</div>

<div class="flex items-center justify-center gap-6 mt-10">
  <div class="px-6 py-5 rounded-lg border border-white/20 text-center">
    External API
    <div class="text-sm opacity-70 mt-1">Unexpected response</div>
  </div>

  <div class="text-3xl opacity-60">→</div>

  <div class="px-6 py-5 rounded-lg border border-yellow-400/60 text-center">
    Our API
    <div class="text-sm opacity-80 mt-1">
      Trusts data blindly
    </div>
  </div>
</div>

<ul class="mt-10 space-y-4 text-lg">
  <li>Log and monitor all outbound calls</li>
  <li>Alert on abnormal behavior</li>
</ul>
