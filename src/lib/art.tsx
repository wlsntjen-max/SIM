// Procedural Botanical & Forest Art for "Social Is Me - Roots of Change"
// Deterministic SVG generation identical to PHP includes/art.php

/** Simple seedable PRNG (Mulberry32) for deterministic rendering across SSR and client */
export function createRNG(seed: number) {
  let s = seed >>> 0;
  return function next() {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function generateForestLayer(
  seed: number,
  n: number,
  fill: string,
  minH = 0.45,
  maxH = 0.95,
  vis = 1.0
): string {
  const rng = createRNG(seed);
  const w = 1440;
  const h = 600;

  let out = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMax slice" fill="${fill}" xmlns="http://www.w3.org/2000/svg">`;
  // bukit dasar bergelombang
  out += `<path d="M0 ${h}V${h * 0.86}C200 ${h * 0.8} 380 ${h * 0.9} 620 ${
    h * 0.84
  }S1100 ${h * 0.78} 1440 ${h * 0.87}V${h}z"/>`;

  for (let i = 0; i < n; i++) {
    const x = (i + (rng() * 70 + 15) / 100) * (w / n);
    const th = h * 0.72 * (minH + rng() * (maxH - minH));
    const base = h * 0.9;
    const cr = 44 + rng() * 46;
    const top = Math.max(base - th, h * (1 - vis) + cr + 24);
    const tw = 5 + rng() * 6;

    // batang
    out += `<path d="M${(x - tw).toFixed(1)} ${base}L${(x - tw / 2).toFixed(
      1
    )} ${(top + 40).toFixed(1)}L${(x + tw / 2).toFixed(1)} ${(
      top + 40
    ).toFixed(1)}L${(x + tw).toFixed(1)} ${base}z"/>`;

    // tajuk: gugusan elips bertumpuk
    const blobs = Math.floor(rng() * 3) + 4;
    for (let b = 0; b < blobs; b++) {
      const bx = x + (rng() * 2 - 1) * cr * 0.9;
      const by = top + (rng() * 66 - 20);
      const rx = cr * (0.55 + rng() * 0.45);
      const ry = rx * (0.62 + rng() * 0.25);
      out += `<ellipse cx="${bx.toFixed(1)}" cy="${by.toFixed(
        1
      )}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}"/>`;
    }
  }

  out += `</svg>`;
  return out;
}

/** Precomputed SVG strings for hero layers so they match PHP exactly */
export const HERO_LAYER_1 = generateForestLayer(11, 9, "#2a5a43", 0.55, 1.0);
export const HERO_LAYER_2 = generateForestLayer(23, 7, "#1b4635", 0.5, 0.95, 0.97);
export const HERO_LAYER_3 = generateForestLayer(37, 5, "#0f2a22", 0.4, 0.9, 0.72);

/** Daun-daun dekoratif (untuk latar bagian gelap / hero dalam) */
export function LeavesArt({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M40 380C60 260 140 150 300 80" />
      <g fill="currentColor" fillOpacity="0.5" stroke="none">
        <path d="M96 300C70 270 80 230 120 215c10 38 0 68-24 85z" />
        <path d="M130 250c-20-34-8-72 32-90 12 36 4 68-32 90z" />
        <path d="M178 200c-14-34 2-66 42-76 6 36-6 62-42 76z" />
        <path d="M232 150c-8-32 10-60 50-64 0 34-14 54-50 64z" />
        <path d="M108 320c34-4 62 12 74 48-36 8-64-8-74-48z" />
        <path d="M150 270c32 0 56 18 64 50-34 6-58-12-64-50z" />
        <path d="M200 222c30 2 52 20 58 52-32 4-54-14-58-52z" />
      </g>
    </svg>
  );
}

/** Lengkung / gerbang hutan untuk blok pengantar */
export function ArchForest({ className = "" }: { className?: string } = {}) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a7d5a" />
          <stop offset="0.55" stopColor="#2a5a43" />
          <stop offset="1" stopColor="#173D32" />
        </linearGradient>
        <radialGradient id="ar" cx="0.7" cy="0.12" r="0.6">
          <stop offset="0" stopColor="#f3dfa0" stopOpacity="0.9" />
          <stop offset="1" stopColor="#f3dfa0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#ag)" />
      <rect width="400" height="500" fill="url(#ar)" />
      <g fill="#123127" opacity="0.75">
        <path d="M0 500V300c30-50 60-60 90-20 30 40 50 10 80-30 30-40 70-20 90 20 20 40 60 30 80-10 20-30 40-20 60 10v230z" />
      </g>
      <g fill="#0e261e">
        <path d="M0 500V380c40-30 80-30 120 0s90 30 130-10 90-10 150 20v110z" />
        <path
          d="M70 500V250M70 330l-34-34M70 300l30-30M70 360l32-26"
          stroke="#0e261e"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M320 500V270M320 340l-30-30M320 310l28-28"
          stroke="#0e261e"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
      <g fill="#0e261e">
        <ellipse cx="70" cy="238" rx="54" ry="34" />
        <ellipse cx="36" cy="270" rx="34" ry="22" />
        <ellipse cx="104" cy="262" rx="36" ry="22" />
        <ellipse cx="320" cy="258" rx="50" ry="32" />
        <ellipse cx="290" cy="290" rx="32" ry="20" />
        <ellipse cx="350" cy="286" rx="32" ry="20" />
      </g>
      <g stroke="#d5c49a" strokeOpacity="0.4" strokeWidth="1" fill="none">
        <path d="M0 470c60-14 120-6 190 8s130 6 210-14" />
      </g>
    </svg>
  );
}

/** Benih yang tumbuh (untuk "Coming Soon") */
export function SeedArt({ className = "" }: { className?: string } = {}) {
  return (
    <svg
      className={className}
      viewBox="0 0 68 68"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M34 62V32" />
      <path
        d="M34 36c0-10 7-17 20-17 0 10-7 17-20 17z"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <path
        d="M34 44c0-8-6-13-17-13 0 8 6 13 17 13z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path d="M22 62c4-4 8-5 12-5s8 1 12 5" />
    </svg>
  );
}

/** Logo Mark resmi Social Is Me */
export function LogoMark({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Social Is Me Logo"
      width={size}
      height={size}
      className={`logo-mark object-contain rounded-full shrink-0 shadow-sm ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}

/** Pembatas organik antar bagian (tepi bergelombang / kanopi daun) */
export function Divider({
  type = "cream-dark",
  flip = false,
}: {
  type?: "cream-dark" | "dark-cream" | "dark-cream2" | "cream2-dark" | "top-cream";
  flip?: boolean;
}) {
  return (
    <div className={`edge edge--${type}${flip ? " edge--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path d="M0 90V52C80 20 150 6 240 22c92 17 140 54 240 52 110-2 150-52 262-56 106-4 148 40 262 46 110 5 170-38 276-40 70-1 124 16 160 30V90H0z" />
      </svg>
    </div>
  );
}

/** Sampul botani bila tidak ada foto */
export function CoverArt({
  tone = "moss",
}: {
  tone?: "moss" | "clay" | "sand";
}) {
  return (
    <div className={`cover-art cover-art--${tone}`} aria-hidden="true">
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <g className="cover-art__leaves" fill="currentColor">
          <path
            d="M60 300C60 190 120 120 250 100 250 220 190 290 60 300z"
            opacity="0.16"
          />
          <path
            d="M200 300C200 220 250 160 360 150 360 240 310 292 200 300z"
            opacity="0.12"
          />
          <path
            d="M-20 260C-10 190 40 150 120 140 120 210 80 255 -20 260z"
            opacity="0.1"
          />
        </g>
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25">
          <path d="M60 300C100 220 160 160 250 100" />
          <path d="M200 300C240 240 290 190 360 150" />
        </g>
        <circle cx="318" cy="70" r="34" fill="currentColor" opacity="0.08" />
        <circle cx="318" cy="70" r="18" fill="currentColor" opacity="0.1" />
      </svg>
    </div>
  );
}

/** Peta hutan Journey: sungai, jalan setapak, padang terbuka, pohon bergoyang */
export function ForestMapBackground({
  divisions = [],
}: {
  divisions?: { mapX: number; mapY: number; id: number }[];
}) {
  const W = 1000;
  const H = 625;
  const cx = 500;
  const cy = 294;

  const rng = createRNG(77);

  // Generate 70 deterministic trees
  const trees: {
    x: number;
    y: number;
    r: number;
    col: string;
    d: string;
  }[] = [];

  for (let i = 0; i < 70; i++) {
    const x = Math.floor(rng() * 980) + 10;
    const y = Math.floor(rng() * 570) + 30;

    let near = false;
    for (const d of divisions) {
      if (Math.hypot(x - d.mapX * 10, y - d.mapY * 6.25) < 70) {
        near = true;
        break;
      }
    }
    if (near || Math.hypot(x - cx, y - cy) < 100) {
      continue;
    }

    const r = Math.floor(rng() * 14) + 14;
    const cols = ["#1a4232", "#24523d", "#2d634a", "#35705a"];
    const col = cols[Math.floor(rng() * cols.length)];
    const d = (4 + rng() * 4).toFixed(1);
    trees.push({ x, y, r, col, d });
  }

  return (
    <svg
      className="forest-map__bg"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="fm-g" cx="0.5" cy="0.5" r="0.75">
          <stop offset="0" stopColor="#2f6048" />
          <stop offset="0.7" stopColor="#1f4a38" />
          <stop offset="1" stopColor="#143428" />
        </radialGradient>
        <radialGradient id="fm-clear" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e9dfae" stopOpacity="0.55" />
          <stop offset="1" stopColor="#e9dfae" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fm-river" x1="0" x2="1">
          <stop offset="0" stopColor="#6fa9a3" />
          <stop offset="1" stopColor="#4b8d8c" />
        </linearGradient>
      </defs>

      <rect width={W} height={H} fill="url(#fm-g)" />

      {/* sungai berkelok - dasar dan badan air */}
      <path
        d="M-20 190C120 150 200 260 330 250S520 150 620 215 800 360 1020 330"
        fill="none"
        stroke="#0d241c"
        strokeOpacity="0.45"
        strokeWidth="42"
        strokeLinecap="round"
      />
      <path
        d="M-20 190C120 150 200 260 330 250S520 150 620 215 800 360 1020 330"
        fill="none"
        stroke="url(#fm-river)"
        strokeWidth="28"
        strokeLinecap="round"
        opacity="0.95"
      />
      {/* Aliran air sungai bergerak 1 */}
      <path
        className="river-flow"
        d="M-20 190C120 150 200 260 330 250S520 150 620 215 800 360 1020 330"
        fill="none"
        stroke="#8ee2d6"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Aliran air sungai bergerak 2 (riak gelombang) */}
      <path
        className="river-flow-secondary"
        d="M-20 190C120 150 200 260 330 250S520 150 620 215 800 360 1020 330"
        fill="none"
        stroke="#bdf6ee"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.65"
      />
      {/* Buih air mengalir */}
      <path
        className="river-flow-foam"
        d="M-20 190C120 150 200 260 330 250S520 150 620 215 800 360 1020 330"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* padang terbuka (tengah) untuk BPH */}
      <ellipse cx="500" cy="294" rx="130" ry="86" fill="url(#fm-clear)" />

      {/* jalan setapak organik menuju tiap divisi dengan efek aliran energi */}
      {divisions.map((d) => {
        const x = d.mapX * 10;
        const y = d.mapY * 6.25;
        if (Math.abs(x - cx) < 8 && Math.abs(y - cy) < 8) return null;
        const mx = (x + cx) / 2 + (y - cy) * 0.12;
        const my = (y + cy) / 2 - (x - cx) * 0.12;
        const dPath = `M${cx} ${cy} Q${Math.round(mx)} ${Math.round(my)} ${Math.round(x)} ${Math.round(y)}`;
        return (
          <g key={d.id}>
            {/* Garis dasar */}
            <path
              d={dPath}
              fill="none"
              stroke="#D5C49A"
              strokeOpacity="0.3"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Garis aliran energi berdenyut */}
            <path
              className="path-line"
              d={dPath}
              fill="none"
              stroke="#FFF3D4"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        );
      })}

      {/* 70 pohon bergoyang sebar acak */}
      {trees.map((t, idx) => (
        <g
          key={idx}
          className="tree-sway"
          style={{ ["--d" as any]: `${t.d}s` }}
        >
          <rect
            x={t.x - 1.5}
            y={t.y}
            width={3}
            height={t.r * 0.7}
            fill="#0e261e"
          />
          <circle cx={t.x} cy={t.y - 2} r={t.r} fill={t.col} />
          <circle
            cx={t.x - t.r * 0.3}
            cy={t.y - t.r * 0.35}
            r={Math.round(t.r * 0.5)}
            fill="#fff"
            opacity="0.06"
          />
        </g>
      ))}
    </svg>
  );
}

/** Titik-titik yang saling terhubung (hiasan hero halaman dalam / slider) */
export function NetArt({ className = "" }: { className?: string } = {}) {
  const pts = [
    [70, 300],
    [150, 180],
    [250, 250],
    [330, 110],
    [300, 340],
    [200, 70],
    [90, 90],
  ];
  const lines = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [1, 5],
    [5, 3],
    [1, 6],
    [0, 2],
  ];
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      {lines.map(([a, b], idx) => (
        <path
          key={idx}
          d={`M${pts[a][0]} ${pts[a][1]}L${pts[b][0]} ${pts[b][1]}`}
          strokeDasharray="3 7"
        />
      ))}
      {pts.map(([x, y], idx) => (
        <circle
          key={idx}
          cx={x}
          cy={y}
          r={6 + (idx % 3) * 5}
          fill="currentColor"
          fillOpacity={0.35}
        />
      ))}
    </svg>
  );
}
