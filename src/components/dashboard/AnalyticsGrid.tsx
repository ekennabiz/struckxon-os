import { FolderKanban, TrendingUp, BrainCircuit, CheckSquare } from 'lucide-react';
import { useStore } from '../../core/store';

export default function AnalyticsGrid() {
  // Pulling our global state metrics
  const { activeProjects, financialGrowth, learningProgress, dailyMissions } = useStore();
  
  // Calculating dynamic stats
  const tasksCompleted = dailyMissions.filter(m => m.completed).length;

  const metrics = [
    { 
      title: 'Active Projects', 
      value: activeProjects.toString(), 
      icon: FolderKanban, 
      accentColor: 'text-blue-400', 
      accentBg: 'bg-blue-400/10' 
    },
    { 
      title: 'Financial Growth', 
      value: `+${financialGrowth}%`, 
      icon: TrendingUp, 
      accentColor: 'text-emerald-400', 
      accentBg: 'bg-emerald-400/10' 
    },
    { 
      title: 'Learning Progress', 
      value: `${learningProgress}%`, 
      icon: BrainCircuit, 
      accentColor: 'text-purple-400', 
      accentBg: 'bg-purple-400/10' 
    },
    { 
      title: 'Tasks Completed', 
      value: `${tasksCompleted} / ${dailyMissions.length}`, 
      icon: CheckSquare, 
      accentColor: 'text-cyan-400', 
      accentBg: 'bg-cyan-400/10' 
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-6 shadow-lg hover:bg-slate-900/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.07)] hover:border-slate-700/50 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-2xl ${metric.accentBg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
              <metric.icon className={`w-6 h-6 ${metric.accentColor}`} />
            </div>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-slate-400 text-sm font-medium mb-1 tracking-wide">
              {metric.title}
            </h4>
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {metric.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}