import React from "react";
import WarehouseSalesChart from "../components/SalesGraph";
import DropdownMenu from "../components/dropdpwn";
import TrendingProducts from "../components/TrendingProducts";
import "../styles/analysis.css"

export default function TrendAnalysis() {
    const myWarehouseSalesData = [
        { month: 'Jan', sales: 120 },
        { month: 'Feb', sales: 150 },
        { month: 'Mar', sales: 130 },
        { month: 'Apr', sales: 180 },
        { month: 'May', sales: 200 },
        { month: 'Jun', sales: 170 },
    ];
    const formatSales = (value) => `${value}k`;

    const forecastSalesData = [
        { month: 'Jan', sales: 12000, forecast: 18000 },
        { month: 'Feb', sales: 15000, forecast: 21000 },
        { month: 'Mar', sales: 17000, forecast: 23000 },
        { month: 'Apr', sales: 14000, forecast: 20000 },
        { month: 'May', sales: 18000, forecast: 25000 },
        { month: 'Jun', sales: 16000, forecast: 24000 },
        { month: 'Jul', sales: 20000, forecast: 30000 },
        { month: 'Aug', sales: 21000, forecast: 31000 },
        { month: 'Sep', sales: 19000, forecast: 28000 },
        { month: 'Oct', sales: 22000, forecast: 32000 },
        { month: 'Nov', sales: 23000, forecast: 34000 },
        { month: 'Dec', sales: 25000, forecast: 36000 },
    ];
    const formatForecast = (value) => `${value} units`;

    return (
        <div>
            <h2 className="heading">Analysis</h2>
            <div className="analysis-page">
                <div className="forecast-graph">
                    <WarehouseSalesChart
                        chartData={forecastSalesData}
                        seriesConfig={[
                        {
                        dataKey: 'sales',
                        label: 'Last Year Sales',
                        valueFormatter: formatForecast,
                        color: '#29B6F6',
                        },
                        {
                        dataKey: 'forecast',
                        label: 'Forecasted Sales',
                        valueFormatter: formatForecast,
                        color: '#FFA726',
                        },
                        ]}
                    />

                </div>
                <div className="dropdown-menus">
                    <DropdownMenu />
                    <DropdownMenu className="season-dropdown" />
                </div>
                <div className="trending-products-div">
                    <TrendingProducts />
                </div>
                <div className="socialmedia-graph">
                    <WarehouseSalesChart
                        chartData={myWarehouseSalesData}
                        seriesConfig={[
                        {
                        dataKey: 'sales',
                        label: 'Monthly Sales',
                        valueFormatter: formatSales,
                        color: '#FF5733',
                        },
                    ]}
                    />

                </div>
            </div>
        </div>
    )
};