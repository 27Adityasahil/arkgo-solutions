export const metadata = {
  title: "Customer Reviews",
  description: "Read what our customers have to say about their solar experience with ARKGO Solutions.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-32 pb-20 min-h-[60vh] bg-[#F7F9FB] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1000px] text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-sm mb-6 text-[#073B73]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-[#073B73] mb-4">Customer Experiences</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We are compiling the latest verified reviews from our solar installations across Bihar.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto">
          <p className="text-gray-500 italic">&quot;Customer experiences will be featured here soon.&quot;</p>
        </div>
      </div>
    </div>
  );
}
