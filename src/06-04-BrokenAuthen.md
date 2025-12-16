---
transition: fade
auto-animate: true
---

# API02:2023 — Broken Authentication Prevention

<div class="mb-6 text-lg text-white/80">
<strong>Rule:</strong> Authentication must be <span v-mark.orange="1">strong, short-lived, and verifiable</span>.
</div>

<div class="flex items-center justify-center gap-6 mt-10">

  <div class="px-6 py-5 rounded-lg border border-white/20 text-center">
    <div class="font-semibold">User</div>
    <div class="text-sm opacity-70 mt-1">
      Login request
    </div>
  </div>

  <div class="text-3xl opacity-60">→</div>

  <div class="px-6 py-5 rounded-lg border border-yellow-400/60 text-center">
    <div class="font-semibold text-yellow-400">Auth Service</div>
    <div class="text-sm opacity-80 mt-1">
      <span v-mark.yellow="1">Strong verification</span><br/>
      password + token rules
    </div>
  </div>

  <div class="text-3xl opacity-60">→</div>

  <div class="px-6 py-5 rounded-lg border border-green-400/60 text-center">
    <div class="font-semibold text-green-400">Access Token</div>
    <div class="text-sm opacity-80 mt-1">
      Short-lived<br/>
      scoped & signed
    </div>
  </div>

</div>

<ul class="mt-10 space-y-4 text-lg">
  <li>Use <strong>short-lived access tokens</strong> with rotating refresh tokens</li>
  <li>Enforce <strong>strong password policy</strong> (length, complexity, reuse)</li>
  <li>Protect JWT with <span v-mark.orange="1">strong secret / key rotation</span></li>
</ul>

