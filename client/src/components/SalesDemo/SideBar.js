import React from 'react'
import classNames from 'classnames'

import { SalesNavModal } from './Modal'

export default function SideBar(props) {
    const overViewIconClass = props.view === SalesNavModal.OUERVIEW ? 'material-icons' : 'material-icons-outlined';
    return (
        <div className='side-bar'>
            <div className="intro">
                <img src={props.image} className='product-image' alt='product-img' />
                <div className="title">{props.title}</div>
                <p className="subtitle">{props.subtitle}</p>
            </div>
            <div className="tags">
                {props.tags.map((tag, index) =>
                    <span className="tag" key={index}>{tag}</span>
                )}
            </div>
            <ul className="vertical-nav">
                <li className={classNames({ 'active': props.view === SalesNavModal.OUERVIEW })} onClick={() => props.onTabClick(SalesNavModal.OUERVIEW)}><i className={overViewIconClass}>home</i>OVERVIEW</li>
                <li className={classNames({ 'active': props.view === SalesNavModal.SALES })} onClick={() => props.onTabClick(SalesNavModal.SALES)}><i className='material-icons'>bar_chart</i>SALES</li>
            </ul>
        </div>
    )
}
