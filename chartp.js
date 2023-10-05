function renderChart() {
  const gubbins = JSON.parse(localStorage.getItem("gubbinstorage"));

  const ctx = document.getElementById("myChart");

  const labels = [];
  const views = [];
  const clicks = [];

  for (let i = 0; i < gubbins.length; i++) {
    labels.push(gubbins[i].name);
    views.push(gubbins[i].views);
    clicks.push(gubbins[i].clicks);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of views",
          data: views,
          borderWidth: 1,
        },
        {
          label: "# of clicks",
          data: clicks,
          borderWidth: 1,
        },
      ],
    },
  });
}
renderChart();
