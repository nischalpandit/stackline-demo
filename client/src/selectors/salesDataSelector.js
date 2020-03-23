import { createSelector } from 'reselect'
import { months } from '../components/SalesDemo/Modal'

const getWeeklySales = state => state.sales.data.length && state.sales.data[0].sales;

export const getMonthlySales = createSelector(
    getWeeklySales, weeklySales => {
        let monthlySales = [];

        weeklySales.length && months.forEach((month) => {
            const index = months.indexOf(month);
            const currentMonth = weeklySales.filter(item => {
                let date = new Date(item.weekEnding);
                date = new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000))
                return date.getMonth() === index;
            })
            const monthlySaleObj = {
                name: month,
                retailSales: currentMonth.reduce((a, b) => +a + +b.retailSales, 0),
                wholesaleSales: currentMonth.reduce((a, b) => +a + +b.wholesaleSales, 0),
                unitsSold: currentMonth.reduce((a, b) => +a + +b.unitsSold, 0),
                retailerMargin: currentMonth.reduce((a, b) => +a + +b.retailerMargin, 0)
            }
            monthlySales.push(monthlySaleObj);
        })
        return monthlySales;
    }
)
