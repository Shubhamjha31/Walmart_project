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
        { month: 'Jan', sales: 80 },
        { month: 'Feb', sales: 90 },
        { month: 'Mar', sales: 110 },
        { month: 'Apr', sales: 115 },
        { month: 'May', sales: 118 },
        { month: 'Jun', sales: 121 },
        { month: 'July', sales: 134 },
        { month: 'Aug', sales: 140 },
        { month: 'Sept', sales: 152 },
        { month: 'Oct', sales: 157 },
        { month: 'Nov', sales: 163 },
    ];
    const formatForecast = (value) => `${value} units`;

    return (
        <div>
            <h2 className="heading">Analysis</h2>
            <div className="analysis-page">
                <div className="forecast-graph">
                    <WarehouseSalesChart
                        chartData={forecastSalesData}
                        lineColor="#FFA726"
                        valueFormatter={formatForecast}
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
                        lineColor="#FF5733"
                        valueFormatter={formatSales}
                    />
                </div>
            </div>
        </div>
    )
};