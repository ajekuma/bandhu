// export default function Hero() {
//     return (
//       <section className="text-center py-16 bg-gray-50">
//         <h1 className="text-4xl font-bold mb-6">Make Smarter Life Decisions</h1>
//         <p className="text-lg mb-8 px-4 md:px-0 max-w-2xl mx-auto">
//           Our smart assistant helps you decide whats next in your career, studies, or life path.
//         </p>
//         <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
//           <span className="text-gray-500">
//           <img
//             src="/images/life-decision-hero.jpg"
//             alt="Life Decision Support"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//           </span>
//         </div>
//       </section>
//     );
//   }
  
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] mt-16">
      <Image
        src="/images/life-decision-hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Make Life’s Big Decisions With Confidence</h1>
      </div>
    </div>
  );
};

export default Hero;
