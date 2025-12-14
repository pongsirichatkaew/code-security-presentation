---
transition: fade
auto-animate: true
---

# API05 vs API06 — what’s the difference?

<div class="mt-10">

<Table class="compare-table">
  <tr>
    <th></th>
    <th class="col-05">API05 — BFLA</th>
    <th class="col-06">API06 — Business Flow</th>
  </tr>

  <tr>
    <td class="row-label">Main question</td>
    <td>Who can do this?</td>
    <td>When should this happen?</td>
  </tr>

  <tr>
    <td class="row-label">What goes wrong</td>
    <td>
      Wrong user can call the function
    </td>
    <td>
      Right user can trigger it too freely 💸
    </td>
  </tr>

  <tr>
    <td class="row-label">Impact</td>
    <td class="muted">Business</td>
    <td class="muted">Business</td>
  </tr>
</Table>

</div>

<style>
.compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.1rem;
}

.compare-table th {
  padding: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.25);
  font-weight: 600;
}

.compare-table td {
  padding: 14px 12px;
  border-bottom: 1px solid rgba(255,255,255,0.12);
}

.compare-table .row-label {
  font-weight: 600;
  opacity: 0.85;
  white-space: nowrap;
}

.compare-table .col-05 {
  color: #fb923c; /* orange */
}

.compare-table .col-06 {
  color: #facc15; /* yellow */
}

.compare-table .muted {
  opacity: 0.6;
}
</style>
