import React from 'react';
import { Navbar } from "./compos/header/Navbar";
import { Body } from "./compos/main/Body";
import __MESH__ from "./assets/mesh.svg";

function App() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%),
              linear-gradient(to right, rgba(51, 51, 51, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(51, 51, 51, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 60px 60px, 60px 60px'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4">
          <div className="w-full max-w-4xl sm:max-w-6xl aspect-[4/3] sm:aspect-[16/9] relative">
            <img
              src={__MESH__}
              alt="Mesh"
              className="absolute inset-0 w-full h-[130%] sm:h-[130%] object-cover opacity-70 sm:opacity-40 blur-sm sm:blur-none scale-110 sm:scale-100"
            />
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="relative z-10 pt-20">
        <main className="container mx-auto px-4 xl:px-20 min-h-screen">
          <Body />
        </main>
      </div>
    </>
  );
}

export default App;