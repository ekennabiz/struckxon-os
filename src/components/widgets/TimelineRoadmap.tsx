import { Milestone, CheckCircle2, Clock } from 'lucide-react';

const milestones = [
  { id: 1, title: 'Alpha Core Launch', date: 'June 2026', status: 'done' },
  { id: 2, title: 'AI Integration', date: 'July 2026', status: 'active' },
  { id: 3, title: 'Finance Automations', date: 'August 2026', status: 'pending' },
  { id: 4, title: 'Global Scaling', date: 'Sept 2026', status: 'pending' },
];

export default function TimelineRoadmap() {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-8">
        <Milestone className="w-6 h-6 text-cyan-400" />
        <h3 className="text-xl font-bold text-white">Strategic Roadmap</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="relative group">
            {/* Connector Line */}
            {milestone.id < milestones.length && (
              <div className="hidden md:block absolute top-4 left-[60%] w-[80%] h-[2px] bg-slate-800" />
            )}
            
            <div className={`p-5 rounded-2xl border transition-all duration-300 ${
              milestone.status === 'done' ? 'bg-slate-800/50 border-cyan-500/30' : 'bg-slate-900/50 border-slate-700/50'
            }`}>
              {milestone.status === 'done' ? (
                <CheckCircle2 className="w-6 h-6 text-cyan-400 mb-4" />
              ) : (
                <Clock className="w-6 h-6 text-slate-500 mb-4" />
              )}
              <h4 className="font-bold text-slate-200 mb-1">{milestone.title}</h4>
              <p className="text-sm text-slate-500">{milestone.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}