import Image from 'next/image'

export function ArtGrid({ images }) {
  return (
    <div>
      <h2>ArtGrid Component</h2>
      {images?.map((image, index) => (
        <Image key={index} src={image} alt="testing" />
      ))}
    </div>

    // - [ ] Load a list of images
    // - [ ] All images will be a small square
    // - [ ] Display the images in a grid
    // - [ ] Order the grid from:
    //         top left: newest
    //         bottom right: oldest
  )
}
