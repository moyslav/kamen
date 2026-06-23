import { NextRequest } from 'next/server'

const ILLUSTRATIONS: Record<string, string> = {
  truck: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#2c2c2c"/>
    <path d="M100 400h500v80c0 22-18 40-40 40h-60c-22 0-40-18-40-40H240c0 22-18 40-40 40h-60c-22 0-40-18-40-40v-80z" fill="#555"/>
    <rect x="580" y="320" width="180" height="160" rx="8" fill="#444"/>
    <path d="M600 360h60l60 60v60h-120v-120z" fill="#666"/>
    <rect x="640" y="420" width="100" height="60" rx="4" fill="#555"/>
    <rect x="180" y="180" width="400" height="220" rx="8" fill="#6a6a6a"/>
    <rect x="200" y="200" width="360" height="180" rx="4" fill="#7a7a7a"/>
    <path d="M200 200l80 80h280l80-80" fill="none" stroke="#888" stroke-width="3"/>
    <circle cx="200" cy="460" r="45" fill="#333" stroke="#222" stroke-width="4"/>
    <circle cx="200" cy="460" r="25" fill="#555"/>
    <circle cx="640" cy="460" r="45" fill="#333" stroke="#222" stroke-width="4"/>
    <circle cx="640" cy="460" r="25" fill="#555"/>
    <rect x="120" y="380" width="60" height="30" rx="4" fill="#ff4444"/>
    <rect x="400" y="340" width="80" height="40" rx="4" fill="#8b7355"/>
    <text x="400" y="540" font-family="sans-serif" font-size="28" fill="#888" text-anchor="middle">Доставка</text>
  </svg>`,

  tools: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#2c2c2c"/>
    <rect x="150" y="250" width="500" height="200" rx="10" fill="#4a4a4a"/>
    <rect x="180" y="280" width="440" height="140" rx="6" fill="#5a5a5a"/>
    <rect x="200" y="300" width="180" height="100" rx="4" fill="#6a6a6a"/>
    <circle cx="310" cy="350" r="30" fill="#888"/>
    <rect x="430" y="300" width="60" height="100" rx="4" fill="#c9a96e"/>
    <rect x="530" y="300" width="20" height="100" rx="2" fill="#888"/>
    <rect x="570" y="300" width="20" height="100" rx="2" fill="#888"/>
    <rect x="450" y="280" width="20" height="140" rx="2" fill="#aaa"/>
    <rect x="180" y="200" width="440" height="30" rx="4" fill="#555"/>
    <rect x="220" y="180" width="360" height="20" rx="4" fill="#666"/>
    <rect x="300" y="150" width="200" height="30" rx="4" fill="#777"/>
    <line x1="200" y1="450" x2="600" y2="450" stroke="#555" stroke-width="3"/>
    <circle cx="310" cy="350" r="12" fill="#333"/>
    <text x="400" y="540" font-family="sans-serif" font-size="28" fill="#888" text-anchor="middle">Монтаж</text>
  </svg>`,

  cutting: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#2c2c2c"/>
    <rect x="120" y="380" width="560" height="40" rx="4" fill="#555"/>
    <rect x="140" y="350" width="520" height="30" rx="3" fill="#666"/>
    <rect x="100" y="240" width="600" height="110" rx="8" fill="#4a4a4a"/>
    <rect x="120" y="260" width="560" height="70" rx="4" fill="#3a3a3a"/>
    <circle cx="400" cy="295" r="60" fill="#888" stroke="#aaa" stroke-width="4"/>
    <circle cx="400" cy="295" r="50" fill="#999"/>
    <circle cx="400" cy="295" r="20" fill="#555"/>
    <circle cx="400" cy="295" r="8" fill="#333"/>
    <line x1="350" y1="295" x2="450" y2="295" stroke="#ddd" stroke-width="3"/>
    <line x1="400" y1="245" x2="400" y2="345" stroke="#ddd" stroke-width="3"/>
    <line x1="360" y1="255" x2="440" y2="335" stroke="#ddd" stroke-width="2"/>
    <line x1="440" y1="255" x2="360" y2="335" stroke="#ddd" stroke-width="2"/>
    <text x="400" y="540" font-family="sans-serif" font-size="28" fill="#888" text-anchor="middle">Резка камня</text>
  </svg>`,

  polishing: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#2c2c2c"/>
    <rect x="150" y="320" width="500" height="120" rx="6" fill="#555"/>
    <rect x="180" y="340" width="440" height="80" rx="4" fill="#6a6a6a"/>
    <ellipse cx="400" cy="380" rx="180" ry="30" fill="#888" opacity="0.5"/>
    <rect x="280" y="180" width="240" height="140" rx="8" fill="#4a4a4a"/>
    <rect x="300" y="200" width="200" height="100" rx="6" fill="#5a5a5a"/>
    <circle cx="400" cy="250" r="35" fill="#888"/>
    <circle cx="400" cy="250" r="25" fill="#aaa"/>
    <circle cx="400" cy="250" r="15" fill="#ccc"/>
    <ellipse cx="400" cy="250" rx="8" ry="4" fill="#666"/>
    <rect x="370" y="320" width="60" height="30" rx="4" fill="#777"/>
    <line x1="300" y1="220" x2="240" y2="340" stroke="#666" stroke-width="4"/>
    <line x1="500" y1="220" x2="560" y2="340" stroke="#666" stroke-width="4"/>
    <text x="400" y="540" font-family="sans-serif" font-size="28" fill="#888" text-anchor="middle">Полировка</text>
  </svg>`,

  fabrication: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#2c2c2c"/>
    <rect x="100" y="360" width="600" height="40" rx="4" fill="#555"/>
    <rect x="100" y="340" width="600" height="20" rx="2" fill="#666"/>
    <rect x="240" y="160" width="320" height="180" rx="8" fill="#4a4a4a"/>
    <rect x="260" y="180" width="280" height="140" rx="4" fill="#5a5a5a"/>
    <rect x="280" y="200" width="240" height="100" rx="3" fill="#6a6a6a"/>
    <rect x="300" y="160" width="200" height="20" rx="2" fill="#555"/>
    <rect x="340" y="140" width="120" height="20" rx="2" fill="#666"/>
    <rect x="260" y="300" width="280" height="20" rx="2" fill="#555"/>
    <line x1="200" y1="320" x2="600" y2="320" stroke="#666" stroke-width="2"/>
    <line x1="200" y1="340" x2="600" y2="340" stroke="#555" stroke-width="2"/>
    <circle cx="300" cy="400" r="15" fill="#888"/>
    <circle cx="500" cy="400" r="15" fill="#888"/>
    <circle cx="400" cy="400" r="15" fill="#888"/>
    <text x="400" y="540" font-family="sans-serif" font-size="28" fill="#888" text-anchor="middle">Изделия на заказ</text>
  </svg>`,

  marble: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <defs><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feBlend in="SourceGraphic" mode="multiply"/></filter></defs>
    <rect width="800" height="800" fill="#f0ebe3"/>
    <rect width="800" height="800" fill="#d4c5b5" filter="url(#n)" opacity="0.4"/>
    <path d="M0 300 Q200 250 400 320 T800 280" fill="none" stroke="#c8b8a0" stroke-width="3" opacity="0.5"/>
    <path d="M0 450 Q250 400 500 480 T800 420" fill="none" stroke="#d8c8b0" stroke-width="2" opacity="0.4"/>
    <path d="M200 0 Q250 200 220 400 T200 800" fill="none" stroke="#c0b0a0" stroke-width="2" opacity="0.3"/>
    <path d="M550 0 Q500 300 580 500 T550 800" fill="none" stroke="#b8a898" stroke-width="2" opacity="0.35"/>
    <text x="400" y="420" font-family="Georgia,serif" font-size="48" fill="rgba(0,0,0,0.12)" text-anchor="middle">Мрамор</text>
  </svg>`,

  granite: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <defs><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feBlend in="SourceGraphic" mode="multiply"/></filter></defs>
    <rect width="800" height="800" fill="#404040"/>
    <rect width="800" height="800" fill="#505050" filter="url(#n)" opacity="0.5"/>
    <circle cx="200" cy="300" r="4" fill="#555" opacity="0.8"/>
    <circle cx="500" cy="200" r="3" fill="#555" opacity="0.7"/>
    <circle cx="350" cy="500" r="5" fill="#555" opacity="0.6"/>
    <circle cx="600" cy="600" r="3" fill="#555" opacity="0.7"/>
    <circle cx="150" cy="550" r="4" fill="#555" opacity="0.5"/>
    <text x="400" y="420" font-family="Georgia,serif" font-size="48" fill="rgba(255,255,255,0.10)" text-anchor="middle">Гранит</text>
  </svg>`,

  quartzite: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <defs><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feBlend in="SourceGraphic" mode="multiply"/></filter></defs>
    <rect width="800" height="800" fill="#d4c9b8"/>
    <rect width="800" height="800" fill="#c8bdb0" filter="url(#n)" opacity="0.4"/>
    <path d="M0 250 Q300 200 450 300 T800 260" fill="none" stroke="#b8a898" stroke-width="4" opacity="0.4"/>
    <path d="M0 550 Q200 500 400 580 T800 520" fill="none" stroke="#c0b0a0" stroke-width="3" opacity="0.35"/>
    <text x="400" y="420" font-family="Georgia,serif" font-size="48" fill="rgba(0,0,0,0.12)" text-anchor="middle">Кварцит</text>
  </svg>`,

  onyx: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <defs><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feBlend in="SourceGraphic" mode="multiply"/></filter></defs>
    <rect width="800" height="800" fill="#1e3d18"/>
    <rect width="800" height="800" fill="#2d5a27" filter="url(#n)" opacity="0.4"/>
    <ellipse cx="400" cy="400" rx="200" ry="300" fill="#3a6a3a" opacity="0.3"/>
    <ellipse cx="400" cy="350" rx="120" ry="200" fill="#4a8c42" opacity="0.15"/>
    <text x="400" y="420" font-family="Georgia,serif" font-size="48" fill="rgba(255,255,255,0.10)" text-anchor="middle">Оникс</text>
  </svg>`,

  travertine: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <defs><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feBlend in="SourceGraphic" mode="multiply"/></filter></defs>
    <rect width="800" height="800" fill="#d4c4a8"/>
    <rect width="800" height="800" fill="#c8b898" filter="url(#n)" opacity="0.5"/>
    <circle cx="200" cy="300" r="30" fill="#c0b090" opacity="0.4"/>
    <circle cx="500" cy="200" r="25" fill="#c0b090" opacity="0.3"/>
    <circle cx="350" cy="500" r="35" fill="#c0b090" opacity="0.35"/>
    <circle cx="600" cy="550" r="20" fill="#c0b090" opacity="0.3"/>
    <circle cx="150" cy="450" r="28" fill="#c0b090" opacity="0.25"/>
    <text x="400" y="420" font-family="Georgia,serif" font-size="48" fill="rgba(0,0,0,0.12)" text-anchor="middle">Травертин</text>
  </svg>`,

  artificial: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <defs><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feBlend in="SourceGraphic" mode="multiply"/></filter></defs>
    <rect width="800" height="800" fill="#b0b8c0"/>
    <rect width="800" height="800" fill="#c0c8d0" filter="url(#n)" opacity="0.35"/>
    <rect x="100" y="100" width="200" height="200" rx="4" fill="#a0a8b0" opacity="0.4" stroke="#909aa0" stroke-width="2"/>
    <rect x="350" y="100" width="200" height="200" rx="4" fill="#a0a8b0" opacity="0.4" stroke="#909aa0" stroke-width="2"/>
    <rect x="600" y="100" width="100" height="200" rx="4" fill="#a0a8b0" opacity="0.4" stroke="#909aa0" stroke-width="2"/>
    <rect x="100" y="350" width="200" height="100" rx="4" fill="#a0a8b0" opacity="0.4" stroke="#909aa0" stroke-width="2"/>
    <rect x="350" y="350" width="200" height="100" rx="4" fill="#a0a8b0" opacity="0.4" stroke="#909aa0" stroke-width="2"/>
    <rect x="600" y="350" width="100" height="100" rx="4" fill="#a0a8b0" opacity="0.4" stroke="#909aa0" stroke-width="2"/>
    <text x="400" y="420" font-family="Georgia,serif" font-size="48" fill="rgba(0,0,0,0.10)" text-anchor="middle">Искусственный</text>
  </svg>`,

  product: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <defs><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feBlend in="SourceGraphic" mode="multiply"/></filter></defs>
    <rect width="800" height="800" fill="#e8e0d8"/>
    <rect width="800" height="800" fill="#d8d0c8" filter="url(#n)" opacity="0.35"/>
    <path d="M0 200 Q400 150 800 220" fill="none" stroke="#c8b8a8" stroke-width="3" opacity="0.4"/>
    <path d="M0 500 Q400 550 800 480" fill="none" stroke="#d0c0b0" stroke-width="2" opacity="0.35"/>
    <path d="M300 0 Q350 400 320 800" fill="none" stroke="#c0b0a0" stroke-width="2" opacity="0.3"/>
    <path d="M550 0 Q500 300 580 600 T550 800" fill="none" stroke="#b8a898" stroke-width="1.5" opacity="0.25"/>
    <text x="400" y="420" font-family="Georgia,serif" font-size="36" fill="rgba(0,0,0,0.10)" text-anchor="middle">Натуральный камень</text>
  </svg>`,
}

export async function GET(req: NextRequest) {
  const type = req.nextUrl.pathname.split('/').pop() || 'product'
  const svg = ILLUSTRATIONS[type] || ILLUSTRATIONS.product
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
