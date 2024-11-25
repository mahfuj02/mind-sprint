import React from 'react';
import image from '../../assets/Hero.webp';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Welcome to <span className="text-primary">mindSprint</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Your gateway to mastering skills with personalized tutorials.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
        <section className="mt-10 w-full">
          <img
            src={image}
            alt="Hero Illustration"
            className="w-full h-41px"
          />
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
