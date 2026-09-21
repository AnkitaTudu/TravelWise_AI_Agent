import Home from "./pages/home"; 
import { useState } from 'react';
import Navbar from './components/Navbar';
import AiTripPlanner from './components/AiTripPlanner';
import GeneratedPlan from './components/GeneratedPlan';
import type { PlanData } from './components/AiTripPlanner';
import { Routes, Route, Navigate } from "react-router-dom";
import Destination from "./pages/destination";


type View = 'home' | 'planner' | 'generated';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [generatedPlan, setGeneratedPlan] = useState<PlanData | null>(null);

  const navigateTo = (v: string) => {
    setView(v as View);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlanGenerated = (plan: PlanData) => {
    setGeneratedPlan(plan);
    setView('generated');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  return (
    <div className="min-h-screen bg-[#F7F6F3]" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <Navbar onNavigate={navigateTo} currentView={view} />

      <Routes>
  <Route
    path="/"
    element={<Home onNavigatePlanner={() => navigateTo("planner")} />}
  />

  <Route
    path="/planner"
    element={
      <AiTripPlanner onPlanGenerated={handlePlanGenerated} />
    }
  />

  <Route
    path="/generated"
    element={
      generatedPlan ? (
        <GeneratedPlan
          plan={generatedPlan}
          onBack={() => window.history.back()}
        />
      ) : (
        <Navigate to="/planner" replace />
      )
    }
  />

  <Route path="/destination/:city" element={<Destination />} />

  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
    </div>
  );
}
