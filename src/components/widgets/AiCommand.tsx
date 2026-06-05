import { useState } from 'react';
import { Sparkles, Send, Bot } from 'lucide-react';

export default function AiCommand() {
  const [input, setInput] = useState('');

  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-6 shadow-lg h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <Sparkles className="w-5 h-5 text-cyan-400" />
        </div>
        <h3 className="text-lg font-bold text-white">AI Command Assistant</h3>
      </div>

      {/* Command Log Placeholder */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
            <Bot className="w-4 h-4 text-cyan-500" />
          </div>
          <div className="bg-slate-800/50 p-3 rounded-2xl rounded-tl-none text-sm text-slate-300">
            Systems online. How can I assist with your business strategy today?
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Execute command..."
          className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
        />
        <button className="absolute right-2 top-2 p-1.5 bg-cyan-500 text-slate-950 rounded-lg hover:bg-cyan-400 transition-colors">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}