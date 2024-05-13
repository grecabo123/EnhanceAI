import { Chart } from 'primereact/chart'
import React from 'react'

function Income() {
    const data ={
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Active',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
    
        ]
    }
    const options = {
        indexAxis: 'x',
        maintainAspectRatio: false,
        aspectRatio: 0.9,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <div>
            <Chart type="bar" data={data} options={options}  />
        </div>
    )
}

export default Income