// export default function FeatureSection({ title, text }: { title: string, text: string }) {
//     return (
//       // <div className="mb-12 text-center">
//       //   <div className="w-full h-48 bg-gray-200 mb-4 mx-auto max-w-md flex items-center justify-center">
//       //     <span className="text-gray-500">
//       //       <img
//       //         src="../images/career-growth.jpg"
//       //         alt="Career Growth"
//       //         className="w-32 h-32 object-cover mb-4"
//       //       />
//       //     </span>
//       //   </div>
//       //   <h2 className="text-2xl font-semibold mb-2">{title}</h2>
//       //   <p className="max-w-xl mx-auto text-gray-100">{text}</p>
//       // </div>

//       <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="text-center">
//           <img src="../images/career-growth.jpg" alt="Career Growth" className="mx-auto mb-4 w-full h-48 object-cover rounded-md" />
//           <h3 className="text-lg font-semibold mb-2">Why Taking Right/Informed Decision is So Crucial?</h3>
//           <p className="text-gray-300">In todays fast-paced world, making informed decisions is more important than ever. Whether its about your career, education, or personal life, the choices you make can have a lasting impact. Our AI-driven platform helps you navigate these decisions with confidence.</p>
//         </div>
//         <div className="text-center">
//           <img src="../images/career-growth.jpg" alt="Job Change" className="mx-auto mb-4 w-full h-48 object-cover rounded-md" />
//           <h3 className="text-lg font-semibold mb-2">Why our support system is not the best advisor?"</h3>
//           <p className="text-gray-300">While friends and family can offer valuable advice, they may not always have the expertise or objectivity needed to guide you through complex decisions. Bandhu combines data-driven insights with personalized support, ensuring you receive the best possible guidance.</p>
//         </div>
//         <div className="text-center">
//           <img src="../images/life-decision-hero.jpg" alt="Further Studies" className="mx-auto mb-4 w-full h-48 object-cover rounded-md" />
//           <h3 className="text-lg font-semibold mb-2">How Bandhu Can Help You?</h3>
//           <p className="text-gray-300">Bandhu is your personal decision-making assistant. We leverage advanced AI algorithms to analyze your unique situation and provide tailored recommendations. Our platform is designed to empower you with the insights you need to make the best decision for your future.</p>
//         </div>
//       </div>
//       </div>

//     );
//   }
  
import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  text: string;
  image: string;
  alt: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, text, image, alt }) => {
  return (
    <div className="mb-12 text-center">
      <div className="w-full h-48 bg-gray-200 mb-4 mx-auto max-w-md flex items-center justify-center">
        <div className="relative w-32 h-32 mb-4 rounded overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="max-w-xl mx-auto text-gray-600">{text}</p>
    </div>
  );
};

export default FeatureSection;
