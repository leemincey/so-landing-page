import styles from './ComingSoon.module.css'

export default function ComingSoon() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.tagline}>Something Wickedly Fun This Way Comes…</p>

        {/* ── Banner image placeholder ──────────────────────────────────────────
            PLACEHOLDER: Replace this <div> with an <img> once Lee supplies
            the Dracula's Monster Ball key art.
            Suggested:
              <img
                src="/assets/draculas-monster-ball-banner.jpg"
                alt="Dracula's Monster Ball key art"
                className={styles.bannerImage}
              />
            The placeholder preserves a 16:9 aspect ratio at full width.
        ─────────────────────────────────────────────────────────────────────── */}
        <div className={styles.bannerPlaceholder} role="img" aria-label="Dracula's Monster Ball banner image placeholder">
          <span className={styles.placeholderLabel}>
            🖼 Dracula's Monster Ball — Key Art Goes Here (16:9)
          </span>
        </div>

        <p className={styles.caption}>🎭 Coming to Culver City in October 2026</p>

        {/* TODO: Replace '#' with the real Dracula's Monster Ball page URL once
            it exists — either an external URL or an internal route like '/dracula'. */}
        <a href="#" className={styles.learnMore}>
          Learn more
        </a>
      </div>
    </section>
  )
}
