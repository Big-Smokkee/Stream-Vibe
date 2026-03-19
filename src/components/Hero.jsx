import React, { use } from 'react';
import playIcon from '../assets/hero-section-logo.png'; // Tumi jeita export korso

const Hero = ({ movieDataPromise }) => {
    const movieData = use(movieDataPromise);
    return (
        <section className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden">

            {/* --- Background Grid (The Magic Part) --- */}
            <div className="absolute inset-0 -z-10 grid grid-cols-4 md:grid-cols-8 gap-2 opacity-30">
                {/* Ekhane tumi 20-30 ta poster image map korte paro. 
                   Apadoto dummy images diye dekho grid-ta kemon lage.
                */}

                {movieData.map((movie, i) => (
                    <div key={i} className="aspect-2/3 bg-gray-900 rounded-lg overflow-hidden">
                        <img
                            src={movie.poster} // Ekta common poster
                            className="w-full h-full object-cover opacity-50"
                            alt="bg-movie"
                        />
                    </div>
                ))}

                {/* Gradient Overlay for the dark fade effect */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0f0f00] via-transparent to-[#0f0f0f00]"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* --- Hero Content --- */}
            <div className="text-center flex flex-col items-center gap-6 px-4">
                {/* Play Button Icon */}
                <div className="w-20 h-20 md:w-32 md:h-32 mb-4 animate-pulse">
                    <img src={playIcon} alt="Play" className="w-full h-full object-contain" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
                    The Best Streaming Experience
                </h1>

                <p className="text-gray-400 max-w-2xl text-sm md:text-base">
                    StreamVibe is the best streaming experience for watching your favorite movies and shows on demand,
                    anytime, anywhere.
                </p>

                <button className="btn bg-red-600 hover:bg-red-700 text-white border-none px-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                    Start Watching Now
                </button>
            </div>
        </section>
    );
};

export default Hero;