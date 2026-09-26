import Image from "next/image";

export const metadata = {
  title: "Gallery | ARKGO Solutions",
  description: "Browse the ARKGO Solutions photo gallery.",
};

const galleryImages = [
  { id: 1, src: "/images/projects/masapur-installation.jpg", alt: "Solar Installation in Masapur" },
  { id: 2, src: "/images/projects/sakra-installation-1.jpg", alt: "Solar Installation in Sakra" },
  { id: 3, src: "/images/projects/patna-installation.jpg", alt: "Solar Installation in Patna" },
  { id: 4, src: "/images/projects/sakra-installation-2.jpg", alt: "Solar Installation in Faridpur" }
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-20 min-h-[60vh] bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
            <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
              Gallery
            </span>
            <span className="w-8 h-1 bg-secondary ml-4 inline-block"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6 leading-tight uppercase">
            Our Solar Work
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-sans font-medium">
            Take a look at some of our recent residential and commercial solar installations across Bihar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative w-full aspect-[4/3] bg-gray-100 border-2 border-gray-900 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] overflow-hidden group">
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
