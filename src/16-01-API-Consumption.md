---
transition: fade
auto-animate: true
---

# API10 — Unsafe Consumption of APIs

<p class="mt-4 text-lg opacity-80">
Your API might be secure,  
but <span v-mark.orange="1">the APIs you depend on</span> might not be.
</p>

<div class="mt-10 flex items-center justify-center gap-6 text-lg">

  <div class="px-6 py-5 rounded-xl border border-white/20 text-center">
    <div class="font-semibold">Our API</div>
    <div class="text-sm opacity-70 mt-1">
      Trusted logic
    </div>
  </div>

  <div class="text-3xl opacity-50">→</div>

  <div class="px-6 py-5 rounded-xl border border-yellow-400/60 text-center">
    <div class="font-semibold text-yellow-400">3rd-party API</div>
    <div class="text-sm opacity-80 mt-1">
      External service<br/>
      Untrusted response
    </div>
  </div>

  <div class="text-3xl opacity-50">→</div>

  <div class="px-6 py-5 rounded-xl border border-red-400/60 text-center">
    <div class="font-semibold text-red-400">Impact</div>
    <div class="text-sm opacity-80 mt-1">
      Data corruption<br/>
      Logic abuse<br/>
      Cascading failure
    </div>
  </div>

</div>

<div class="mt-10">
<strong class="text-xl">Examples</strong>

<ul class="mt-6 space-y-4 text-lg">
  <li>Trusting external price or amount without validation</li>
  <li>Assuming partner API always returns expected schema</li>
</ul>
</div>

<p class="mt-10 text-lg">
Nothing breaks locally.  
The risk comes from <span v-mark.orange="1">trusting data you don’t control</span>.
</p>
