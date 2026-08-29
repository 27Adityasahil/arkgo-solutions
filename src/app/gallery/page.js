export const metadata = {
  title: "Gallery",
  description: "Browse the ARKGO Solutions photo gallery.",
};

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-20 min-h-[60vh] bg-[#F7F9FB] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1000px] text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-sm mb-6 text-[#073B73]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-[#073B73] mb-4">Gallery</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          View our installation quality and solar components.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto">
          <p className="text-gray-500 italic">&quot;More gallery images are being curated.&quot;</p>
        </div>
      </div>
    </div>
  );
}
