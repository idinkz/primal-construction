import HeroSlideshow from "@/components/HeroSlideshow";
import { HERO_IMAGES } from "@/content/images";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <HeroSlideshow images={HERO_IMAGES} />
    </div>
  );
}
