import {
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { BalancePlot } from '@/types';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useEffect, useState } from 'react';

interface ChartCardProps {
  data: BalancePlot[];
}

export default function ChartCard({ data }: ChartCardProps) {
  const [height, setHeight] = useState(window.innerWidth > 992 ? 550 : 275);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth > 992 ? 550 : 275);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className='container mt-5 p-4 border-black rounded card-custom'
      data-testid='ChartCard-1'>
      <div className='text-center'>
        <h5>Balance History</h5>
      </div>
      <hr></hr>
      <ErrorBoundary>
        <ResponsiveContainer width='100%' height={height}>
          <LineChart data={data} className='linechart-style'>
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
            <Line
              type='monotone'
              dataKey='amount'
              stroke='#FF3366'
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </ErrorBoundary>
    </div>
  );
}
