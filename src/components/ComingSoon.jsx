import { useInView } from '../hooks/useInView'
import styles from './ComingSoon.module.css'

export default function ComingSoon() {
  const [ref, visible] = useInView()
  return (
    <section ref={ref} className={`${styles.section} reveal${visible ? ' visible' : ''}`}>
      <div className={styles.inner}>
        <p className={styles.tagline}>Something Wickedly Fun This Way Comes…</p>

        <img
          src="/assets/draculas-monster-ball-banner.png"
          alt="Dracula's Monster Ball — Coming to Culver City October 2026"
          className={styles.bannerImage}
        />

        <p className={styles.caption}>🧛🏽‍♂️ Coming to Culver City in October 2026</p>

        {/* TODO: Replace '#' with the real Dracula's Monster Ball page URL once
            it exists — either an external URL or an internal route like '/dracula'. */}
        <a href="#" className={styles.learnMore}>
          Learn more
        </a>
      </div>
    </section>
  )
}
