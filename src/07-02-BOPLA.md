---
layoutClass: gap-24
transition: fade
auto-animate: true
---

# BOPLA — what actually can go wrong

<div class="mt-12 flex items-center justify-center gap-10">

  <div class="px-6 py-4 rounded-lg border border-red-400/60 text-center">
    <carbon:user-role class="text-red-400 text-3xl mx-auto" />
    <div class="font-semibold text-red-400 mt-2">
      Abusing User
    </div>
    <div class="text-sm opacity-80 mt-1">
      Has a valid token
    </div>
  </div>

  <div class="text-3xl opacity-60">→</div>

  <div class="px-8 py-6 rounded-lg border border-white/20 text-center">
    <div class="font-semibold">API</div>
    <div class="text-sm opacity-70 mt-2">
      PATCH /users/me
    </div>
  </div>

</div>

<ul class="mt-10 space-y-4 text-lg">
  <li v-click>
    User updates their profile normally
  </li>
  <li v-click>
    Adds an extra field: <span v-mark.orange="2">role: "ADMIN"</span>
  </li>
  <li v-click>
    API applies the change without validation
  </li>
</ul>
