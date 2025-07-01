import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioGrid from './components/PortfolioGrid';
import ContactPage from './components/ContactPage';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import './App.css';

// Sample project data with placeholder images and videos
const projects = [
  {
    id: 1,
    title: 'The Last Journey',
    category: 'Feature Films',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    isVideo: false,
    director: 'Sarah Johnson',
    year: '2023'
  },
  {
    id: 2,
    title: 'Neon Dreams',
    category: 'Music Videos',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    isVideo: true,
    director: 'Michael Chen',
    year: '2023'
  },
  {
    id: 3,
    title: 'Urban Legends',
    category: 'TV/Episodic',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    isVideo: true,
    director: 'Elena Rodriguez',
    year: '2022'
  },
  {
    id: 4,
    title: 'Luxury Redefined',
    category: 'Commercials',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    isVideo: true,
    client: 'Premium Motors',
    year: '2023'
  },
  {
    id: 5,
    title: 'Echoes',
    category: 'Short Films',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    isVideo: false,
    director: 'Thomas Wright',
    year: '2022'
  },
  {
    id: 6,
    title: 'Boundless',
    category: 'Feature Films',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    isVideo: true,
    director: 'Olivia Park',
    year: '2021'
  },
  {
    id: 7,
    title: 'Rhythm & Blues',
    category: 'Music Videos',
    imageUrl: 'https://picsum.photos/800/600?random=7',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    isVideo: true,
    director: 'James Wilson',
    year: '2023'
  },
  {
    id: 8,
    title: 'Timeless',
    category: 'Commercials',
    imageUrl: 'https://picsum.photos/800/600?random=8',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    isVideo: false,
    client: 'Luxury Watches Inc.',
    year: '2022'
  },
  {
    id: 9,
    title: 'Shadows',
    category: 'Short Films',
    imageUrl: 'https://picsum.photos/800/600?random=9',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    isVideo: true,
    director: 'Natalie Kim',
    year: '2023'
  },
  {
    id: 10,
    title: 'Midnight Express',
    category: 'Feature Films',
    imageUrl: 'https://picsum.photos/800/600?random=10',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    isVideo: false,
    director: 'Marcus Rivera',
    year: '2024'
  },
  {
    id: 11,
    title: 'Electric Vibes',
    category: 'Music Videos',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    isVideo: true,
    director: 'Zoe Martinez',
    year: '2024'
  },
  {
    id: 12,
    title: 'City Lights',
    category: 'Commercials',
    imageUrl: 'https://picsum.photos/800/600?random=12',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    isVideo: true,
    client: 'Urban Fashion Co.',
    year: '2024'
  },
  {
    id: 13,
    title: 'The Detective',
    category: 'TV/Episodic',
    imageUrl: 'https://picsum.photos/800/600?random=13',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    isVideo: false,
    director: 'Amanda Foster',
    year: '2023'
  },
  {
    id: 14,
    title: 'Solitude',
    category: 'Short Films',
    imageUrl: 'https://picsum.photos/800/600?random=14',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    isVideo: true,
    director: 'David Kim',
    year: '2024'
  },
  {
    id: 15,
    title: 'Ocean Dreams',
    category: 'Feature Films',
    imageUrl: 'https://picsum.photos/800/600?random=15',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    isVideo: false,
    director: 'Isabella Santos',
    year: '2023'
  },
  {
    id: 16,
    title: 'Pulse',
    category: 'Music Videos',
    imageUrl: 'https://picsum.photos/800/600?random=16',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    isVideo: true,
    director: 'Ryan Thompson',
    year: '2024'
  },
  {
    id: 17,
    title: 'Heritage',
    category: 'Commercials',
    imageUrl: 'https://picsum.photos/800/600?random=17',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    isVideo: false,
    client: 'Classic Automobiles',
    year: '2023'
  },
  {
    id: 18,
    title: 'Memories',
    category: 'Short Films',
    imageUrl: 'https://picsum.photos/800/600?random=18',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    isVideo: true,
    director: 'Sophie Chen',
    year: '2024'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection name="ALEX MILLER" title="FILM COLORIST" />
      </section>
      
      {/* Portfolio Section */}
      <section id="work" className="py-16">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-4">PORTFOLIO</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Explore my latest color grading work across feature films, commercials, music videos, and more.
          </p>
        </div>
        <PortfolioGrid projects={projects} />
      </section>
      
      {/* Instagram Section */}
      <section id="instagram" className="py-16 bg-[#1a1a1a]">
        <InstagramSection />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16">
        <ContactPage />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;