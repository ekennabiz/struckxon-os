import { Search, Bell, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="h-20 w-full border-b border-slate-800/60 bg-slate-950/40 backdrop-blur-xl flex items-center justify-between px-8 z-10 sticky top-0">
      
      {/* Search Bar Component */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors duration-300" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all shadow-inner"
            placeholder="Search Command Center..."
          />
        </div>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-6 ml-4">
        
        {/* Interactive AI Button */}
        <button className="flex items-center gap-2 bg-slate-800/40 hover:bg-cyan-500/10 border border-slate-700/50 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 px-4 py-2 rounded-xl transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] group">
          <Sparkles className="h-4 w-4 text-cyan-500 group-hover:animate-pulse" />
          <span className="font-medium text-sm tracking-wide">AI Command</span>
        </button>

        {/* Notification Bell with Neon Badge */}
        <button className="relative p-2 text-slate-400 hover:text-slate-200 transition-colors group">
          <Bell className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-cyan-500 ring-2 ring-slate-950 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-800/60 cursor-pointer group">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">Randy Struckxon</span>
            <span className="text-xs text-slate-500 font-medium">Admin</span>
          </div>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[2px] shadow-[0_0_10px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
            <div className="h-full w-full rounded-[10px] bg-slate-900 flex items-center justify-center overflow-hidden">
              <img 
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
                alt="Profile" 
                className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}