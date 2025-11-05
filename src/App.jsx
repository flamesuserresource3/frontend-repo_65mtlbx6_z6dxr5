import React from 'react';
import Navbar from './components/Navbar';
import HashRouter from './components/HashRouter';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main className="scroll-smooth">
        <HashRouter />
      </main>
      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Yasir — Creative Marketing & Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
