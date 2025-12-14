---
layoutClass: gap-24
transition: slide-up
auto-animate: true
---

# Unrestricted Resource Consumption — What actually will happen#1

<div class="mt-12 grid grid-cols-2 gap-10">

  <!-- Case 1: Database -->
  <div class="p-6 rounded-lg border border-red-400/60">
    <div class="flex items-center gap-3 mb-4">
      <carbon:data-base class="text-red-400 text-3xl" />
      <div class="text-xl font-semibold text-red-400">
        Database overload
      </div>
    </div>
    <ul class="space-y-3 text-lg">
      <li v-click>
        API allows <span v-mark.orange="1">unlimited queries</span>
      </li>
      <li v-click>
        One request query for a huge data
      </li>
      <li v-click>
        Database <span v-mark.red="3">CPU spikes and locks</span> 
      </li>
      <li v-click>
        Other services sharing the DB are affected
      </li>
    </ul>
  </div>

  <!-- Case 2: File Upload -->
  <div class="p-6 rounded-lg border border-red-400/60">
    <div class="flex items-center gap-3 mb-4">
      <carbon:cloud-upload class="text-red-400 text-3xl" />
      <div class="text-xl font-semibold text-red-400">
        Unbounded file upload
      </div>
    </div>
    <ul class="space-y-3 text-lg">
      <li v-click>
        API accepts files with <span v-mark.orange="5">no size limit</span>
      </li>
      <li v-click>
        Large uploads consume memory and disk
      </li>
      <li v-click>
        API becomes <span v-mark.red="7">unavailable to other</span>  users
      </li>
    </ul>
  </div>

</div>

<style>
.slidev-layout ul li::marker {
  color: #ea2845;
  font-weight: bold;
}
</style>