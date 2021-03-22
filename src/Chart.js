import React from 'react';
import { Bar } from 'react-chartjs-2';


export default function Chart(props) {
    console.log(props.apiData.cases);
    const data = {
        labels: ['Total Cases', 'Total Recovered', 'Total Deaths'],
        datasets: [
            {
                label: ['BAR GRAPH'],
                backgroundColor: ["#588ff3", "#a1fa6b", "#f94424"],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                //hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                //hoverBorderColor: 'rgba(255,99,132,1)',
                data: [props.apiData.cases, props.apiData.recovered, props.apiData.deaths]
            },
        ]
    };
    return (
        <div>
            <h2 style={{ textAlign: 'center'}}>COVID GRAPH</h2>
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }