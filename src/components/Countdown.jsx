import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'

// Fixed launch timestamp in Pacific Time (PDT = UTC-7 in August 2026).
// Using an explicit offset so the countdown is correct regardless of
// the visitor's local timezone.
const LAUNCH_DATE = new Date('2026-08-25T09:00:00-07:00')

function getTimeLeft() {
  const now = new Date()
  const diff = LAUNCH_DATE - now

  if (diff <= 0) return null

  const totalSeconds = Math.floor(diff / 1000)
  const days    = Math.floor(totalSeconds / 86400)
  const hours   = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Full site launching soon</h2>

        {timeLeft === null ? (
          <p className={styles.liveMessage}>🎉 We're live! Welcome to S+O.</p>
        ) : (
          <div className={styles.clock}>
            <div className={styles.unit}>
              <span className={styles.digits}>{timeLeft.days}</span>
              <span className={styles.label}>Days</span>
            </div>
            <span className={styles.colon}>:</span>
            <div className={styles.unit}>
              <span className={styles.digits}>{pad(timeLeft.hours)}</span>
              <span className={styles.label}>Hours</span>
            </div>
            <span className={styles.colon}>:</span>
            <div className={styles.unit}>
              <span className={styles.digits}>{pad(timeLeft.minutes)}</span>
              <span className={styles.label}>Minutes</span>
            </div>
            <span className={styles.colon}>:</span>
            <div className={styles.unit}>
              <span className={styles.digits}>{pad(timeLeft.seconds)}</span>
              <span className={styles.label}>Seconds</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
