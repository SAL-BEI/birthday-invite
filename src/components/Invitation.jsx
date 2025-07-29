import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Lottie from 'lottie-react';
import birthdayAnimation from '../animations/birthday.json';
import cakeAnimation from '../animations/cake.json';

const Invitation = () => {
  const { name } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'back.out(1.7)' }
    );
  }, []);

  return (
    <motion.div
      className="invitation-page min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-800 to-black p-4"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        ref={containerRef}
        className="invitation-container text-center p-6 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-lg max-w-md w-full"
      >
        {/* Birthday Animation (on top of cake) */}
        <Lottie
          animationData={birthdayAnimation}
          loop
          style={{ height: 200, margin: '0 auto -1.5rem' }}
        />

        {/* Cake Animation */}
        <Lottie
          animationData={cakeAnimation}
          loop
          style={{ height: 100, margin: '0 auto 1rem' }}
        />

        {/* Invitation Text */}
        <h1 className="text-3xl font-bold text-red-600 mb-2">Hey {name}!</h1>
        <p className="text-lg mb-1">You’re warmly invited to celebrate with me! 🎉</p>
        <p className="text-lg mb-1">📍 <span className="font-semibold">Where:</span> Lexys Rooftop</p>
        <p className="text-lg mb-1">⏰ <span className="font-semibold">Time:</span> 2:45 PM</p>
        <p className="text-lg mb-1">📅 <span className="font-semibold">When:</span> Saturday, 2nd August 2025</p>
        <p className="text-lg mb-4">💌 Looking forward to seeing you there!</p>

        {/* Host Text */}
        <h2 className="text-xl font-bold text-yellow-500">Hosted by <span className="text-red-600">Salbei</span></h2>
      </div>
    </motion.div>
  );
};

export default Invitation;
