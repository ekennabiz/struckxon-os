import Layout from './components/layout/Layout';
import HeroSection from './components/dashboard/HeroSection';
import AnalyticsGrid from './components/dashboard/AnalyticsGrid';

export default function App() {
  return (
    <Layout>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <HeroSection />
        <AnalyticsGrid />
        
        {/* Placeholder for the Central Charts */}
        <div className="h-96 border border-dashed border-slate-800/50 rounded-3xl flex items-center justify-center bg-slate-900/20 backdrop-blur-sm mt-8">
          <p className="text-slate-600 font-medium text-sm">Main Interactive Charts Area</p>
        </div>
      </div>
    </Layout>
  );
}