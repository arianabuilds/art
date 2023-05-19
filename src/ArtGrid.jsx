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
          className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-90"
          onClick={hideModal}
        >
          <img className="w-2/3" src={currentImage} />
        </div>
      )}
    </div>
  )
}
