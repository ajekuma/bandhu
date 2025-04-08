// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
// import Header from '../components/Header';
// import Hero from '../components/Hero';
// import FeatureSection from '../components/FeatureSection';
// import Footer from '../components/Footer';

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <div className="py-12 px-4 md:px-20">
//         <FeatureSection
//           title="Why Taking Right/Informed Decision is So Crucial?"
//           text="In today's fast-paced world, making informed decisions is more important than ever. Whether it's about your career, education, or personal life, the choices you make can have a lasting impact. Our AI-driven platform helps you navigate these decisions with confidence."
//         />
//         {/* <FeatureSection
//           title="Why Taking Right/Informed Decision is So Crucial?"
//           text="In today's fast-paced world, making informed decisions is more important than ever. Whether it's about your career, education, or personal life, the choices you make can have a lasting impact. Our AI-driven platform helps you navigate these decisions with confidence."
//         />
//         <FeatureSection
//           title="Why our support system is not the best advisor?"
//           text="While friends and family can offer valuable advice, they may not always have the expertise or objectivity needed to guide you through complex decisions. Bandhu combines data-driven insights with personalized support, ensuring you receive the best possible guidance."
//         />
//         <FeatureSection
//           title="How Bandhu Can Help You?"
//           text="Bandhu is your personal decision-making assistant. We leverage advanced AI algorithms to analyze your unique situation and provide tailored recommendations. Our platform is designed to empower you with the insights you need to make the best decision for your future."
//         /> */}
//       </div>
//       <Footer />
//     </>
//   );
// }

// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="py-12 px-4 md:px-20">
        <FeatureSection
          title="Why Taking Right/Informed Decision is So Crucial?"
          text="In today's fast-paced world, making informed decisions is more important than ever. Whether it's about your career, education, or personal life, the choices you make can have a lasting impact. Our AI-driven platform helps you navigate these decisions with confidence."
          image="../images/life-decision-hero.jpg"
          alt="Career Decision"
        />
        <FeatureSection
          title="Why your support system is not the best advisor?"
          text="While friends and family can offer valuable advice, they may not always have the expertise or objectivity needed to guide you through complex decisions. Bandhu combines data-driven insights with personalized support, ensuring you receive the best possible guidance."
          image="images/career-growth.jpg"
          alt="Support System"
        />
        <FeatureSection
          title="How Bandhu Can Help You?"
          text="Bandhu is your personal decision-making assistant. We leverage advanced AI algorithms to analyze your unique situation and provide tailored recommendations. Our platform is designed to empower you with the insights you need to make the best decision for your future."
          image="/images/career-growth.jpg"
          alt="Bandhu Assist"
        />
      </div>
      <Footer />
    </>
  );
}

