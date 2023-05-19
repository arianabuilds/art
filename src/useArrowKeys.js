import { useEffect } from 'react'

const useArrowKeys = (isModalVisible, showNextImage, showPreviousImage) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isModalVisible) {
        if (event.key === 'ArrowRight') {
          showNextImage()
        } else if (event.key === 'ArrowLeft') {
          showPreviousImage()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalVisible, showNextImage, showPreviousImage])
}

export default useArrowKeys
