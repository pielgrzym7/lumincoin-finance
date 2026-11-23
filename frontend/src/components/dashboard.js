import {Chart} from "chart.js/auto";

export class Dashboard {
    constructor() {
        console.log('dash');


        //боковое меню дашборда
        const buttons = document.querySelectorAll('.nav-item.nav-style > .nav-link');
        let activeButton = null;

        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                if (activeButton !== button) {
                    if (activeButton) {
                        activeButton.classList.remove('active');
                        activeButton.classList.remove('active-dash');
                    }
                    button.classList.add('active');
                    button.classList.add('active-dash');
                    activeButton = button;
                }
            })
        })


        this.startChart();
    }

    startChart() {
        const ctx = document.getElementById("chart-income");
        const ctx2 = document.getElementById('chart-expenses');

        const pieLabels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];

        const pieData = [23, 30, 18, 16, 18];
        const pieData2 = [12, 18, 29, 25, 21];

        const pieColors = ["#DC3545", "#FD7E14", "#FFC107", "#20C997", "#0D6EFD"];

        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: pieLabels,
                datasets: [
                    {
                        data: pieData,
                        backgroundColor: pieColors
                    }
                ]
            }
        });

        const pieChart2 = new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: pieLabels,
                datasets: [
                    {
                        data: pieData2,
                        backgroundColor: pieColors
                    }
                ]
            }
        });

    }
}