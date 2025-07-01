type HeroSectionProps = {
  name: string;
  title: string;
};

const HeroSection = ({ name, title }: HeroSectionProps) => {
  return (
    <div className="w-full h-[60vh] flex flex-col justify-center items-center bg-gradient-to-b from-[#121212] to-[#1a1a1a]">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">
        {name}
      </h1>
      <h2 className="text-xl md:text-2xl text-[#00e5ff] font-light tracking-wider text-center">
        {title}
      </h2>
    </div>
  );
};

export default HeroSection;
