export const metadata = {
  title: "Solar Projects",
  description: "View our portfolio of residential, commercial, and industrial solar installations across Bihar.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 min-h-[60vh] bg-[#F8FAFC] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1000px] text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-none border border-gray-200 shadow-none mb-6 text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We are currently documenting our latest solar installations and project statistics.
        </p>
        <div className="bg-white p-8 rounded-none shadow-none border border-gray-200 max-w-md mx-auto">
          <p className="text-gray-500 italic">&quot;Detailed project portfolios are being added.&quot;</p>
        </div>
      </div>
    </div>
  );
}
