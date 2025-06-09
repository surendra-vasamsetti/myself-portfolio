import React from 'react';
import { Portfolio } from './components/Portfolio';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from "sonner";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Portfolio />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
