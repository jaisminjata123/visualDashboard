
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; 

import PropTypes from 'prop-types';

const ChartComponent = ({ data, chartType }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        console.log("ChartComponent useEffect triggered");
        const chartInstance = new Chart(chartRef.current, {
            type: chartType,  // Use dynamic chart type
            data: {
                labels: data.map((item) => item.topic),
                datasets: [
                    {
                        label: 'Intensity',
                        data: data.map((item) => item.intensity),
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
            },
        });

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [data, chartType]);

    return <canvas ref={chartRef} width={400} height={300} />;
};

ChartComponent.propTypes = {
    data: PropTypes.array.isRequired,
    chartType: PropTypes.string.isRequired,
};

export default ChartComponent;

