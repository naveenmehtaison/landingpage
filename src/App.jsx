import { useEffect, useRef } from 'react'
import './App.css'

const TELEGRAM_CHANNEL_URL = 'https://t.me/lowrisktraders'
const REDIRECT_DELAY_MS = 4000

const featureList = [
  'Trade With Logics, Not Emotion',
  '100% Free Education - No Tips',
  "We don't sell dreams, We Teach Process",
  'From Blind Trading To Confident Trading',
]

function App() {
  const redirectTriggeredRef = useRef(false)

  const redirectToTelegram = () => {
    if (redirectTriggeredRef.current) {
      return
    }

    redirectTriggeredRef.current = true
    window.location.href = TELEGRAM_CHANNEL_URL
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      redirectToTelegram()
    }, REDIRECT_DELAY_MS)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <main className="landing-page">
      <div className="page-bg" aria-hidden="true" />

      <section className="hero-shell">
        <div className="hero-copy">
          <h1>NEVER STOP LEARNING</h1>

          <button
            type="button"
            className="join-btn"
            onClick={redirectToTelegram}
            aria-label="Join Telegram channel"
          >
            JOIN TELEGRAM
          </button>
        </div>

        <ul className="feature-list" aria-label="Value propositions">
          {featureList.map((item) => (
            <li key={item} className="feature-item">
              <span className="check-mark" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
