import React, { useEffect, useRef, useState } from 'react';

const Workflow = () => {
  const containerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  const allSteps = [
    {
      number: "1",
      title: "Discover",
      description: "We begin by understanding your brand, goals, and audience in detail.",
      subtitle: "This helps us build a strong foundation for everything that follows"
    },
    {
      number: "2", 
      title: "Strategize",
      description: "Using insights and data, we craft a tailored marketing strategy.",
      subtitle: "Every idea and action is planned with purpose and impact in mind."
    },
    {
      number: "3",
      title: "Create", 
      description: "Our creative team brings the strategy to life with content, design, and campaigns that stop the scroll and spark interest.",
      subtitle: ""
    },
    {
      number: "4",
      title: "Execute",
      description: "We implement and launch campaigns across all relevant channels with precision timing.",
      subtitle: "Each touchpoint is optimized for maximum engagement and conversion."
    },
    {
      number: "5",
      title: "Analyze",
      description: "We track performance metrics and gather insights to continuously improve results.",
      subtitle: "Data-driven decisions ensure your campaigns evolve and improve over time."
    }
  ];

  const visibleSteps = allSteps.slice(currentStep, currentStep + 3);

  useEffect(() => {
    // Load GSAP from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      script2.onload = () => {
        window.gsap.registerPlugin(window.ScrollTrigger);
        
        const elements = containerRef.current.querySelectorAll('.animate-text');
        
        elements.forEach((el, i) => {
          window.gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: i * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none reset',
              },
            }
          );
        });
      };
      document.head.appendChild(script2);
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleNext = () => {
    if (currentStep < allSteps.length - 3) {
      // Animate out (slide up)
      if (window.gsap) {
        const stepsContainer = containerRef.current.querySelector('.steps-container');
        window.gsap.to(stepsContainer, {
          opacity: 0,
          y: -50,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            setCurrentStep(currentStep + 1);
            // Animate in (slide up from bottom)
            window.gsap.fromTo(stepsContainer, 
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
          }
        });
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      // Animate out (slide down)
      if (window.gsap) {
        const stepsContainer = containerRef.current.querySelector('.steps-container');
        window.gsap.to(stepsContainer, {
          opacity: 0,
          y: 50,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            setCurrentStep(currentStep - 1);
            // Animate in (slide down from top)
            window.gsap.fromTo(stepsContainer, 
              { opacity: 0, y: -50 },
              { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
          }
        });
      } else {
        setCurrentStep(currentStep - 1);
      }
    }
  };

  return (
    <section ref={containerRef} className="bg-white py-16 px-6 text-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 animate-text">
            From Idea to Impact: Our<br />Workflow
          </h2>
          <div className="inline-block px-4 py-2 border border-blue-500 rounded-full text-blue-500 text-sm animate-text">
            Services
          </div>
        </div>

       

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
         {/* Left Side - Image Background */}
<div className="lg:w-1/2 animate-text">
  <div
    className="w-full h-96 rounded-2xl bg-cover bg-center relative"

  >
    <div className="absolute inset-0 bg-opacity-30 rounded-2xl  h-[75vh] w-[30vw]"   style={{ backgroundImage: "url('src/images/workflow1.jpg')" }}></div>
  </div>
</div>


          {/* Right Side - Steps */}
          <div className="lg:w-1/2 relative">
            <div className="steps-container">
              {visibleSteps.map((step, index) => (
                <div 
                  key={`${currentStep}-${index}`}
                  className="flex items-start mb-8 animate-text"
                >
                  {/* Step Number */}
                  <div className="mr-8 flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      {step.description}
                    </p>
                    {step.subtitle && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrow */}
            <div className="absolute bottom-0 right-0">
              <div className="flex flex-col gap-2">
                <button 
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep === 0 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <svg className="w-5 h-5 rotate-[-90deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  disabled={currentStep >= allSteps.length - 3}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= allSteps.length - 3 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;