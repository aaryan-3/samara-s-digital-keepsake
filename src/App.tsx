import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import Memories from "./pages/Memories";
import Playlist from "./pages/Playlist";
import Messages from "./pages/Messages";
import Quiz from "./pages/Quiz";
import Timeline from "./pages/Timeline";
import TheTrio from "./pages/TheTrio";
import Letter from "./pages/Letter";
import Reminders from "./pages/Reminders";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleDone = useCallback(() => setLoading(false), []);

  if (loading) {
    return <LoadingScreen onDone={handleDone} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/the-trio" element={<TheTrio />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
