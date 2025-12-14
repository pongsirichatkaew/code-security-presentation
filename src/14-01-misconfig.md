---
transition: fade
auto-animate: true
---

# API08 — Security Misconfiguration

<div class="mt-10 flex items-center justify-center gap-6 text-lg">

  <div class="px-6 py-5 rounded-xl border border-white/20 text-center">
    <div class="font-semibold">External User</div>

  </div>

  <div class="text-3xl opacity-50">→</div>

  <div class="px-6 py-5 rounded-xl border border-yellow-400/60 text-center">
    <div class="font-semibold text-yellow-400">API / Platform</div>
    <div class="text-sm opacity-80 mt-1">
      Debug enabled<br/>
      Open endpoints
    </div>
  </div>

  <div class="text-3xl opacity-50">→</div>

  <div class="px-6 py-5 rounded-xl border border-red-400/60 text-center">
    <div class="font-semibold text-red-400">Exposed Internals</div>
    <div class="text-sm opacity-80 mt-1">
      Env config<br/>
      API structure<br/>
      Secrets
    </div>
  </div>

</div>

Examples
<ul class=" space-y-4 text-lg">
  <li><code>/swagger-ui</code> exposed publicly</li>
  <li><code>/actuator/info</code> reveals system details</li>
  <li>Secrets accidentally deployed via config</li>
</ul>

<p class="mt- opacity-80">
It <span v-mark.orange="1">reveals too much</span>, but Security here is not a code fix It’s a <span v-mark.orange="1">deployment & ownership decision</span>
</p>
