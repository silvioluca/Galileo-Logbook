import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { BRANCHE } from '../data/branche';

export default function DistribuzioneChart({ schede }) {
  const dati = BRANCHE.map((branca) => ({
    branca,
    schede: schede.filter((s) => s.branca === branca).length,
  }));

  return (
    <section className="distribuzione-section etched-frame">
      <h2>Distribuzione delle schede per branca</h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={dati} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid stroke="rgba(43,29,15,0.15)" vertical={false} />
          <XAxis dataKey="branca" tick={{ fill: '#4a3521', fontSize: 12 }} interval={0} angle={-20} textAnchor="end" height={70} />
          <YAxis allowDecimals={false} tick={{ fill: '#4a3521', fontSize: 12 }} />
          <Tooltip
            contentStyle={{ background: '#ece1c8', border: '1px solid rgba(43,29,15,0.35)' }}
            labelStyle={{ color: '#2b1d0f' }}
          />
          <Bar dataKey="schede" fill="#6b4423" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
