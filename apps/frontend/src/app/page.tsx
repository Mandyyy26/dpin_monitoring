"use client"
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import { ThemeProvider } from '@/contexts/ThemeContext';
import React from 'react';


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
      </div>
    </ThemeProvider>
  );
}

export default App;