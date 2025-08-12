import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Import gallery images from src/gallery folder
import img1 from '../gallery/IMG-20250807-WA0008.jpg';
import img2 from '../gallery/IMG-20250807-WA0009.jpg';
import img3 from '../gallery/IMG-20250807-WA0013.jpg';
import img4 from '../gallery/IMG-20250807-WA0017.jpg';
import img5 from '../gallery/IMG-20250807-WA0018.jpg';
import img6 from '../gallery/IMG-20250807-WA0019.jpg';
import img7 from '../gallery/IMG-20250807-WA0020.jpg';
import img8 from '../gallery/IMG-20250807-WA0021.jpg';
import img9 from '../gallery/IMG-20250807-WA0022.jpg';
import img10 from '../gallery/IMG-20250807-WA0023.jpg';
import img11 from '../gallery/IMG-20250807-WA0024.jpg';
import img12 from '../gallery/IMG-20250807-WA0025.jpg';
import img13 from '../gallery/IMG-20250807-WA0026.jpg';
import img14 from '../gallery/IMG-20250807-WA0027.jpg';
import img15 from '../gallery/IMG-20250807-WA0028.jpg';
import img16 from '../gallery/IMG-20250807-WA0029.jpg';
import img17 from '../gallery/IMG-20250807-WA0030.jpg';
import img18 from '../gallery/IMG-20250807-WA0031.jpg';
import img19 from '../gallery/IMG-20250807-WA0032.jpg';
import img20 from '../gallery/IMG-20250807-WA0033.jpg';
import img21 from '../gallery/IMG-20250807-WA0034.jpg';
import img22 from '../gallery/IMG-20250807-WA0035.jpg';
import img23 from '../gallery/IMG-20250807-WA0036.jpg';
import img24 from '../gallery/IMG-20250807-WA0037.jpg';
import img25 from '../gallery/IMG-20250807-WA0038.jpg';
import img26 from '../gallery/IMG-20250807-WA0039.jpg';
import img27 from '../gallery/IMG-20250807-WA0040.jpg';
import img28 from '../gallery/IMG-20250807-WA0041.jpg';
import img29 from '../gallery/IMG-20250807-WA0042.jpg';
import img30 from '../gallery/IMG-20250807-WA0043.jpg';
import img31 from '../gallery/IMG-20250807-WA0044.jpg';
import img32 from '../gallery/IMG-20250807-WA0045.jpg';
import img33 from '../gallery/IMG-20250807-WA0046.jpg';
import img34 from '../gallery/IMG-20250807-WA0047.jpg';
import img35 from '../gallery/IMG-20250807-WA0048.jpg';
import img36 from '../gallery/IMG-20250807-WA0049.jpg';
import img37 from '../gallery/IMG-20250807-WA0050.jpg';
import img38 from '../gallery/IMG-20250807-WA0051.jpg';
import img39 from '../gallery/IMG-20250807-WA0052.jpg';
import img40 from '../gallery/IMG-20250807-WA0053.jpg';
import img41 from '../gallery/IMG-20250807-WA0054.jpg';
import img42 from '../gallery/IMG-20250807-WA0055.jpg';
import img43 from '../gallery/IMG-20250807-WA0056.jpg';
import img44 from '../gallery/IMG-20250807-WA0057.jpg';
import img45 from '../gallery/IMG-20250807-WA0058.jpg';
import img46 from '../gallery/IMG-20250807-WA0059.jpg';
import img47 from '../gallery/IMG-20250807-WA0060.jpg';
import img48 from '../gallery/IMG-20250807-WA0061.jpg';
import img49 from '../gallery/IMG-20250807-WA0062.jpg';
import img50 from '../gallery/IMG-20250807-WA0063.jpg';
import img51 from '../gallery/IMG-20250807-WA0064.jpg';
import img52 from '../gallery/IMG-20250807-WA0065.jpg';
import img53 from '../gallery/IMG-20250807-WA0066.jpg';
import img54 from '../gallery/IMG-20250807-WA0067.jpg';
import img55 from '../gallery/IMG-20250807-WA0068.jpg';
import img56 from '../gallery/IMG-20250807-WA0069.jpg';
import img57 from '../gallery/IMG-20250807-WA0070.jpg';
import img58 from '../gallery/IMG-20250807-WA0071.jpg';
import img59 from '../gallery/IMG-20250807-WA0072.jpg';
import img60 from '../gallery/IMG-20250807-WA0073.jpg';
import img61 from '../gallery/IMG-20250807-WA0074.jpg';
import img62 from '../gallery/IMG-20250807-WA0075.jpg';
import img63 from '../gallery/IMG-20250807-WA0076.jpg';
import img64 from '../gallery/IMG-20250807-WA0077.jpg';
import img65 from '../gallery/IMG-20250807-WA0078.jpg';
import img66 from '../gallery/IMG-20250807-WA0079.jpg';
import img67 from '../gallery/IMG-20250807-WA0080.jpg';

const Gallery = () => {
  // All gallery images
  const allImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
    img51, img52, img53, img54, img55, img56, img57, img58, img59, img60,
    img61, img62, img63, img64, img65, img66, img67
  ];

  return (
    <div className="min-h-screen bg-burnout-black text-burnout-white">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-montserrat font-black mb-6">
              OUR <span className="text-gradient">GALLERY</span>
            </h1>
            <p className="text-xl text-burnout-gray-300 font-oswald max-w-3xl mx-auto">
              Explore the vibrant world of Burnout Fitness through our collection of moments and experiences.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allImages.map((src, index) => (
              <div
                key={index}
                className="group relative bg-burnout-gray-900 rounded-xl overflow-hidden border border-burnout-gray-700 hover:border-burnout-yellow transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt={`Burnout Fitness Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className="mt-20 bg-burnout-gray-900 p-8 rounded-xl border border-burnout-gray-700">
            <div className="text-center">
              <div className="text-4xl font-montserrat font-black text-burnout-yellow mb-2">
                {allImages.length}
              </div>
              <div className="text-burnout-gray-300 font-oswald text-xl">Total Photos</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery; 