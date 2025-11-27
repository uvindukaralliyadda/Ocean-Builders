import planningImg from "@/assets/process-planning.jpg";
import designImg from "@/assets/process-design.jpg";
import constructionImg from "@/assets/process-construction.jpg";
import deliveryImg from "@/assets/process-delivery.jpg";

const processSteps = [
  {
    title: "Planning & Consultation",
    description: "We begin with comprehensive project planning and client consultation to understand your vision, requirements, and timeline. Our experienced team conducts thorough site assessments and feasibility studies.",
    image: planningImg
  },
  {
    title: "Design & Engineering",
    description: "Our expert engineers and architects develop detailed designs and technical specifications. We use advanced 3D modeling and simulation to ensure structural integrity and efficiency.",
    image: designImg
  },
  {
    title: "Construction Execution",
    description: "With precision and dedication, our skilled workforce brings the project to life. We maintain strict quality control and safety standards throughout every phase of construction.",
    image: constructionImg
  },
  {
    title: "Delivery & Support",
    description: "Upon completion, we conduct thorough inspections and handover the project. Our commitment continues with comprehensive post-construction support and maintenance services.",
    image: deliveryImg
  }
];

const Process = () => {
  return (
    <section
      id="process"
      className="py-20"
      style={{ backgroundColor: "#100C08", color: "#bfbfbf" }} 
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: "#bfbfbf" }}>
          Our Process
        </h2>

        <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: "#bfbfbf" }}>
          A systematic approach to delivering excellence at every stage
        </p>
        
        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="text-8xl font-bold text-white bg-white/10 rounded-full w-40 h-40 flex items-center justify-center">
                  0{index + 1}
                </div>

                <h3 className="text-3xl font-bold" style={{ color: "#bfbfbf" }}>
                  {step.title}
                </h3>

                <p className="leading-relaxed" style={{ color: "#bfbfbf" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
