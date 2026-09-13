"use client";

const principles = [
  {
    id: "01",
    title: "UNDERSTAND THE REQUIREMENT",
    description: "Begin with the energy requirement, application and project context."
  },
  {
    id: "02",
    title: "DESIGN A SUITABLE SOLUTION",
    description: "Consider the site and project requirements before determining the appropriate solar system configuration."
  },
  {
    id: "03",
    title: "SUPPORT THE SYSTEM",
    description: "Continue beyond installation with maintenance, repair and service capabilities."
  }
];

export default function VisionFocus() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
              <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
                Our Approach
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary leading-tight mb-6">
              Making Solar Energy Practical for Every Project.
            </h2>
            
            <p className="text-lg text-gray-600 font-sans leading-relaxed mb-6">
              ARKGO Solutions approaches solar projects around their actual requirements — from understanding the application and assessing the site to designing, installing and supporting the appropriate system.
            </p>
            
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Whether the requirement is residential, commercial or industrial, the focus remains on building a solution suited to the project.
            </p>

            <div className="mt-12 p-6 bg-white border-l-4 border-primary shadow-none border border-gray-200 hidden md:block">
              <div className="flex items-center justify-between text-xs font-heading font-bold text-gray-500 uppercase tracking-widest">
                <span>Requirement</span>
                <span className="text-gray-300">→</span>
                <span>Assessment</span>
                <span className="text-gray-300">→</span>
                <span>Design</span>
                <span className="text-gray-300">→</span>
                <span>Installation</span>
                <span className="text-gray-300">→</span>
                <span>Support</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-white rounded-none shadow-none border border-gray-200 overflow-hidden">
              {principles.map((principle, index) => (
                <div 
                  key={principle.id}
                  className={`flex flex-col md:flex-row items-start gap-6 p-8 ${index !== principles.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="text-4xl font-heading font-black text-secondary shrink-0 md:w-16">
                    {principle.id}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl font-heading font-extrabold text-primary uppercase tracking-wider mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 font-sans leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
