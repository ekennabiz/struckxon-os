import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { useStore } from '../../core/store';

export default function HeroSection() {
  // Pulling state directly from our Zustand store
  const { userName, dailyMissions, toggleMission } = useStore();

  const completedCount = dailyMissions.filter(m => m.completed).length;
  const progressPercentage = Math.round((completedCount / dailyMissions.length) * 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      
      {/* Welcome Banner */}
      <div className="lg:col-span-2 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-8 relative overflow-hidden shadow-lg">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
            Welcome back, {userName}.
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl">
            Struckxon OS command center is online. All business systems are nominal. You have {dailyMissions.length - completedCount} pending missions today.
          </p>
          
          <button className="flex items-center gap-2 bg-white text-slate-950 px-6 py-3 rounded-xl font-bold hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] group">
            View Strategic Roadmap
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Daily Missions Card */}
      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-6 shadow-lg flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-200">Daily Missions</h3>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {progressPercentage}% Built
          </span>
        </div>

        <div className="flex-1 space-y-3">
          {dailyMissions.map((mission) => (
            <button
              key={mission.id}
              onClick={() => toggleMission(mission.id)}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700/50 text-left group"
            >
              {mission.completed ? (
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-slate-600 group-hover:text-slate-400 flex-shrink-0 transition-colors" />
              )}
              <span className={`text-sm font-medium transition-all ${
                mission.completed ? 'text-slate-500 line-through' : 'text-slate-300 group-hover:text-slate-200'
              }`}>
                {mission.title}
              </span>
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
}