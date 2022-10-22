import image1 from '../images/testing1.jpeg'
import image2 from '../images/testing2.jpeg'
import image3 from '../images/testing3.jpeg'
import image4 from '../images/testing4.jpeg'
import Image from 'next/image'

export function ArtGrid() {
  return (
    <div>
      <h2>ArtGrid Component</h2>
      <Image src={image1} alt="testing" />
      <Image src={image2} alt="testing" />
      <Image src={image3} alt="testing" />
      <Image src={image4} alt="testing" />
    </div>

    // - [ ] Load a list of images

    // - [ ] All images will be a small square
    // - [ ] Display the images in a grid
    // - [ ] Order the grid from:
    //   top left: newest
    //   bottom right: oldest
  )
}
