import { useState, useCallback } from 'react'
import TopBar from './components/TopBar'
import ImageMap2 from './components/ImageMap2'
import Modal from './components/Modal'

/**
 * App
 * Root component. Manages which flow is currently selected (modal open state)
 * and wires TopBar, ImageMap2, and Modal together.
 *
 * State:
 *  selectedFlow {object|null} – the flow the user clicked, or null if closed
 */
export default function App() {
  const [selectedFlow, setSelectedFlow] = useState(null)

  const handleHotspotClick = useCallback((flow) => {
    setSelectedFlow(flow)
  }, [])

  const handleClose = useCallback(() => {
    setSelectedFlow(null)
  }, [])

  return (
    <>
      <TopBar />
      <ImageMap2 onHotspotClick={handleHotspotClick} />
      <Modal flow={selectedFlow} onClose={handleClose} />
    </>
  )
}
