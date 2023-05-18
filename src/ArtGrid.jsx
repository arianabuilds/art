import Image from 'next/image'

export function ArtGrid({ images }) {
  return (
    <div>
      <h2>ArtGrid Component</h2>
      {images
        ?.slice()
        .reverse()
        .map((image, index) => (
          <img
            className="inline"
            key={index}
            src={image}
            alt="testing"
            width={100}
            height={100}
          />
        ))}
    </div>
  )
}

// - [x] Load a list of images
// - [x] All images will be a small square
// - [ ] Display the images in a grid
// - [ ] Order the grid from:
//         top left: newest
//         bottom right: oldest
