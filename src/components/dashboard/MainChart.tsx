import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sun', projects: 4, finance: 20 },
  { name: 'Mon', projects: 6, finance: 35 },
  { name: 'Tue', projects: 5, finance: 30 },
  { name: 'Wed', projects: 8, finance: 45 },
  { name: 'Thu', projects: 7, finance: 40 },
  { name: 'Fri', projects: 9, finance: 60 },
  { name: 'Sat', projects: 12, finance: 75 },
];

export default function MainChart() {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-8 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Weekly Strategic Progress</h3>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorFinance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
              itemStyle={{ color: '#22d3ee' }}
            />
            <Area type="monotone" dataKey="finance" stroke="#22d3ee" strokeWidth={3} fillOpacity={1} fill="url(#colorFinance)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}