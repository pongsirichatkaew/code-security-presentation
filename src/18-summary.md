---
transition: fade
auto-animate: true
---

# Summary

<Table class="security-table mt-8">
  <tr>
    <th>Stage</th>
    <th>Focus</th>
    <th>Main risk</th>
    <th>Key controls</th>
  </tr>

  <tr>
    <td>🚪 <strong>Access</strong></td>
    <td>Network boundary</td>
    <td>DDoS, unauthorized access</td>
    <td>API Gateway, TLS, rate limit</td>
  </tr>

  <tr>
    <td>🔐 <strong>Authentication</strong></td>
    <td>Identity</td>
    <td>Credential attacks</td>
    <td>MFA, JWT configuration</td>
  </tr>

  <tr>
    <td>🧭 <strong>Authorization</strong></td>
    <td>Permissions</td>
    <td>BOLA, BFLA, BOPLA</td>
    <td>RBAC, ownership checks</td>
  </tr>

  <tr>
    <td>📥 <strong>Input</strong></td>
    <td>Data entering APIs</td>
    <td>Injection, SSRF</td>
    <td>Validation, sanitization</td>
  </tr>

  <tr>
    <td>⚙️ <strong>Processing</strong></td>
    <td>Business logic</td>
    <td>Automation abuse, DoS</td>
    <td>Transaction rules, timeouts</td>
  </tr>

  <tr>
    <td>📤 <strong>Output</strong></td>
    <td>Data leaving APIs</td>
    <td>Data leaks</td>
    <td>DTOs, masked output, safe errors</td>
  </tr>
</Table>

<style>
.security-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.95rem;
}

.security-table th {
  background: rgba(255, 255, 255, 0.08);
  text-align: left;
  padding: 14px 16px;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.security-table td {
  padding: 14px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.security-table tr {
  background: rgba(255, 255, 255, 0.03);
}

.security-table tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.05);
}

.security-table tr:hover {
  background: rgba(255, 135, 34, 0.12);
  transition: background 0.2s ease;
}
</style>
