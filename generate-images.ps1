function New-StoneSvg {
  param([string]$Path, [string]$Label, [string[]]$Colors)
  $svg = @"
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <defs>
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/><feBlend in="SourceGraphic" mode="multiply"/></filter>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="$($Colors[0])"/>
      <stop offset="50%" stop-color="$($Colors[1])"/>
      <stop offset="100%" stop-color="$($Colors[2])"/>
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#g)"/>
  <rect width="800" height="800" fill="url(#g)" filter="url(#n)" opacity="0.35"/>
  <line x1="80" y1="180" x2="720" y2="200" stroke="rgba(0,0,0,0.07)" stroke-width="2"/>
  <line x1="60" y1="420" x2="740" y2="440" stroke="rgba(0,0,0,0.05)" stroke-width="1.5"/>
  <line x1="120" y1="580" x2="700" y2="610" stroke="rgba(0,0,0,0.04)" stroke-width="1"/>
  <line x1="200" y1="120" x2="220" y2="680" stroke="rgba(0,0,0,0.04)" stroke-width="1"/>
  <text x="400" y="400" font-family="Georgia,serif" font-size="28" fill="rgba(0,0,0,0.18)" text-anchor="middle" dominant-baseline="middle">$Label</text>
</svg>
"@
  Set-Content -Path $Path -Value $svg -Encoding utf8
}

$cats = @{
  "marble"      = @("#f0ebe3","#d4c5b5","#e8ddd0")
  "granite"     = @("#505050","#383838","#606060")
  "quartzite"   = @("#d4c9b8","#c8bdb0","#ddd0c0")
  "onyx"        = @("#2d5a27","#4a8c42","#1e3d18")
  "travertine"  = @("#d4c4a8","#e0d0b8","#c8b898")
  "artificial"  = @("#b0b8c0","#d0d4d8","#e0e4e8")
}
$srvs = @{
  "cutting"       = @("#4a6b8a","#3a5a7a","#5a7a9a")
  "polishing"     = @("#a08060","#b09070","#907050")
  "installation"  = @("#6a7a6a","#5a6a5a","#7a8a7a")
  "fabrication"   = @("#8a7060","#7a6050","#9a8070")
  "delivery"      = @("#5a6a7a","#4a5a6a","#6a7a8a")
}
$prods = @(
  @("calacatta",@("#f5f0e8","#e8ddd0","#d4c5b5"))
  @("nero",@("#1a1a1a","#2c2c2c","#404040"))
  @("emerald",@("#1a3a2a","#2a4a3a","#0a2a1a"))
  @("carrara",@("#f0ece5","#e5e0d8","#ddd5cc"))
  @("taj-mahal",@("#d8d0c4","#e0d8cc","#ccc4b8"))
  @("verde",@("#1a3a2a","#3a5a4a","#2a4a3a"))
  @("blue-pearl",@("#2a3a5a","#3a4a6a","#1a2a4a"))
  @("crema",@("#e8ddd0","#f0e8e0","#dcd0c0"))
  @("oniks-avokado",@("#3a6a3a","#4a7a4a","#2a5a2a"))
  @("giallo",@("#d4b04a","#e0c060","#c8a040"))
)

foreach ($kv in $cats.GetEnumerator()) {
  New-StoneSvg -Path "public/images/categories/$($kv.Key).svg" -Label $kv.Key -Colors $kv.Value
}
foreach ($kv in $srvs.GetEnumerator()) {
  New-StoneSvg -Path "public/images/services/$($kv.Key).svg" -Label $kv.Key -Colors $kv.Value
}
foreach ($p in $prods) {
  $base = $p[0]; $c = $p[1]
  for ($i = 1; $i -le 5; $i++) {
    $shifted = $c | ForEach-Object {
      $r = [math]::Clamp([int]("0x$($_[1..2] -join '')") + $i*6 - 12, 0, 255)
      $g = [math]::Clamp([int]("0x$($_[3..4] -join '')") + $i*4 - 8, 0, 255)
      $b = [math]::Clamp([int]("0x$($_[5..6] -join '')") + $i*5 - 10, 0, 255)
      "#{0:x2}{1:x2}{2:x2}" -f $r,$g,$b
    }
    New-StoneSvg -Path "public/images/products/$base-$i.svg" -Label "$base $i" -Colors $shifted
  }
}
