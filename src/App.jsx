import { useEffect, useRef } from "react";
import "./App.css";

const TELEGRAM_CHANNEL_URL = "https://t.me/lowrisktraders";
const REDIRECT_DELAY_MS = 4000;

const featureCards = [
  {
    id: "logic",
    tone: "green",
    title: ["Trade With Logics,", "Not Emotion"],
    icon: "chart",
  },
  {
    id: "education",
    tone: "blue",
    title: ["100% Free", "Education - No Tips"],
    icon: "graduation",
  },
  {
    id: "process",
    tone: "amber",
    title: ["We don't sell dreams,", "We Teach Process"],
    icon: "lightbulb",
  },
  {
    id: "confidence",
    tone: "purple",
    title: ["From Blind Trading", "To Confident Trading"],
    icon: "target",
  },
];

function App() {
  const redirectTriggeredRef = useRef(false);

  const redirectToTelegram = () => {
    if (redirectTriggeredRef.current) {
      return;
    }

    redirectTriggeredRef.current = true;
    window.location.href = TELEGRAM_CHANNEL_URL;
  };

  // useEffect(() => {
  //   const timer = window.setTimeout(() => {
  //     redirectToTelegram()
  //   }, REDIRECT_DELAY_MS)

  //   return () => {
  //     window.clearTimeout(timer)
  //   }
  // }, [])

  const renderIcon = (iconName) => {
    const commonProps = {
      viewBox: "0 0 64 64",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
    };

    if (iconName === "chart") {
      return (
        <svg {...commonProps}>
          <rect
            x="11"
            y="30"
            width="8"
            height="17"
            rx="2"
            fill="currentColor"
            opacity="0.95"
          />
          <rect
            x="22"
            y="20"
            width="8"
            height="27"
            rx="2"
            fill="currentColor"
            opacity="0.9"
          />
          <rect
            x="33"
            y="13"
            width="8"
            height="34"
            rx="2"
            fill="currentColor"
            opacity="0.82"
          />
          <path
            d="M46 14L54 14L54 22"
            stroke="currentColor"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34 20L46 10L50 14L54 10"
            stroke="currentColor"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 50H55"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.75"
          />
        </svg>
      );
    }

    if (iconName === "graduation") {
      return (
        <svg {...commonProps}>
          <path
            d="M14 24L32 14L50 24L32 34L14 24Z"
            fill="currentColor"
            opacity="0.96"
          />
          <path
            d="M20 28V38C20 40.4 25.4 42.5 32 42.5C38.6 42.5 44 40.4 44 38V28"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50 24V35"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M50 35C50 38 41 41 32 41C23 41 14 38 14 35"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    if (iconName === "lightbulb") {
      return (
        <svg {...commonProps}>
          <path
            d="M32 12C23.2 12 16 19.2 16 28C16 34 19.1 38.8 24 41.8V46C24 48.2 25.8 50 28 50H36C38.2 50 40 48.2 40 46V41.8C44.9 38.8 48 34 48 28C48 19.2 40.8 12 32 12Z"
            fill="currentColor"
            opacity="0.96"
          />
          <path
            d="M28 46H36"
            stroke="#f5f7ff"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M25 20C27 18 29 17 32 17C35 17 38 18 40 20"
            stroke="#f5f7ff"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30 39H34"
            stroke="#f5f7ff"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    return (
      <svg {...commonProps}>
        <circle cx="32" cy="32" r="18" fill="currentColor" opacity="0.95" />
        <circle cx="32" cy="32" r="9" fill="#ffffff" opacity="0.9" />
        <path
          d="M32 20V14M32 50V44M20 32H14M50 32H44M24.5 24.5L20.8 20.8M43.2 43.2L39.5 39.5M39.5 24.5L43.2 20.8M20.8 43.2L24.5 39.5"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <main className="landing-page">
      <div className="page-bg" aria-hidden="true" />

      <section className="hero-shell">
        <div className="hero-copy">
          <h1 className="hero-title" aria-label="Never stop learning">
            <span className="hero-line hero-line--white">NEVER</span>
            <span className="hero-line hero-line--cyan">STOP</span>
            <span className="hero-line hero-line--white">LEARNING</span>
          </h1>

          <button
            type="button"
            className="join-btn"
            onClick={redirectToTelegram}
            aria-label="Join Telegram channel"
          >
            <span className="join-icon" aria-hidden="true">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 32.4L50 16L42.5 49.8L31.7 38.3L25 49.1L21.1 35.4L12 32.4Z"
                  fill="currentColor"
                  opacity="0.95"
                />
                <path
                  d="M21.1 35.4L31.7 38.3L50 16L21.1 35.4Z"
                  fill="currentColor"
                  opacity="0.8"
                />
              </svg>
            </span>
            <span className="join-text">JOIN TELEGRAM</span>
            <span className="join-arrow" aria-hidden="true">
              ›
            </span>
          </button>
        </div>

        <div className="feature-grid" aria-label="Value propositions">
          {featureCards.map(({ id, tone, title, icon }) => (
            <article key={id} className={`feature-card feature-card--${tone}`}>
              <h2 className="feature-title">
                {title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
