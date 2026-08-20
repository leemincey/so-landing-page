import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.headline}>Two weirdos, one wild vision.</h1>
        <div className={styles.body}>
          <p>
            S+O Entertainment &amp; Experiences started the way most good ideas do — with two people
            who couldn't stop talking about <em>what if</em>. What if a pop-up could feel like
            stepping into someone's imagination? What if a resort felt less like a hotel and more
            like a story you got to live in for a few days?
          </p>
          <p>
            We're Sonali and Lee. One of us dreams it up, one of us makes sure it actually opens on
            time — and honestly, that changes depending on the day. Between us we've got decades of
            building and running the kind of experiences people remember: theme parks, live
            entertainment, hospitality, pop-ups, theatrical productions. We know how to make
            something feel like magic and still hit budget.
          </p>
          <p>
            We don't do buttoned-up. We do bold, a little weird, and built to work. If it makes
            people feel something — and makes them want to come back — we're already halfway there.
          </p>
          <p>
            <strong>More on the way. Stay weird with us.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
