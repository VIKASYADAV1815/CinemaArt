export interface ProductSpec {
  category: string;
  items: { label: string; value: string }[];
}

export interface ProductFeature {
  title: string;
  description: string;
  image?: string;
}

export interface ProductColor {
  name: string;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  originalPrice?: string;
  slug: string;
  status: string;
  desc: string; // Short description for the shop card
  colors: ProductColor[];
  lenses?: string[]; // Optional lens configurations
  overview: string; // Detailed description for the product page
  keyFeatures: string[]; // Bullet points for quick scanning
  richFeatures: ProductFeature[]; // Detailed sections with title/desc
  specs: ProductSpec[]; // Specifications for accordion
}

export const products: Product[] = [
  {
    id: "fujifilm-x100vi",
    name: "FUJIFILM X100VI 40.2 MP MIRRORLESS CAMERA WITH FIXED 23MMF2 LENS",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹179,998",
    slug: "fujifilm-x100vi",
    status: "In Stock",
    desc: "The ultimate design for analog operation. 40.2MP APS-C X-Trans CMOS 5 HR Sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F15.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F17.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F18.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F19.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F20.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F21.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F22.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F23.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F24.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F25.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F26.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F27.webp"
        ]
      },
      {
        name: "Grey",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F18.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F19.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F20.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F22.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F24.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F26.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F27.webp"
        ]
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F15.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F17.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F21.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F23.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F25.webp"
        ]
      }
    ],
    overview: "X100VI offers advanced video performance in a compact, lightweight body. Create movies up to 6.2K internally at 30p in 4:2:2 10-bit color. 4K/60p and high-speed 1080/240p are also available, maximizing video flexibility.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR Sensor",
      "X-Processor 5 Image Processor",
      "Fujinon 23mm f/2 Lens (35mm Equivalent)",
      "6-Stop In-Body Image Stabilization",
      "6.2K/30p 4:2:2 10-bit internal recording",
      "425-Point Intelligent Hybrid AF",
      "Hybrid 0.66x OVF with 3.69m-Dot OLED EVF"
    ],
    richFeatures: [
      {
        title: "Advanced Hybrid Viewfinder",
        description: "Frame images your way using X100VI’s hybrid viewfinder. Switch between the EVF, showing what the sensor sees, and OVF, which also shows what’s outside the frame. An OVF Image Display option allows you to view an image after it has been made, either at full screen or in the corner of the viewfinder."
      },
      {
        title: "S/N Level / Low-Light Power",
        description: "The high-resolution 40.2-megapixel X-Trans CMOS 5 HR sensor has an enhanced image-processing algorithm that boosts resolution without compromising the signal-to-noise ratio. Astonishing image quality is in the palm of your hand."
      },
      {
        title: "Flat Two-way Tilting LCD",
        description: "Confidently compose and view images using X100VI’s two-way tilting LCD. Featuring 1.62 million dots for color accuracy and detail, the LCD stores flat against the body to maintain the perfect profile. Framing is now even easier with 45° screen tilt available when holding the camera at high angles."
      },
      {
        title: "ISO 125 Standard Sensitivity",
        description: "The X-Trans CMOS 5 HR sensor in X100VI has a more light-efficient pixel structure. A setting of ISO 125, which on the prior model, X100V was only an extended sensitivity option, is now available natively on the X100VI."
      },
      {
        title: "Light Weight, High Performance",
        description: "When light is low and stakes are high, X100VI’s newly developed in-body image stabilization (IBIS) system keeps images sharp and videos stable. The five-axis IBIS mechanism offers up to 6.0* stops of compensation, yet maintains the X100 Series’ characteristic compactness and portability."
      },
      {
        title: "Colour chrome effect",
        description: "For highly-saturated subjects, Color Chrome Effect adds depth, detail, and vibrancy in three strengths to red, green, or yellow tones where detail may otherwise be lost. Or use Color Chrome FX Blue to boost the blue tones in an image."
      },
      {
        title: "The Ultimate Design for Analog Operation",
        description: "Echoing classic film camera design, the dials on the top-plate of X100VI combine essential functionality with creative freedom. View or change camera settings at any time, with shutter speed, aperture, and ISO controls all instantly accessible – just as they were on X100V."
      },
      {
        title: "Subject Detection Autofocus",
        description: "X100VI uses X-Processor 5’s subject detection AF to accurately track a range of subjects. Built using deep-learning AI technology, it detects animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones.* \n*SUBJECT DETECTION SETTING to be set to BIRD for insect detection, and to AIRPLANE for detecting drones."
      },
      {
        title: "Updated AF algorithm",
        description: "X100VI incorporates an impressive autofocus prediction algorithm for reliable focusing even when recording continuously moving subjects. Autofocus enhancements are most notable in Zone AF and low-contrast situations."
      },
      {
        title: "FILM SIMULATION",
        description: "The 20 Film Simulation modes offered by X100VI, including the new REALA ACE mode, harness 90 years of Fujifilm color science, digitally replicating the look of classic photographic film stocks. Reproduce the classic colors and tones Fujifilm is renowned for, or add artistic flair and start to BUILD YOUR LEGACY."
      },
      {
        title: "Grain effect",
        description: "From subtle textures to the gritty look of traditional high-ISO film stocks, with X100VI you can easily add natural-looking grain to your photos. Control the strength and size for just the right amount of texture on any image."
      },
      {
        title: "The One and Only",
        description: "However you want to create content, the light, portable X100VI will always be ready. Compose using the versatile hybrid viewfinder, flip out the detailed LCD to work at waist level, or preset settings and trust your instincts. Whatever your creative style, this camera ensures no moment is missed."
      }
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Operation Environment", value: "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)" },
          { label: "Power Supply", value: "NP-W126S Li-ion battery (included)" }
        ]
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB 10Gbps)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          { label: "Other Terminals", value: "Microphone / shutter release input: ø2.5mm; Hot Shoe" },
          { label: "Bluetooth®", value: "Bluetooth Ver. 4.2 (Bluetooth low energy)" },
          { label: "Wireless Transmitter", value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)" }
        ]
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          { label: "File format of still image", value: "JPEG (Exif Ver.2.32), HEIF (4:2:2 10bit), RAW (14bit RAF), TIFF (8bit / 16bit RGB)" },
          { label: "Sensitivity", value: "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)" },
          { label: "Lens", value: "FUJINON single focal length lens, f=23mm (35mm format equivalent: 35mm)" },
          { label: "Exposure compensation", value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)" },
          { label: "Image stabilizer", value: "Image sensor shift mechanism with 5-axis compensation (up to 6.0 stops)" },
          { label: "Shutter Speed", value: "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec" },
          { label: "Drive Mode", value: "Continuous: Approx. 20fps (Electronic Shutter), 11fps (Mechanical)" },
          { label: "Focus", value: "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)" },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" },
          { label: "Touch Screen Mode", value: "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch" },
          { label: "Movie Recording", value: "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K HQ | DCI4K | FHD" },
          { label: "Grain Effect", value: "STRONG, WEAK, OFF / Size: LARGE, SMALL" },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          { label: "White Balance", value: "Auto, Custom, Color temperature, Preset" },
          { label: "Self-timer", value: "10sec. / 2sec." }
        ]
      }
    ]
  },
  {
    id: "fujifilm-x-m5",
    name: "FUJIFILM X-M5",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹78,000",
    originalPrice: "₹83,999",
    slug: "fujifilm-x-m5",
    status: "In Stock",
    desc: "The lightest X Series model. 26.1MP X-Trans CMOS 4 sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f14.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f15.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f17.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f18.webp"
        ]
      },
      {
        name: "Silver",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f15.webp"
        ]
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f18.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f14.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f17.webp"
        ]
      }
    ],
    lenses: ["Body", "XC 15-45mm Lens"],
    overview: "FUJIFILM X-M5 mirrorless digital camera has everything you need to bring that vision to life. Compact, lightweight, and with powerful photo and video functions, it’s the perfect companion to record everyday life.",
    keyFeatures: [
      "26.1MP APS-C X-Trans CMOS 4 Sensor",
      "X-Processor 5 Image Processor",
      "6.2K/30p 4:2:2 10-bit internal recording",
      "AI Subject Detection Autofocus",
      "Lightest X Series camera at 355g",
      "Film Simulation Dial with 20 modes",
      "Three Built-In Microphones for advanced audio"
    ],
    richFeatures: [
      {
        title: "Microphone Direction Setting",
        description: "FUJIFILM X-M5 is the first X Series model to feature three built-in microphones for the highest-quality audio. Four different audio modes are available: Surround, Front Priority, Back Priority, or Front & Back Priority, giving the flexibility to get crystal-clear sound from any direction."
      },
      {
        title: "Film Simulation mode Dial",
        description: "Instantly access your own creative looks thanks to FUJIFILM X-M5 digital cameras unique Film Simulation mode dial. Offering up to 20 looks, X-M5’s Film Simulation modes can be applied to photos and videos, giving you incredible flexibility for your output."
      },
      {
        title: "See It Your Way",
        description: "Great images are all about the details. With the 20 available Film Simulation modes and a host of creative controls, FUJIFILM X-M5 empowers you to make content just the way you want it."
      },
      {
        title: "An Eye for Detail",
        description: "Create content with depth, texture, and true-to-life color thanks to FUJIFILM X-M5’s X-Trans CMOS 4 sensor and X-Processor 5 imaging engine. Experience detail and quality that far exceeds the results from your Smartphone."
      },
      {
        title: "Film Simulation",
        description: "The 20 Film Simulation modes offered by FUJIFILM X-M5, including REALA ACE mode, harness 90 years of Fujifilm color science."
      },
      {
        title: "Color Your Moment",
        description: "Every day is different. The weather, the light, the way you feel – each offers a chance to view the world in a new way. FUJIFILM X-M5 mirrorless digital camera has everything you need to bring that vision to life. Compact, lightweight, and with powerful photo and video functions, it’s the perfect companion to record everyday life."
      },
      {
        title: "Form and Function",
        description: "The compact size of FUJIFILM X-M5 hasn’t compromised its elegant styling. The symmetrically placed dials on the top plate enhance its beauty. It’s unmistakably an X Series camera in both looks and performance."
      },
      {
        title: "Noise Reduction Setting",
        description: "The new microphones offer more than just directional control – a versatile noise reduction feature has also been added. Now, it’s possible to reduce noise that continues at a constant frequency; for example, the sound of air conditioning or wind noise."
      },
      {
        title: "Digital Image Stabilization",
        description: "FUJIFILM X-M5 uses a powerful digital image stabilizer that combats camera shake for smooth, professional footage. It’s effective whether you’re standing still or moving to keep up with a subject."
      },
      {
        title: "Easy-to-Use Interface",
        description: "The layout of the Vlog mode interface has been designed to make video recording intuitive and enjoyable, even if you are new to content creation."
      },
      {
        title: "High-Quality Recording",
        description: "FUJIFILM X-M5 supports in-camera card recording to your SD card at 6.2K/30p 4:2:2 10-bit, as well as high-quality, 4K/60p and 1080/240p video recording in a compact and lightweight body."
      },
      {
        title: "Latest AF Technology",
        description: "FUJIFILM X-M5 is equipped with Fujifilm’s latest predictive algorithm, recording subjects with highly accurate AF even in scenes requiring tracking of moving objects or in low-contrast environments. It tracks a wide range of subjects, including sports and animals, and subjects in motion."
      },
      {
        title: "Subject Detection Autofocus",
        description: "X-Processor 5 features subject detection autofocus that is built with deep-learning AI technology. In addition to providing incredible AF tracking and detection for human faces and eyes, FUJIFILM X-M5 can also automatically detect and track a broad range of subjects, including animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones."
      },
      {
        title: "Ready For Everything",
        description: "At 355g (0.78lb), FUJIFILM X-M5 is currently the lightest model in the X Series line-up of digital cameras and so small it fits in a jacket pocket. This makes it perfect to carry everywhere you go, ready to create high-quality content on a moment’s notice."
      }
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Operation Environment", value: "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)" },
          { label: "Power Supply", value: "NP-W126S Li-ion battery (included)" },
          { label: "Terminal", value: "USB Type-C (USB 10Gbps), HDMI Micro connector (Type D), Microphone / shutter release input: ø2.5mm" },
          { label: "Bluetooth®", value: "Bluetooth Ver. 4.2 (Bluetooth low energy)" },
          { label: "Wireless Transmitter", value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)" },
          { label: "Self-timer", value: "10sec. / 2sec." }
        ]
      },
      {
        category: "Imaging",
        items: [
          { label: "Number of recorded pixels", value: "26.1 million pixels" },
          { label: "File format of still image", value: "JPEG, HEIF, RAW (14bit RAF), TIFF" },
          { label: "Sensitivity", value: "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)" },
          { label: "White Balance", value: "Auto, Custom, Color temperature, Preset" },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          { label: "Grain Effect", value: "STRONG, WEAK, OFF / Size: LARGE, SMALL" },
          { label: "Image stabilizer", value: "Digital Image Stabilization (Movie mode)" }
        ]
      },
      {
        category: "Shooting",
        items: [
          { label: "Lens", value: "FUJIFILM X mount" },
          { label: "Shutter Speed", value: "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/32000 sec" },
          { label: "Exposure compensation", value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)" },
          { label: "Drive Mode", value: "Continuous, Bracketing, Advanced Filter, Panorama, Multiple Exposure" },
          { label: "Continuous shooting CH", value: "Approx. 20fps (Electronic Shutter), 8fps (Mechanical)" },
          { label: "Focus", value: "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)" },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" }
        ]
      },
      {
        category: "Video & Interaction",
        items: [
          { label: "Movie Recording", value: "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K | FHD" },
          { label: "Touch Screen Mode", value: "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch" }
        ]
      }
    ]
  }
];
