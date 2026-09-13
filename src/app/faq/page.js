export const metadata = {
  title: 'FAQ | ARKGO Solutions'
};

export default function Page() {
  return (
    <div className="pt-32 pb-20 min-h-[60vh] bg-[#F8FAFC] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1000px] text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-none border border-gray-200 shadow-none mb-6 text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-4 uppercase">FAQ</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Frequently asked questions about our solar installations and services.
        </p>
        <div className="bg-white p-8 rounded-none shadow-none border border-gray-200 max-w-md mx-auto">
          <p className="text-gray-500 italic">&quot;This page is currently under construction.&quot;</p>
        </div>
      </div>
    </div>
  );
}
