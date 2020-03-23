import React from 'react'
import { LineChart, Line, YAxis, ResponsiveContainer } from 'recharts';
import { Row, Col } from 'reactstrap';

import { months } from './Modal';
import './Graph.css';

export default function Graph(props) {
    return (
        <div className="graph">
            <div className="graph-title">{props.title}</div>
            <div className="graph-mask">
                <ResponsiveContainer>
                    <LineChart data={props.data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <YAxis type="number" domain={[0, 10000000]} tick={false} line={false} />
                        <Line type="linear" dataKey="retailSales" strokeWidth={4} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <Row className='graph-label'>
                {
                    months.map((month, index) =>
                        <Col key={index} xs={1} className='x-axis-tick'>{month}</Col>
                    )
                }
            </Row>
        </div>
    )
}
