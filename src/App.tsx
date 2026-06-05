import Layout from './components/layout/Layout';
import HeroSection from './components/dashboard/HeroSection';
import AnalyticsGrid from './components/dashboard/AnalyticsGrid';
import MainChart from './components/dashboard/MainChart';
import AiCommand from './components/widgets/AiCommand';
import TimelineRoadmap from './components/widgets/TimelineRoadmap'; // Import

export default function App() {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out pb-12">
        <HeroSection />
        <AnalyticsGrid />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MainChart />
          </div>
          <div className="lg:col-span-1">
            <AiCommand />
          </div>
        </div>

        <TimelineRoadmap /> {/* Render the roadmap */}
      </div>
    </Layout>
  );
}