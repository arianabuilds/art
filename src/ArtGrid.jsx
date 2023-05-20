import { useState } from 'react'
import useArrowKeys from './useArrowKeys'

export function ArtGrid({ images }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const showModal = (index) => {
    setCurrentIndex(index)
    setIsModalVisible(true)
  }

  const hideModal = () => {
    setIsModalVisible(false)
  }

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
  }

  const showPreviousImage = () => {
    const previousIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(previousIndex)
  }

  useArrowKeys(isModalVisible, showNextImage, showPreviousImage)

  return (
    <div className="relative">
      {images?.slice().map((image, index) => (
        <img
          className="inline object-cover !my-0 aspect-square hover:scale-110 transition cursor-pointer"
          key={index}
          src={image}
          width={70}
          onClick={() => showModal(index)}
        />
      ))}

      {isModalVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={hideModal}
        >
          <button
            className="absolute text-3xl text-white transform -translate-y-1/2 left-4 top-1/2"
            onClick={(e) => {
              e.stopPropagation()
              showPreviousImage()
            }}
          >
            &lt;
          </button>
          <div className="flex items-center justify-center w-4/5 h-4/5">
            <img
              className="object-contain max-w-full max-h-full"
              src={images[currentIndex]}
            />
          </div>
          <button
            className="absolute text-3xl text-white transform -translate-y-1/2 right-4 top-1/2"
            onClick={(e) => {
              e.stopPropagation()
              showNextImage()
            }}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  )
}
