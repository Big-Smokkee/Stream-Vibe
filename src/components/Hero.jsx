import React, { use } from 'react';
import playIcon from '../assets/hero-section-logo.png';

const Hero = ({ movieDataPromise }) => {
    const movieData = use(movieDataPromise);

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* 1. Poster Grid: Eita sobar niche thakbe (-z-20) */}
            <div className="absolute inset-0 -z-20 grid grid-cols-4 md:grid-cols-8 gap-2 opacity-40">
                {movieData.slice(0, 24).map((movie) => (
                    <div key={movie.id} className="h-40 md:h-60">
                        <img
                            src={movie.poster}
                            alt="poster"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>

            {/* 2. Dark Overlay & Gradient: Eta grid er upore kintu content er niche thakbe (-z-10) */}
            {/* bg-black/60 mane 60% kalo porda, jate chhobi gula halka dekha jay */}
            <div className="absolute inset-0 -z-10 bg-black/40 bg-linear-to-t from-black via-transparent to-black"></div>

            {/* 3. Main Content: Ekhane kono -z-index hobe na, tahole content dekha jabe */}
            <div className="text-center flex flex-col items-center px-6 max-w-5xl">
                <div className="mb-10">
                    <img src={playIcon} alt="Play" className="w-24 md:w-44" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    The Best Streaming Experience
                </h1>

                <p className="text-gray-400 text-sm md:text-base mb-10 max-w-3xl leading-relaxed">
                    StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
                </p>

                <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                    <span className='text-lg'>▶</span> Start Watching Now
                </button>
            </div>
        </section>
    );
};

export default Hero;