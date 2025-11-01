const prompt =
  [
    "Ultra-detailed cinematic aerial shot of a sleek private jet gliding above an ancient Japanese mountain village",
    "late autumn dusk with soft amber sunlight spilling over terraced rooftops",
    "mist weaving through cedar forests and stone pathways",
    "paper lanterns glowing warm amber against indigo shadows",
    "village architecture blending Edo-period wooden homes, curved tiled roofs, and narrow winding alleys",
    "jet polished white and chrome, reflecting the patterned fields and distant snow-dusted peaks",
    "vibrant kimono fabrics drying on bamboo lines, koi ponds shimmering below",
    "rich texture, volumetric lighting, 85mm lens depth, hyperrealistic atmosphere",
    "mood is tranquil yet awe-inspiring, balancing cutting-edge luxury with timeless heritage"
  ].join(", ");

export default function Page() {
  return (
    <main className="page">
      <section className="card">
        <h1>Imagery Prompt</h1>
        <p className="description">
          Use this crafted prompt to generate an evocative visual of a private jet
          flying over an old Japanese village.
        </p>
        <pre>{prompt}</pre>
      </section>
    </main>
  );
}
