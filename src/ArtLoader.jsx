import { useEffect, useState } from 'react'
import { ArtGrid } from '../src/ArtGrid'

export function ArtLoader() {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://arianaivan.github.io/art-images/all-images.json')
      .then((response) => response.json())
      .then((data) => {
        // Convert data to include date objects for sorting
        const processedData = data.map((item) => {
          // Check if the file name can be converted to a date
          const dateString = item.file.split('/').pop().split('.')[0] // Assumes date is at the end of the file name
          const date = !isNaN(Date.parse(dateString))
            ? new Date(dateString)
            : new Date(item.uploadDate)

          return {
            ...item,
            date,
            imageUrl: 'https://arianaivan.github.io/art-images' + item.file
          }
        })

        // Sort the processed data by date
        processedData.sort((b, a) => a.date - b.date)

        // Set the sorted image URLs
        setImages(processedData.map((item) => item.imageUrl))
      })
      .catch((error) => {
        console.error('Error fetching image data:', error)
      })
  }, [])

  return <ArtGrid images={images} />
}
