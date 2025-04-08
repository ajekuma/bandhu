export default function Hero() {
    return (
      <section className="text-center py-16 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Make Smarter Life Decisions</h1>
        <p className="text-lg mb-8 px-4 md:px-0 max-w-2xl mx-auto">
          Our smart assistant helps you decide whats next in your career, studies, or life path.
        </p>
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">
          <img
            src="/images/life-decision-hero.jpg"
            alt="Life Decision Support"
            className="w-full h-auto rounded-lg shadow-md"
          />
          </span>
        </div>
      </section>
    );
  }
  