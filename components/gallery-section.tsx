const galleryImages = [
  "/modern-kitchen-windowsill-with-fresh-herb-garden-b.jpg",
  "/cozy-living-room-corner-with-indoor-plants-and-suc.jpg",
  "/bright-apartment-balcony-with-small-vegetable-gard.jpg",
  "/minimalist-desk-workspace-with-small-potted-herbs-.jpg",
  "/scandinavian-style-home-with-hanging-plants-and-in.jpg",
  "/urban-apartment-with-vertical-wall-garden-and-indo.jpg",
]

export function GallerySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#E0EDE0] to-[#F4F9F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2D2D2D] mb-16 text-balance">
          Gallery of Ideas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <span className="text-white font-serif font-bold text-xl text-balance text-center px-4">
                  Create Your Nature Corner 🌿
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
