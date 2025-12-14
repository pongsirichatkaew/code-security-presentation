---
transition: fade
auto-animate: true
---

# API09 — Improper Inventory Management

<p class="mt-4 text-lg opacity-80">
APIs still exist and work — but no one remembers them.
</p>

<div class="mt-10 flex items-center justify-center gap-6 text-lg">

  <div class="px-6 py-5 rounded-xl border border-white/20 text-center">
    <div class="font-semibold">External User</div>
    <div class="text-sm opacity-70 mt-1">
      Scanning URLs
    </div>
  </div>

  <div class="text-3xl opacity-50">→</div>

  <div class="px-6 py-5 rounded-xl border border-yellow-400/60 text-center">
    <div class="font-semibold text-yellow-400">Forgotten API</div>
    <div class="text-sm opacity-80 mt-1">
      Old version<br/>
      Internal endpoint
    </div>
  </div>

  <div class="text-3xl opacity-50">→</div>

  <div class="px-6 py-5 rounded-xl border border-red-400/60 text-center">
    <div class="font-semibold text-red-400">Unexpected Access</div>
    <div class="text-sm opacity-80 mt-1">
      No auth<br/>
      No monitoring
    </div>
  </div>

</div>

<div class="mt-10">
<strong class="text-xl">Examples</strong>

<ul class="mt-3 space-y-4 text-lg">
  <li><code>/api/v1/*</code> still accessible after v2 release</li>
  <li><code>/internal/admin</code> exposed externally</li>
  <li><code>/beta/report/export</code> never removed</li>
  <li>APIs without auth, rate limit, or logging</li>
</ul>
</div>

