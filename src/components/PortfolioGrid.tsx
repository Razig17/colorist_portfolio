import { useState } from 'react';

// Loading skeleton component
const ImageSkeleton = () => (
  <div className="w-full h-64 md:h-80 bg-gray-800 animate-pulse rounded-lg"></div>
);

// Video Modal Component
const VideoModal = ({ project, isOpen, onClose }: { 
  project: Project | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-[#00e5ff] text-2xl z-10"
        >
          ✕
        </button>
        
        <video 
          className="w-full max-h-[90vh] object-contain rounded-lg"
          controls
          autoPlay
          onLoadedData={(e) => {
            const video = e.target as HTMLVideoElement;
            video.play();
          }}
        >
          <source src={project.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  isVideo?: boolean;
  client?: string;
  director?: string;
  year?: string;
};

type CategoryCount = {
  [key: string]: number;
};

type PortfolioGridProps = {
  projects: Project[];
};

const PortfolioGrid = ({ projects }: PortfolioGridProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openVideoModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeVideoModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  
  // Calculate category counts
  const categoryCounts: CategoryCount = projects.reduce((counts, project) => {
    counts[project.category] = (counts[project.category] || 0) + 1;
    return counts;
  }, { 'All': projects.length } as CategoryCount);
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  
  // Filter projects by active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === category 
                ? 'bg-[#00e5ff] text-[#121212] font-medium' 
                : 'bg-[#1e1e1e] text-white hover:bg-[#2a2a2a]'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} {categoryCounts[category] && `${categoryCounts[category]}`}
          </button>
        ))}
      </div>
      
      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredProjects.length === 0 && (
          // Show skeletons when there are no projects to display
          <>
            <ImageSkeleton />
            <ImageSkeleton />
            <ImageSkeleton />
            <ImageSkeleton />
          </>
        )}
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className="relative overflow-hidden group rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => {
              if (project.isVideo) {
                openVideoModal(project);
              }
            }}
          >
            {project.isVideo ? (
              <video 
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                muted
                loop
                onMouseEnter={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.pause();
                  video.currentTime = 0;
                }}
                poster={project.imageUrl}
              >
                <source src={project.videoUrl} type="video/mp4" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </video>
            ) : (
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/800x600/333333/ffffff?text=${encodeURIComponent(project.title)}`;
                }}
              />
            )}
            
            {/* Video/Image Indicator */}
            <div className="absolute top-3 right-3">
              {project.isVideo ? (
                <div className="bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                  VIDEO
                </div>
              ) : (
                <div className="bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                  </svg>
                  IMAGE
                </div>
              )}
            </div>
            
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-medium">{project.title}</h3>
                {project.director && (
                  <p className="text-gray-300 text-sm">Dir: {project.director}</p>
                )}
                {project.client && (
                  <p className="text-gray-300 text-sm">Client: {project.client}</p>
                )}
                {project.year && (
                  <p className="text-gray-400 text-xs">{project.year}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeVideoModal} 
      />
    </div>
  );
};

export default PortfolioGrid;
