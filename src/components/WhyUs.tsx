import qualityImg from "@/assets/why-quality.jpg";
import safetyImg from "@/assets/why-safety.jpg";
import innovationImg from "@/assets/why-innovation.jpg";
import trustImg from "@/assets/why-trust.jpg";

const reasons = [
  {
    title: "Uncompromising Quality",
    description:
      "We maintain the highest standards in every aspect of construction, using premium materials and proven methodologies.",
    image: qualityImg,
  },
  {
    title: "Safety First Culture",
    description:
      "Our comprehensive safety protocols and training programs ensure zero-compromise protection for our workforce and stakeholders.",
    image: safetyImg,
  },
  {
    title: "Innovation & Technology",
    description:
      "We leverage cutting-edge construction technology and modern equipment to deliver efficient, sustainable solutions.",
    image: innovationImg,
  },
  {
    title: "Trust & Reliability",
    description:
      "Our proven track record and transparent communication build lasting partnerships with clients across all sectors.",
    image: trustImg,
  },
];

const WhyUs = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#100C08", color: "#ffffff" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Why Choose Us
        </h2>
        <p className="text-center opacity-80 mb-12 max-w-2xl mx-auto">
          The advantages that set us apart in the construction industry
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#1a1714]"
            >
              <img
                src={reason.image}
                alt={reason.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                <p className="opacity-80 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
