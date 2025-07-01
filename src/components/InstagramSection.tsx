import { useState } from 'react';

type InstagramPost = {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  timestamp: string;
};

const InstagramSection = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  // Mock Instagram posts - no real API integration
  const instagramPosts: InstagramPost[] = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop',
      caption: 'Color grading magic in progress ✨ Working on this beautiful short film with incredible cinematography. #colorgrading #cinematography #filmmaking',
      likes: 247,
      timestamp: '2024-01-20T10:30:00Z'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=400&fit=crop',
      caption: 'Behind the scenes at our color suite. Nothing beats the feeling of bringing a directors vision to life through color. #bts #colorist #postproduction',
      likes: 189,
      timestamp: '2024-01-18T15:45:00Z'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=400&fit=crop',
      caption: 'Before and after from todays session. Sometimes the smallest adjustments make the biggest impact. #beforeandafter #colorgrading #filmmagic',
      likes: 312,
      timestamp: '2024-01-15T12:20:00Z'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=400&h=400&fit=crop',
      caption: 'Working late into the night on this music video. The artist wanted something bold and otherworldly. #musicvideo #colorgrading #latenight',
      likes: 156,
      timestamp: '2024-01-12T22:30:00Z'
    },
    {
      id: '5',
      imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
      caption: 'New DaVinci Resolve setup is dialed in perfectly! The HDR workflow possibilities are endless. #davinciresolve #hdr #colorgrading',
      likes: 421,
      timestamp: '2024-01-10T09:15:00Z'
    },
    {
      id: '6',
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
      caption: 'Collaborating with amazing directors always leads to incredible results. When the cinematography and color work together... pure magic ✨ #collaboration #featurefilm',
      likes: 278,
      timestamp: '2024-01-08T16:40:00Z'
    },
    {
      id: '7',
      imageUrl: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=400&fit=crop',
      caption: 'Client loved the final grade on this commercial. When the brand colors pop just right... thats the sweet spot! #commercial #brandcolors #colorgrading',
      likes: 193,
      timestamp: '2024-01-05T14:22:00Z'
    },
    {
      id: '8',
      imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=400&fit=crop',
      caption: 'Documentary work requires a different approach to color. Truth in storytelling through authentic color palettes. #documentary #storytelling #authentic',
      likes: 165,
      timestamp: '2024-01-03T11:15:00Z'
    },
    {
      id: '9',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      caption: 'Sunset shots are always challenging but so rewarding when you nail the grade. Golden hour magic preserved forever. #goldenhour #sunset #cinematography',
      likes: 334,
      timestamp: '2024-01-01T18:45:00Z'
    }
  ];

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 3, instagramPosts.length));
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <svg className="w-8 h-8 text-[#00e5ff]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          INSTAGRAM
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Follow my journey behind the scenes. From color grading sessions to creative insights, 
          get an inside look at the art of film color grading inspired by top industry professionals.
        </p>
        <a 
          href="https://instagram.com/instagram" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-[#00e5ff] hover:text-white transition-colors"
        >
          @instagram
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instagramPosts.slice(0, visiblePosts).map(post => (
          <div 
            key={post.id}
            className="group relative bg-[#1e1e1e] rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => window.open(`https://instagram.com/p/${post.id}_colorist_post`, '_blank')}
          >
            <div className="relative overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt="Instagram post"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Instagram overlay icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black bg-opacity-60 text-white p-2 rounded-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-300 text-sm">{post.likes}</span>
                </div>
                <span className="text-gray-500 text-xs">{formatDate(post.timestamp)}</span>
              </div>
              
              <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {visiblePosts < instagramPosts.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMorePosts}
            className="bg-[#00e5ff] text-black px-8 py-3 rounded-full font-medium hover:bg-[#00d4e6] transition-colors flex items-center gap-2 mx-auto"
          >
            Load More Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default InstagramSection;
