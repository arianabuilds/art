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

          // Convert the first three hyphenated sections to a date
          const date = new Date(dateString.split('-').slice(0, 3).join('-'))

          return {
            ...item,
            date,
            imageUrl: 'https://arianaivan.github.io/art-images' + item.file,
            thumbnailUrl:
              'https://arianaivan.github.io/art-images/thumbnails' + item.file // assumes thumbnails are stored in a 'thumbnails' directory
          }
        })

        // Sort the processed data by date, then by file name (which includes the index for multiple files per day)
        processedData.sort(
          (b, a) => a.date - b.date || a.file.localeCompare(b.file)
        )

        // Set the sorted image URLs
        setImages(processedData)
      })
      .catch((error) => {
        console.error('Error fetching image data:', error)
      })
  }, [])

  return <ArtGrid images={images} />
}
