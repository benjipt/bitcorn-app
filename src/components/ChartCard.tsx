import { Tooltip, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts'

interface ChartCardProps {
  data: []
}

export default function ChartCard({ data }: ChartCardProps) {
    return (
        <div className="container mt-5 p-4 border-black rounded card-custom" data-testid="ChartCard-1">
            <div className="text-center">
                <h5>Balance History</h5>
            </div>
            <hr></hr>
            <ResponsiveContainer width="100%" height={550}>
                <LineChart data={ data } className="linechart-style" >
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#FF3366" strokeWidth={4} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
