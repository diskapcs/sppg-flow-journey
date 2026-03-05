import mbgImage from '../assets/mbg-flow2.png'
import Hotspot from './Hotspot'
import { flows } from '../data/flows2'
import styles from './ImageMap2.module.css'

/**
 * ImageMap2
 * Renders the vertical MBG flow infographic with hotspot overlays.
 * Designed for portrait-oriented infographic with 6 vertical flow stages.
 *
 * Props:
 *  onHotspotClick {function} – called with the selected flow object
 */
export default function ImageMap2({ onHotspotClick }) {
  return (
    <main className={styles.outer}>
      <div className={styles.wrapper}>
        <img
          src={mbgImage}
          alt="End to End MBG Flow Journey"
          className={styles.image}
          draggable={false}
        />

        {flows.map((flow) => (
          <Hotspot
            key={flow.id}
            flow={flow}
            onClick={onHotspotClick}
          />
        ))}
      </div>
    </main>
  )
}
