import { SparklesCore } from "@/modules/core/design-system/sparkles.tsx";

export function Particles() {
  return (
    (<div
      className="h-[40rem] w-full absolute flex flex-col items-center justify-center overflow-hidden rounded-md -z-10">


        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#cea472" />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>)
  );
}
