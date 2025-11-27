import buildingImg from "@/assets/expertise-building.jpg";
import highwayImg from "@/assets/expertise-highway.jpg";
import bridgeImg from "@/assets/expertise-bridge.jpg";
import waterImg from "@/assets/expertise-water.jpg";
import irrigationImg from "@/assets/expertise-irrigation.jpg";

const expertiseItems = [
  {
    title: "Building Construction",
    image: buildingImg
  },
  {
    title: "Highway Construction",
    image: highwayImg
  },
  {
    title: "Bridge Construction",
    image: bridgeImg
  },
  {
    title: "Water Supply and Sewerage",
    image: waterImg
  },
  {
    title: "Irrigation and Drainage Canals",
    image: irrigationImg
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20" style={{ backgroundColor: "#100C08" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Our Expertise
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Comprehensive construction solutions across multiple sectors
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => (
            <div 
              key={index}
              className="group relative h-80 overflow-hidden rounded-lg cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
