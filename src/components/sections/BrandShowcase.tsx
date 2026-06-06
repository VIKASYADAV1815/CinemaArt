"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Cameras",
    brands: [
      { 
        name: "Sony", 
        type: "svg", 
        svg: (
          <svg viewBox="0 0 122.88 21.63" className="w-full h-full fill-current">
            <path d="M43.78,21.63c-4.45,0-8.59-1.33-11.34-3.81a9.28,9.28,0,0,1-3.09-7,9.4,9.4,0,0,1,3.09-7C35,1.46,39.52,0,43.78,0c4.71,0,8.48,1.19,11.36,3.8a9.36,9.36,0,0,1,3,7,9.72,9.72,0,0,1-3,7c-2.68,2.5-6.9,3.81-11.36,3.81V18.78a8.56,8.56,0,0,0,6.08-2.34,7.56,7.56,0,0,0,2.23-5.64,7.85,7.85,0,0,0-2.23-5.66,9.15,9.15,0,0,0-12.18,0,7.94,7.94,0,0,0-2.22,5.66,7.89,7.89,0,0,0,2.22,5.64,8.63,8.63,0,0,0,6.1,2.34v2.85ZM11.24,0A18.77,18.77,0,0,0,3.86,1.48C1.74,2.43,0,4,0,6.5a5.2,5.2,0,0,0,1.41,3.58,7.87,7.87,0,0,0,4.22,2.11c1.16.25,3.64.64,6.12.9s4.87.51,5.85.76c.79.2,2.1.47,2.1,1.94a2.21,2.21,0,0,1-1.62,2,12.44,12.44,0,0,1-4.89.85,20.61,20.61,0,0,1-5.82-1A7,7,0,0,1,4,15.4a3.85,3.85,0,0,1-.7-2.13H.6v7.57h3v-1a.43.43,0,0,1,.65-.37,24,24,0,0,0,4.4,1.42,18.68,18.68,0,0,0,4.55.56,19.58,19.58,0,0,0,6.12-.86,10.53,10.53,0,0,0,3.62-1.79,5,5,0,0,0,1.95-4,5.57,5.57,0,0,0-1.57-3.92,6.78,6.78,0,0,0-1.95-1.32A14.8,14.8,0,0,0,19,8.72c-1.55-.38-5.05-.85-6.72-1a49.24,49.24,0,0,1-6-.81A1.47,1.47,0,0,1,5.12,5.54,1.85,1.85,0,0,1,6.15,4a11.69,11.69,0,0,1,5.52-1.1,16.16,16.16,0,0,1,6.41,1.25A7.28,7.28,0,0,1,19.6,5a4.57,4.57,0,0,1,1.5,2.51h2.43V1H20.82v.77c0,.25-.26.57-.74.3a20.74,20.74,0,0,0-8.84-2Zm59.35,1.2L83.8,13.13l-.13-8c0-1-.21-1.49-1.35-1.49H79.84V1.21H91.13v2.4H88.71c-1.16,0-1.23.37-1.25,1.49l.21,15.34H83.8L68.58,6.86V16.5c0,1.05.06,1.54,1.14,1.54h2.71v2.4H61.35V18h2.59c1,0,.93-.92.93-1.6V5.19c0-.72-.1-1.58-1.62-1.58H61.14V1.21ZM104,18a4.8,4.8,0,0,0,.67-.05.8.8,0,0,0,.52-.46,2.29,2.29,0,0,0,0-.52V13.22c0-.09,0-.13-.17-.34S98.2,5,97.89,4.68a2.81,2.81,0,0,0-2.08-1.07H93.47V1.21h13.24v2.4h-1.59c-.37,0-.62.35-.3.74l4.5,5.39s.07.07.13,0,4.57-5.35,4.6-5.4a.46.46,0,0,0-.39-.74H112V1.21h10.86v2.4h-2.43a2.07,2.07,0,0,0-1.9.91l-7.31,8.34a.56.56,0,0,0-.08.36V17a2.29,2.29,0,0,0,0,.52.8.8,0,0,0,.52.46,4.68,4.68,0,0,0,.66,0h2.48v2.41H101.69V18Z"/>
          </svg>
        )
      },
      { 
        name: "Nikon", 
        type: "img", 
        src: "https://www.pngfind.com/pngs/m/57-571450_nikon-logo-png-transparent-svg-vector-freebie-supply.png" 
      },
      { 
        name: "Fujifilm X Series", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Fujifilm_logo.svg" 
      },
      { 
        name: "Canon", 
        type: "svg", 
        svg: (
          <svg viewBox="0 0 122.88 25.7" className="w-full h-full fill-[#CC0000]">
            <path d="M54.28,25.08,50,8.92a6.11,6.11,0,0,0-8-4.16L32.63,8.15h9.59l1.64,6.12a9,9,0,0,0-5.93-2.2c-4.5,0-8.15,3-8.15,6.74s3.65,6.74,8.15,6.74a9.72,9.72,0,0,0,7.88-4l.95,3.56Zm45.87-10A10.66,10.66,0,1,1,89.5,4.39a10.65,10.65,0,0,1,10.65,10.66ZM20.06,23.2a10.35,10.35,0,0,1,0-20.69,10.21,10.21,0,0,1,5.48,1.57l-5.48,8.77,10.32-6A14.06,14.06,0,0,0,25.71,2.4,19.27,19.27,0,0,0,16,0C10.56,0,5.79,2,3.14,4.93A11.76,11.76,0,0,0,0,12.85a11.8,11.8,0,0,0,3.14,7.93c2.66,3,7.35,4.92,12.69,4.92s10-2,12.7-4.92c.14-.16.29-.33.42-.5l-.4-1.51a10.35,10.35,0,0,1-8.49,4.43ZM89.94,7.63A2.35,2.35,0,1,0,85.4,8.84l3.65,13.63a2.35,2.35,0,1,0,4.54-1.22L89.94,7.63Zm29.18-3.24a3.9,3.9,0,0,0-1.6.35l-6,2.79a3.76,3.76,0,0,0-3.71-3.14,3.85,3.85,0,0,0-1.59.35L98.93,8.15h5.14V25.08h7.52V10a1.88,1.88,0,0,1,3.76,0V25.08h7.53V8.15a3.76,3.76,0,0,0-3.76-3.76Zm-47.18,0a3.73,3.73,0,0,0-1.58.35l-6,2.79a3.77,3.77,0,0,0-3.72-3.14,3.89,3.89,0,0,0-1.59.35l-7.3,3.41h5.13V25.08h7.53V10a1.88,1.88,0,0,1,3.76,0V25.08H75.7V8.15a3.76,3.76,0,0,0-3.76-3.76ZM41.07,22.57a3.76,3.76,0,1,1,3.76-3.76,3.76,3.76,0,0,1-3.76,3.76Z"/>
          </svg>
        )
      },
      { 
        name: "Insta360", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Insta360_logo_%28transparent%29.svg" 
      },
      { 
        name: "GoPro", 
        type: "img", 
        imageClass: "brightness-0",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/GoPro_logo.svg/512px-GoPro_logo.svg.png" 
      },
      { 
        name: "DJI", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/DJI_Innovations_logo.svg" 
      },
      { 
        name: "Fujifilm Instax", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/3/35/Instax_%282017%29.svg" 
      }
    ]
  },
  {
    title: "Lenses",
    brands: [
      { 
        name: "Sigma", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Sigma_Logo.svg" 
      },
      { 
        name: "Samyang", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/3/38/Samyang_2024.svg" 
      }
    ]
  },
  {
    title: "Binoculars & Optics",
    brands: [
      { 
        name: "Nikon", 
        type: "img", 
        src: "https://www.pngfind.com/pngs/m/57-571450_nikon-logo-png-transparent-svg-vector-freebie-supply.png" 
      }
    ]
  },
  {
    title: "Accessories",
    brands: [
      { 
        name: "Rode", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/4/40/R%C3%98DE_logo.svg" 
      },
      { 
        name: "Hollyland", 
        type: "svg", 
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 26" className="w-full h-full fill-current"> 
             <path d="M3.89594 13C3.89391 11.6729 4.17892 10.3611 4.73143 9.15449C5.28394 7.94789 6.09088 6.87505 7.0969 6.00956L10.4649 9.32317L6.7939 12.9942L9.45294 15.659L9.55006 15.5619L15.6878 9.42417L15.783 9.329L10.5931 4.12939C11.189 3.95826 11.8007 3.84827 12.4189 3.80114V0C9.07392 0.153023 5.91666 1.5895 3.60368 4.01072C1.2907 6.43194 0 9.65154 0 13C0 16.3485 1.2907 19.5681 3.60368 21.9893C5.91666 24.4105 9.07392 25.847 12.4189 26V22.1969C10.1008 22.0197 7.93515 20.974 6.35495 19.2688C4.77474 17.5637 3.89653 15.3248 3.89594 13Z"></path> 
             <path d="M13.8406 0V3.80308C15.6569 3.94499 17.3905 4.62156 18.8227 5.74747C20.255 6.87338 21.3218 8.3982 21.8885 10.1296C22.4553 11.861 22.4966 13.7215 22.0073 15.4764C21.5181 17.2313 20.5201 18.802 19.1393 19.9904L15.7829 16.6729L19.4559 13L16.7968 10.341L10.4648 16.6729L15.6645 21.8726C15.069 22.0426 14.458 22.1526 13.8406 22.2008V26C17.1856 25.847 20.3428 24.4105 22.6558 21.9893C24.9688 19.5681 26.2595 16.3485 26.2595 13C26.2595 9.65154 24.9688 6.43194 22.6558 4.01072C20.3428 1.58951 17.1856 0.153023 13.8406 0Z"></path> 
             <path d="M48.253 7.21387C46.7184 7.21387 45.2467 7.82348 44.1615 8.9086C43.0764 9.99373 42.4668 11.4655 42.4668 13.0001C42.4668 14.5347 43.0764 16.0064 44.1615 17.0915C45.2467 18.1766 46.7184 18.7863 48.253 18.7863C48.3559 18.7863 48.4569 18.7863 48.556 18.7863C48.9422 18.7659 49.3254 18.7074 49.7 18.6114C51.0647 18.2603 52.2543 17.4231 53.0457 16.2571C53.837 15.0912 54.1756 13.6765 53.998 12.2786C53.8204 10.8807 53.1388 9.5956 52.0811 8.66454C51.0233 7.73348 49.6621 7.22042 48.253 7.22164V7.21387ZM48.9619 15.7426C48.7785 15.7887 48.5913 15.818 48.4026 15.83H48.253C47.5339 15.8291 46.8422 15.5543 46.3186 15.0615C45.7949 14.5687 45.4787 13.895 45.4341 13.1773C45.3895 12.4596 45.62 11.7519 46.0786 11.1982C46.5373 10.6444 47.1897 10.2861 47.9031 10.1962C48.6165 10.1063 49.3374 10.2915 49.9191 10.7142C50.5008 11.1368 50.8996 11.7652 51.0345 12.4715C51.1694 13.1778 51.0302 13.9089 50.6452 14.5162C50.2602 15.1235 49.6583 15.5614 48.9619 15.7407V15.7426Z"></path> 
             <path d="M31.3755 18.7863V7.21387H34.3298V11.5647H38.1115V7.21387H41.0677V18.7863H38.1134V14.1596H34.3317V18.7863H31.3755Z"></path> 
             <path d="M55.4375 7.21387H58.3937V16.1894H62.6338V18.7863H55.4375V7.21387Z"></path> 
             <path d="M64.0361 7.21387H66.9924V16.1894H71.2325V18.7863H64.0361V7.21387Z"></path> 
             <path d="M82.459 7.21387H85.4152V16.1894H89.6553V18.7863H82.459V7.21387Z"></path> 
             <path d="M74.6683 14.3616L71.481 7.21387H74.4372L76.1484 11.0461L77.8965 7.21387H80.8469L77.6265 14.3616V18.7863H74.6683V14.3616Z"></path> 
             <path d="M110.843 14.2665V7.21387H113.797V18.7863H110.843L106.995 11.8114V18.7863H104.041V7.21387H106.995L110.843 14.2665Z"></path> 
             <path d="M99.6821 18.7863H102.636L98.1923 7.21387H95.51L91.0659 18.7863H94.0299L94.7913 16.8051H98.9207L99.6821 18.7863ZM95.7858 14.214L96.8521 11.4171L97.9262 14.214H95.7858Z"></path> 
             <path d="M123.392 7.21582H115.714V18.7863H123.392L125.462 16.7041V9.28828L123.392 7.21582ZM122.51 15.5795L121.889 16.1991H118.664V9.80106H121.889L122.508 10.4207L122.51 15.5795Z"></path> 
          </svg>
        )
      },
      { 
        name: "BenQ", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/BenQ_2012_logo.svg" 
      },
      { 
        name: "Manfrotto", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Manfrotto_Logo.svg" 
      },
      { 
        name: "Leofoto", 
        type: "img", 
        imageClass: "brightness-0",
        src: "/leo.png" 
      },
      { 
        name: "Kodak", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Logo_of_the_Eastman_Kodak_Company_%282006%E2%80%932016%29.svg" 
      },
      { 
        name: "Yashica", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/d/df/YASHICA_LOGO.svg" 
      },
      { 
        name: "Agfa", 
        type: "img", 
        src: "https://upload.wikimedia.org/wikipedia/commons/0/01/Agfa_logo.svg" 
      },
      { 
        name: "Ulanzi", 
        type: "img", 
        src: "https://www.ulanzi.com/cdn/shop/files/9c2b208736ad87551dbc346f25f56828.png?v=1761725836&width=500" 
      }
    ]
  }
];

export default function BrandShowcase() {
  return (
    <section className="relative w-full bg-[#1a1a1a] py-12 md:py-16 text-white overflow-hidden" id="brands">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-start justify-start"
        >
          <motion.h2 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-syncopate text-xl md:text-3xl font-bold tracking-widest uppercase text-white"
          >
            Authorized Brands
          </motion.h2>
          <p className="font-space mt-3 text-gray-400 max-w-2xl text-xs md:text-sm">
            Partnering with the industry's leading manufacturers to bring you original, premium equipment.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {categories.map((category, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center group border-t border-white/10 py-8 md:py-10">
              <div className="md:w-1/4 mb-6 md:mb-0">
                <h3 className="font-syncopate text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors duration-500">
                  {category.title}
                </h3>
              </div>
              <div className="md:w-3/4 flex flex-wrap items-center gap-x-8 gap-y-8 md:gap-x-12">
                {category.brands.map((brand, i) => (
                  <div key={i} className="h-10 md:h-12 w-28 md:w-36 flex items-center justify-start opacity-90 hover:opacity-100 transition-opacity duration-300">
                    {brand.type === "img" && (
                      <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/95 px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
                        <img 
                          src={brand.src} 
                          alt={brand.name} 
                          className={`max-w-full max-h-full object-contain ${brand.imageClass ?? ""}`} 
                        />
                      </div>
                    )}
                    {brand.type === "svg" && (
                      <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/95 px-3 py-2 text-[#111] shadow-[0_10px_24px_rgba(0,0,0,0.2)] ring-1 ring-black/5 [&>svg]:max-h-full [&>svg]:w-auto">
                        {brand.svg}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
