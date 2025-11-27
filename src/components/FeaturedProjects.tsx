import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const projects = [
  {
    name: "Riverside Residential Complex",
    image: project1
  },
  {
    name: "Corporate Business Tower",
    image: project2
  },
  {
    name: "Metropolitan Highway Interchange",
    image: project3
  },
  {
    name: "Central City Bridge",
    image: project4
  },
  {
    name: "Municipal Water Treatment Facility",
    image: project5
  },
  {
    name: "Regional Irrigation System",
    image: project6
  }
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing our commitment to excellence through completed works
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative h-72 overflow-hidden rounded-lg cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <h3 className="text-xl font-semibold text-primary-foreground p-6">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;