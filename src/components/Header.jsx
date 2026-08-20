import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      {/* ── Logo badge ─────────────────────────────────────────────────────────
          PLACEHOLDER: swap the <div> below for an <img> once Lee supplies
          the real circular logo asset.
          Suggested: <img src="/assets/so-logo-badge.png" alt="S+O logo" className={styles.logoBadge} />
      ──────────────────────────────────────────────────────────────────────── */}
      <div className={styles.logoBadge} aria-label="S+O logo placeholder">
        <span>S+</span>
      </div>

      <div className={styles.wordmark}>
        <span className={styles.wordmarkMain}>S + O</span>
        <span className={styles.wordmarkSub}>ENTERTAINMENT &amp; EXPERIENCES</span>
      </div>
    </header>
  )
}
