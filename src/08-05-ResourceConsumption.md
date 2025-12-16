---
transition: fade
auto-animate: true
---

# API04:2023 — Resource Consumption Prevention

<div class="mb-6 text-lg">
    <strong>Rule:</strong> Every request must have <span v-mark.orange="1">limits</span>.
</div>

<div class="flex items-center justify-center gap-6 mt-10">

  <div class="px-6 py-5 rounded-lg border border-white/20 text-center">
    Client
    <div class="text-sm opacity-70 mt-1">
      Large or repeated requests
    </div>
  </div>

  <div class="text-3xl opacity-60">→</div>

  <div class="px-6 py-5 rounded-lg border border-yellow-400/60 text-center">
    API
    <div class="text-sm opacity-80 mt-1">
      Rate limit, Pagination <br> Payload validation
    </div>
  </div>

  <div class="text-3xl opacity-60">→</div>

  <div class="px-6 py-5 rounded-lg border border-green-400/60 text-center">
    Database/Resource
    <div class="text-sm opacity-80 mt-1">
      Stable workload<br/>
    </div>
  </div>

</div>

<ul class="mt-10 space-y-4 text-lg">
    <li>Rate limit per user / token / IP</li>
    <li>Use pagination for large datasets</li>
    <li>Validate maximum payload e.g. 50 MB</li>
    <li>Apply request timeout or circuit breaker e.g. 30 seconds</li>
</ul>