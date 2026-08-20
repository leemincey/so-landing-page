import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="/assets/so-logo.png"
        alt="S+O Entertainment & Experiences logo"
        className={styles.logoBadge}
      />

      <div className={styles.wordmark}>
        <span className={styles.wordmarkMain}>S + O</span>
        <span className={styles.wordmarkSub}>ENTERTAINMENT &amp; EXPERIENCES</span>
      </div>
    </header>
  )
}
