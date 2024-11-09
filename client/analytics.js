const checkPageCompleted = setInterval(() => {
    
    if(document.readyState === 'complete') {
        statChart();
        clearInterval(checkPageCompleted);
    }

}, 200);

const statChart = () => {

    const ctx = document.getElementById('analyticChart').getContext('2d');
    const analyticChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], 
            datasets: [
                {
                    label: 'Quote',
                    data: [30, 50, 40, 60, 30, 70, 50], 
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true, 
                },
                {
                    label: 'Invoice',
                    data: [60, 40, 50, 40, 60, 50, 60],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true,
                },
                {
                    label: 'Sales Order',
                    data: [50, 60, 45, 55, 70, 30, 40],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', 
                    fill: true,
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            }
        }
    });
}

