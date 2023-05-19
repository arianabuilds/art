import { useEffect, useState } from 'react'
import { ArtGrid } from '../src/ArtGrid'

export function ArtLoader() {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://arianaivan.github.io/art-images/all-images.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setImages(
          data
            .map(
              (item) => 'https://arianaivan.github.io/art-images' + item.file
            )
            .reverse()
        )
      })
      .catch((error) => {
        console.error('Error fetching image data:', error)
      })
  }, [])

  return <ArtGrid images={images} />
}
