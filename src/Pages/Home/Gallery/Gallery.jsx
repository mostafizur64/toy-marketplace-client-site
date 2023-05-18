
const Gallery = () => {
    const animalToys = [
        { id: 1, src: 'path_to_image_1.jpg', alt: 'Animal Toy 1' },
        { id: 2, src: 'path_to_image_2.jpg', alt: 'Animal Toy 2' },
        { id: 2, src: 'path_to_image_2.jpg', alt: 'Animal Toy 2' },
        { id: 2, src: 'path_to_image_2.jpg', alt: 'Animal Toy 2' },
        { id: 2, src: 'path_to_image_2.jpg', alt: 'Animal Toy 2' },
        { id: 3, src: 'path_to_image_3.jpg', alt: 'Animal Toy 3' },
        // Add more image objects as needed
      ];
    
      return (
        <div className="grid justify-center items-center  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
          {animalToys.map((toy) => (
            <img
              key={toy.id}
              src={toy.src}
              alt={toy.alt}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      );
};

export default Gallery;