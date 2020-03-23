import React, { Component } from 'react'
import { connect } from 'react-redux';

import { dispatchLoadSalesData } from '../../store/Sales';
import { dispatchSwitchSalesView } from '../../store/Sales';
import { getMonthlySales } from '../../selectors/salesDataSelector'
import LoaderSpinner from '../common/LoaderSpinner';
import './Sales.css';
import SideBar from './SideBar';
import Graph from './Graph';

class Sales extends Component {


    // Fetch data on first mount
    componentDidMount() {
        this.props.dispatchLoadSalesData();
    }

    switchView = (view) => {
        this.props.dispatchSwitchSalesView(view);
    }

    formatData(inputDate) {
        var date = new Date(inputDate);
        if (!isNaN(date.getTime())) {
            // Months use 0 index.
            date = new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000))
            return (date.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
                + '-' + date.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
                + '-' + date.getFullYear().toString().substr(2, 2);
        }
    }

    render() {
        const { product, loading, error, view } = this.props;

        if (loading) {
            return (
                <div className="abs-center-container">
                    <LoaderSpinner type='Oval' color='#00BFFF' height={100} width={100} />
                </div>
            )
        }

        if (error) {
            return (
                <div className="abs-center-container">
                    <h4 className='text-danger'>An error occured! Please refresh the page.</h4>
                </div>
            )
        }

        if (product) {
            return (
                <div className='sales-demo'>
                    <div className="side">
                        <SideBar title={product.title} image={product.image} subtitle={product.subtitle} tags={product.tags} view={view} onTabClick={this.switchView} />
                    </div>
                    <div className="sales-view">
                        <Graph title='Retail Sales' data={this.props.product.sales} />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>WEEK ENDING <i className='material-icons'>keyboard_arrow_down</i></th>
                                    <th>RETAIL SAIL <i className='material-icons'>keyboard_arrow_down</i></th>
                                    <th>WHOLESALE SALE <i className='material-icons'>keyboard_arrow_down</i></th>
                                    <th>UNIT SOLD <i className='material-icons'>keyboard_arrow_down</i></th>
                                    <th>RETAILER MARGIN <i className='material-icons'>keyboard_arrow_down</i></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.sales.map((sale, index) =>
                                        <tr key={index}>
                                            <td>{this.formatData(sale.weekEnding)}</td>
                                            <td>${Number(sale.retailSales).toLocaleString()}</td>
                                            <td>${Number(sale.wholesaleSales).toLocaleString()}</td>
                                            <td>{sale.unitsSold}</td>
                                            <td>${Number(sale.retailerMargin).toLocaleString()}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }

        return null;
    }
}

const mapStateToProps = state => ({
    product: state.sales.data && state.sales.data[0],
    loading: state.sales.loading,
    error: state.sales.error,
    view: state.sales.view,
    monthlySales: getMonthlySales(state)
});

const mapDispatchToProps = {
    dispatchLoadSalesData,
    dispatchSwitchSalesView
}

export default connect(mapStateToProps, mapDispatchToProps)(Sales)
