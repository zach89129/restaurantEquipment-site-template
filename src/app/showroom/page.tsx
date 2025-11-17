/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { brandConfig } from "@/config/brand.config";
import Image from "next/image";

export default function ShowroomPage() {
  const { company, contact, business } = brandConfig;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-zinc-900 text-white py-20">
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src={brandConfig.assets.heroImage}
            alt="Showroom Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {company.name} {contact.address.city} Showroom
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-200">
            (Showroom Subtitle Text) Experience the finest selection of
            restaurant equipment and supplies in our state-of-the-art showroom
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Description Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Industry-Leading Showroom
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              (Showroom Description Text) Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.
            </p>
          </div>

          {/* Video Section */}
          <div className="bg-zinc-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Take a Virtual Tour
            </h2>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 font-bold text-2xl text-center align-middle text-gray-700">
                {/* <iframe
                  src="https://www.youtube.com/embed/wJIx3SyNe7w"
                  title="State Restaurant Equipment Showroom"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                /> */}
                <Image
                  src="/insertVideo.png"
                  alt="Showroo video"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Visit Our Showroom
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Experience our showroom in person and let our experts help you
              find the perfect solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="tel:+15555555555"
                className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2 whitespace-nowrap h-12"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(555) 555-5555</span>
              </a>
              <a
                href="https://www.google.com/maps/place/1234+Address+Street,+City,+State+12345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-zinc-800 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-zinc-700 transition-colors font-semibold flex items-center justify-center gap-2 h-12"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
