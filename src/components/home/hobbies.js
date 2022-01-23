import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGamepad, faKeyboard, faCode } from "@fortawesome/free-solid-svg-icons"
import * as styles from "../../styles/home/hobbies.module.scss"

const HobbiesHome = () => (
  <section>
    <h1 className="code">03. Hobbies and Interests</h1>
    
    <div className={styles.main}>
      {/* eSport Cards */}
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.cardFront}>
            <h1>eSports</h1>
            <br></br>
            <FontAwesomeIcon icon={faGamepad} />
          </div>

          <div className={styles.cardBack}>
            <p>Since League of Legends' world champions back in 2012, I've loved watching organized competition at the highest level. I watch LoL, Valorant and various FGC games.</p>
          </div>
        </div>
      </div>

      {/* Custom Keyboards Card */}
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.cardFront}>
            <h1>Custom Keyboards</h1>
            <FontAwesomeIcon icon={faKeyboard} />
          </div>

          <div className={styles.cardBack}>
            <p>While working from home, I started craving a better typing experience. I knew custom keyboards popular, but I didn't realize the online community around it was huge. I've already built my own, but I still want more!</p>
          </div>
        </div>
      </div>

      {/* Coding Projects Card */}
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.cardFront}>
            <h1>Coding Projects</h1>
            <FontAwesomeIcon icon={faCode} />
          </div>

          <div className={styles.cardBack}>
            <p>By doing something is the only way I'll learn. I made this website to have my own place on the internet, but also learn React and expand my front end skills.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HobbiesHome
