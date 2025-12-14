---
layoutClass: gap-24
transition: slide-up
auto-animate: true
---

# Unrestricted Resource Consumption — What actually will happen#2

<div class="mt-3 grid grid-row-2 gap-12">

  <div>
    <div class="mb-4 text-xl font-semibold">
      #1 Get all transactions <span v-mark.orange="1">without Limiting</span> 
    </div>
    <div v-click class="flex items-center justify-center gap-4 text-lg">
      <div class="px-5 py-4 rounded-lg border border-white/20 text-center">
        <div class="font-semibold">Attacker</div>
        <div class="text-sm opacity-70 mt-1">
          Large / repeated queries
        </div>
      </div>
      <div class="text-3xl opacity-60">→</div>
      <div class="px-5 py-4 rounded-lg border border-yellow-400/60 text-center">
        <div class="font-semibold text-yellow-400">API</div>
        <div class="text-sm opacity-80 mt-1">
          <span v-mark.yellow="1"> CPU spike</span> <br/>
          Worker threads blocked
        </div>
      </div>
      <div class="text-3xl opacity-60">→</div>
      <div class="px-5 py-4 rounded-lg border border-red-400/60 text-center">
        <div class="font-semibold text-red-400">Database</div>
        <div class="text-sm opacity-80 mt-1">
          Other services <br> <span v-mark.red="1"> sharing the DB are affected </span>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="mb-4 text-xl font-semibold">
      #2 Upload files <span v-mark.orange="2">with Unrestricted file upload</span>   
    </div>
    <div v-click class="flex items-center justify-center gap-4 text-lg">
      <div class="px-5 py-4 rounded-lg border border-white/20 text-center">
        <div class="font-semibold">Attacker</div>
        <div class="text-sm opacity-70 mt-1">
          Huge file upload
        </div>
      </div>
      <div class="text-3xl opacity-60">→</div>
      <div class="px-5 py-4 rounded-lg border border-yellow-400/60 text-center">
        <div class="font-semibold text-yellow-400">API</div>
        <div class="text-sm opacity-80 mt-1">
          Memory spike
        </div>
      </div>
      <div class="text-3xl opacity-60">→</div>
      <div class="px-5 py-4 rounded-lg border border-red-400/60 text-center">
        <div class="font-semibold text-red-400">System</div>
        <div class="text-sm opacity-80 mt-1">
          Disk usage spikes<br/>
          <span v-mark.red="2">I/O becomes a bottleneck</span>
        </div>
      </div>
    </div>
  </div>

</div>
