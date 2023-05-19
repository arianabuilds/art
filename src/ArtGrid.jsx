export function ArtGrid({ images }) {
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
          />
        ))}
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-90 ">
        <img className="w-2/3" src={images[0]} />
      </div>
    </div>
  )
}
