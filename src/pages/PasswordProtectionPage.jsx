export default function PasswordProtectionPage() {
  return (
    <div style={{ padding: 16, border: "1px solid #cfd6e4", borderRadius: 12 }}>
      <h2>Five Stages of Password Protection (Overview)</h2>

      <ol>
        <li>
          <strong>Policy:</strong> Define password length/complexity standards, MFA requirements,
          lockout thresholds, and user training expectations.
        </li>
        <li>
          <strong>Creation:</strong> Encourage strong, unique passphrases; avoid reuse and predictable
          patterns; consider password managers.
        </li>
        <li>
          <strong>Storage:</strong> Store passwords using salted hashing (never plaintext) and protect
          credential stores with least privilege and access controls.
        </li>
        <li>
          <strong>Transmission:</strong> Protect credentials in transit using TLS/HTTPS; avoid sending
          passwords through insecure channels.
        </li>
        <li>
          <strong>Monitoring &amp; Recovery:</strong> Audit authentication events, detect abnormal
          logins, and provide secure reset and recovery processes.
        </li>
      </ol>

      <p style={{ marginTop: 12 }}>
        Ethical password practices reduce the risk of account compromise and help protect user
        privacy and organizational trust.
      </p>
    </div>
  );
}
