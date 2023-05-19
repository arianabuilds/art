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
    </div>
  )
}
