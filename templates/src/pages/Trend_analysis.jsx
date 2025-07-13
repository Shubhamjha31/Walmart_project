import React from "react";
import WarehouseSalesChart from "../components/SalesGraph";
import "../styles/analysis.css"

export default function TrendAnalysis() {

    return(
        <div>
            <div className="forecast-graph">
                 <WarehouseSalesChart />
            </div>
        </div>
    )
