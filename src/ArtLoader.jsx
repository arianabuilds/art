import image1 from '../images/testing1.jpeg'
import image2 from '../images/testing2.jpeg'
import image3 from '../images/testing3.jpeg'
import image4 from '../images/testing4.jpeg'
import { ArtGrid } from '../src/ArtGrid'

const images = [image1, image2, image3, image4]

export function ArtLoader() {
  return <ArtGrid images={images} />
}
