import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    // Sample data for the chart (replace this with your own data)
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sample Data',
                data: [12, 19, 3, 5, 2, 3, 10],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
            },
        ],
    };

    return (
        <div>
            <Line data={data} />
        </div>
    );
};

export default LineChart;
