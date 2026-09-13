"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const projectsList = [
  {
    id: "01",
    location: "Masapur, Bihar",
    type: "Solar Installation",
    image: "/images/projects/masapur-installation.jpg",
    capacity: "50 kW",
    description: "Commercial rooftop installation for local manufacturing unit."
  },
  {
    id: "02",
    location: "Sakra, Bihar",
    type: "Solar Installation",
    image: "/images/projects/sakra-installation-1.jpg",
    capacity: "25 kW",
    description: "Residential hybrid solar system with battery backup."
  },
  {
    id: "03",
    location: "Patna, Bihar",
    type: "Solar Installation",
    image: "/images/projects/patna-installation.jpg",
    capacity: "100 kW",
    description: "Industrial grid-tied system for maximum efficiency."
  },
  {
    id: "04",
    location: "Faridpur, Sakra",
    type: "Solar Installation",
    image: "/images/projects/sakra-installation-2.jpg",
    capacity: "15 kW",
    description: "Off-grid solar solution for remote agricultural facility."
  }
];

export default function Projects() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center mb-6">
              <span className="inline-block bg-secondary text-primary font-bold px-4 py-1 uppercase tracking-widest text-sm">
                PORTFOLIO
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading font-black text-gray-900 leading-tight mb-6 uppercase">
              OUR SOLAR PROJECTS
            </h2>
            <p className="text-lg text-gray-800 font-sans leading-relaxed font-medium">
              See how ARKGO is helping customers move towards cleaner and smarter energy across Bihar.
            </p>
          </div>
          
          <div className="flex shrink-0">
            <Link 
              href="/projects"
              className="inline-flex items-center text-primary font-bold uppercase tracking-wider group border-b-2 border-primary pb-1"
            >
              VIEW ALL PROJECTS <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project) => (
            <div key={project.id} className="bg-white border-2 border-gray-900 rounded-none overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,0.1)] flex flex-col">
              <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden bg-gray-100 border-b-2 border-gray-900">
                <Image
                  src={project.image}
                  alt={`Solar installation project in ${project.location}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 md:p-8 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-primary font-bold uppercase text-sm tracking-wide">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                  <span className="inline-block bg-gray-100 text-gray-900 font-bold px-3 py-1 text-sm border border-gray-300">
                    {project.capacity}
                  </span>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 uppercase">
                  {project.type}
                </h3>
                
                <p className="text-base text-gray-700 font-sans leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

