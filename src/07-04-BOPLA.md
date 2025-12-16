---
transition: fade
auto-animate: true
---

# API03:2023 — Object Property Authorization Prevention

<div class="mb-6 text-lg">
<strong>Rule:</strong> Never trust clients to choose <span v-mark.orange="1">which fields</span> they can change.
</div>

<div class="flex items-center justify-center gap-6 mt-10">
  <div class="px-6 py-5 rounded-lg border border-white/20 text-center">
    User
    <div class="text-sm opacity-70 mt-1">Updates profile</div>
  </div>

  <div class="text-3xl opacity-60">→</div>

  <div class="px-6 py-5 rounded-lg border border-yellow-400/60 text-center">
    API
    <div class="text-sm opacity-80 mt-1">
      Controls allowed fields
    </div>
  </div>

  <div class="text-3xl opacity-60">→</div>

  <div class="px-6 py-5 rounded-lg border border-green-400/60 text-center">
    Database
    <div class="text-sm opacity-80 mt-1">
      Only safe fields updated
    </div>
  </div>
</div>

<ul class="mt-10 space-y-4 text-lg">
  <li>Never return raw database objects (use DTO response instead)</li>
  <li>Allow updates only on permitted fields</li>
  <li>Apply rules based on role, not request body</li>
</ul>
