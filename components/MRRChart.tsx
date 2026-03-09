import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from 'recharts';

const data = [
  { month: 'Month 1', mrr: 900 },
  { month: 'Month 2', mrr: 915 },
  { month: 'Month 3', mrr: 930 },
  { month: 'Month 4', mrr: 950 },
  { month: 'Month 5', mrr: 975 },
  { month: 'Month 6', mrr: 999 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0B0F14] border border-zinc-800 p-3 shadow-2xl">
        <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono mb-1">{payload[0].payload.month}</p>
        <p className="text-xl font-bold text-white">${payload[0].value}k</p>
      </div>
    );
  }
  return null;
};

export const MRRChart: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0B0F14] p-4 md:p-8 flex flex-col relative group">
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="rgba(255,255,255,0.05)" 
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#52525b', fontSize: 10, fontFamily: 'monospace' }}
              dy={10}
            />
            <YAxis 
              domain={[850, 1050]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#52525b', fontSize: 10, fontFamily: 'monospace' }}
              tickFormatter={(value) => `$${value}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
            
            <ReferenceLine 
              x="Month 3" 
              stroke="#52525b" 
              strokeDasharray="5 5"
              label={{
                value: 'Redesign Release',
                position: 'top',
                fill: '#71717a',
                fontSize: 9,
                fontFamily: 'monospace',
                fontWeight: 'bold',
                offset: 10
              }}
            />

            <Line
              type="monotone"
              dataKey="mrr"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 4, fill: '#10B981', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#10B981', stroke: '#fff', strokeWidth: 2 }}
              animationDuration={2000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Central Label requested by user */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="text-[10px] uppercase tracking-widest font-mono text-white bg-black/80 px-4 py-2 border border-white/10 backdrop-blur-sm">
          MRR Trend Visualization
        </div>
      </div>
    </div>
  );
};
