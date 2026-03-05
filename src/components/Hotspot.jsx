import styles from './Hotspot.module.css'

/**
 * Hotspot
 * A transparent, clickable overlay positioned absolutely over a region
 * of the background image. Shows a label and pulse animation on hover.
 *
 * Props:
 *  flow     {object}   – single flow entry from flows data
 *  onClick  {function} – callback when user clicks this hotspot
 */
export default function Hotspot({ flow, onClick }) {
  const { hotspot, step, title, color } = flow

  return (
    <div
      className={styles.hotspot}
      style={{
        left: hotspot.left,
        top: hotspot.top,
        width: hotspot.width,
        height: hotspot.height,
        '--accent': color.accent,
      }}
      onClick={() => onClick(flow)}
      role="button"
      aria-label={`${step}: ${title}`}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(flow)}
    >
      <span className={styles.label}>
        <span className={styles.stepChip}>{step}</span>
        {title}
      </span>
      <span className={styles.pulse} />
    </div>
  )
}
