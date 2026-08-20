import { useInView } from '../hooks/useInView'
import styles from './Footer.module.css'

const links = [
  { label: 'Stay connected', href: '#' },
  { label: 'Jobs',           href: '#' },
  { label: 'About',          href: '#' },
  { label: 'Guest Relations', href: '#' },
]

// TODO: Replace '#' anchors above with real destination URLs or internal
// routes once those pages exist.

export default function Footer() {
  const [ref, visible] = useInView()
  return (
    <footer ref={ref} className={`${styles.footer} reveal${visible ? ' visible' : ''}`}>
      <nav className={styles.nav} aria-label="Footer navigation">
        {links.map((link, i) => (
          <a key={i} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
