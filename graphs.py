# Python script to generate welcome2.html with a graph

# HTML template with Chart.js included
html_template = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page 2</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <h1>Welcome to Page 2</h1>
    <canvas id="myChart"></canvas>

    <script>
        // Generate random data for the chart
        var labels = ['January', 'February', 'March', 'April', 'May'];
        var data = {
            labels: labels,
            datasets: [{
                label: 'Sample Data',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [12, 19, 3, 5, 2],
            }]
        };

        // Draw the chart
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    </script>
</body>
</html>
"""

# Write the HTML template to welcome2.html
with open("welcome2.html", "w") as f:
    f.write(html_template)

print("welcome2.html created successfully with a graph.")
