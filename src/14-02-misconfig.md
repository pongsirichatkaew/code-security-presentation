---
transition: fade
auto-animate: true
---

# API08:2023 — Security Misconfiguration Prevention

<div class="mb-6 text-lg">
<strong>Rule:</strong> Secure defaults must be intentional, not accidental.
</div>

<div class="flex items-center justify-center gap-6 mt-10">
  <div class="px-6 py-5 rounded-lg border border-white/20 text-center">
    Attacker
    <div class="text-sm opacity-70 mt-1">Scans exposed configs</div>
  </div>

  <div class="text-3xl opacity-60">→</div>

  <div class="px-6 py-5 rounded-lg border border-red-400/60 text-center">
    API
    <div class="text-sm opacity-80 mt-1">
      Debug & secrets exposed
    </div>
  </div>
</div>

<ul class="mt-10 space-y-4 text-lg">
  <li>Store secrets in vaults</li>
  <li>Don't expose debug URL</li>
  <li>Review configs per environment</li>
</ul>
