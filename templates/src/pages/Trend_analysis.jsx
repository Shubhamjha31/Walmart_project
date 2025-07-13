import React from "react";
import WarehouseSalesChart from "../components/SalesGraph";
import "../styles/analysis.css"

export default function TrendAnalysis() {

    return(
        <div>
            <h2 className="heading">Analysis</h2>
            <div className="forecast-graph">
                 <WarehouseSalesChart />
            </div>
        </div>
    )
};