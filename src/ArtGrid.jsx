import { useState } from 'react'

export function ArtGrid({ images }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  const showModal = (image) => {
    setCurrentImage(image)
    setIsModalVisible(true)
  }

  const hideModal = () => {
    setIsModalVisible(false)
  }

  return (
    <div className="relative">
      <h2>ArtGrid Component</h2>
      {images
        ?.slice()
        .reverse()
        .map((image, index) => (
          <img
            className="inline object-cover !my-0 aspect-square hover:scale-110 transition"
            key={index}
            src={image}
            width={100}
            onClick={() => showModal(image)}
          />
        ))}

      {isModalVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={hideModal}
        >
          <div className="flex items-center justify-center w-4/5 h-4/5">
            <img
              className="object-contain max-w-full max-h-full"
              src={currentImage}
            />
          </div>
        </div>
      )}
    </div>
  )
}
