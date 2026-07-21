const UNSPLASH = "https://images.unsplash.com/photo-";
const PARAMS = "?auto=format&fit=crop&w=2000&q=80";

export const img = (id: string, w = 2000, q = 80) =>
  `${UNSPLASH}${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const HERO_IMAGES = [
  img("1600210492486-724fe5c67fb0"),
  img("1600585154340-be6161a56a0c"),
  img("1512917774080-9991f1c4c750"),
  img("1600566753190-17f0baa2a6c3"),
  img("1600607687939-ce8a6c25118c"),
  img("1600573472550-8090b5e0745e"),
];

export { UNSPLASH, PARAMS };
