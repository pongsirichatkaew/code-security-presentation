---
transition: fade
auto-animate: true
---

# API06:2023 — Unrestricted Access to Sensitive Business Flows
When and under what conditions should this flow run?

<div class="mt-10 space-y-6 text-lg">

<p>
Some API flows are <strong>technically valid</strong>,  
but <span v-mark.orange="1">business-sensitive</span>.
</p>

<ul class="list-disc ml-6 space-y-3 opacity-90">
  <li>Approve / reject actions</li>
  <li>Refunds, payouts, or cancellations</li>
</ul>

<p class="mt-6">
Nothing breaks.  
The system just <strong>allows too much</strong> 
</p>

</div>

<div class="absolute bottom-6 right-8 text-sm opacity-50">
OWASP API Security — Unrestricted Business Flows
</div>
