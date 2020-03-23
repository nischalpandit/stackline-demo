import React from 'react'
import { LineChart, Line, YAxis, ResponsiveContainer } from 'recharts';
import { Row, Col } from 'reactstrap';
import classNames from 'classnames'

import { months, graphNavModal } from './Modal';
import './Graph.css';

export default function Graph(props) {
    return (
        <div className="graph">
            <div className="graph-nav">
                <span className={classNames({ 'active': props.view === graphNavModal.RETAILSALES })} onClick={() => props.onChangeGraph(graphNavModal.RETAILSALES)}>Retail Sales</span>
                <span className={classNames({ 'active': props.view === graphNavModal.WHOLESALESALES })} onClick={() => props.onChangeGraph(graphNavModal.WHOLESALESALES)}>Wholesale Sales</span>
                <span className={classNames({ 'active': props.view === graphNavModal.RETAILMARGIN })} onClick={() => props.onChangeGraph(graphNavModal.RETAILMARGIN)}>Retail Margin</span>
            </div>
            <div className="graph-mask">
                <ResponsiveContainer>
                    <LineChart data={props.data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <YAxis type="number" domain={[0, 2000000]} tick={false} line={false} />
                        <Line type="natural" dataKey={props.view} strokeWidth={4} dot={false} />
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
