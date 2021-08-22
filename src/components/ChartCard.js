import React, { Component } from 'react'
import { BarChart, Bar, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'

export default class ChartCard extends Component {
    render() {
        return (
            <div className="container mt-5 p-4 border-black rounded card-custom">
                <div className="text-center">
                    <h5>Balance History</h5>
                </div>
                <hr></hr>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={ this.props.data }>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="amount" fill="#3E92CC" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}
