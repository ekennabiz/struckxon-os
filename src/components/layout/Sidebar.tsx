import { LayoutDashboard, FolderKanban, Target, BrainCircuit, Wallet, BarChart3, Settings } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Projects', icon: FolderKanban },
    { name: 'Skill Tracker', icon: Target },
    { name: 'Family Goals', icon: Target },
    { name: 'AI Assistant', icon: BrainCircuit },
    { name: 'Finance', icon: Wallet },
    { name: 'Analytics', icon: BarChart3 },
  ];

  return (
    <aside className="w-72 hidden md:flex flex-col h-full bg-slate-900/40 backdrop-blur-xl border-r border-slate-800/60 p-6 z-20">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-8 h-8 rounded-lg bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)] flex items-center justify-center">
          <span className="text-slate-950 font-black text-lg">S</span>
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-white">
          Struckxon
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
              item.active
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? 'text-cyan-400' : 'text-slate-500'}`} />
            {item.name}
          </button>
        ))}
      </nav>

      {/* Settings Bottom Action */}
      <div className="mt-auto pt-6 border-t border-slate-800/60">
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all duration-300">
          <Settings className="w-5 h-5 text-slate-500" />
          Settings
        </button>
      </div>
    </aside>
  );
}