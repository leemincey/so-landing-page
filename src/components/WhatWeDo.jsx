import styles from './WhatWeDo.module.css'

const cards = [
  {
    title: 'Building',
    body: `S+O Entertainment & Experiences, co-founded with my partner Sonali. We design, build,
and operate pop-up experiences and theatrical productions, and we're currently developing a
boutique resort concept. This is the operator's seat — the same seat I sat in at Disneyland,
Universal Studios Hollywood, and Six Flags Discovery Kingdom, now applied to ventures we own.`,
  },
  {
    title: 'Advising',
    body: `Operations & people consulting for hospitality, entertainment, and attractions. I work
with owners and GMs who are scaling multi-site or high-volume guest experiences and need the
operational and workforce infrastructure to support it — the same discipline that took Six Flags
Discovery Kingdom's turnover from 125% to under 30% while guest satisfaction climbed above 90%,
and that rebuilt the people function behind Belcampo's growth from 375 to 500+ employees across
farm, retail, and restaurant formats.`,
  },
]

export default function WhatWeDo() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>What We Do</h2>
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
