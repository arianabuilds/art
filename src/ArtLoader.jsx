import { useEffect, useState } from 'react'
import { ArtGrid } from '../src/ArtGrid'

export function ArtLoader() {
  const [images, setImages] = useState([])
  const [loadCount, setLoadCount] = useState(1) // Added this state to keep track of loading phase

  useEffect(() => {
    fetch('https://arianaivan.github.io/art-images/all-images.json')
      .then((response) => response.json())
      .then((data) => {
        const processedData = data.map((item) => {
          const dateString = item.file.split('/').pop().split('.')[0]
          const date = new Date(dateString.split('-').slice(0, 3).join('-'))

          return {
            ...item,
            date,
            imageUrl: 'https://arianaivan.github.io/art-images' + item.file
          }
        })

        processedData.sort(
          (b, a) => a.date - b.date || a.file.localeCompare(b.file)
        )

        setImages(processedData)
      })
      .catch((error) => {
        console.error('Error fetching image data:', error)
      })
  }, [])

  return (
    <ArtGrid
      images={images}
      loadCount={loadCount}
      incrementLoadCount={() => setLoadCount(loadCount + 1)}
    />
  )
}
