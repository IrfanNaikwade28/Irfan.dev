import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const RadarChart = () => {
  const data = {
    labels: [
      "JavaScript",
      "React",
      "Node.js",
      "Figma",
      "CSS",
      "Tailwind CSS",
      "Next.js",
      "MongoDB",
      "Python",
      "C/C++",
    ],
    datasets: [
      {
        label: "Skill Proficiency (%)",
        data: [80, 70, 60, 75, 80, 80, 40, 75, 60, 60],
        backgroundColor: "rgba(128, 255, 210, 0.3)",
        borderColor: "#80ffd2", 
        borderWidth: 2,
        pointBackgroundColor: "#80ffd2", 
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#80ffd2",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          color: "rgba(128, 255, 210, 0.2)", // Color of angle lines
        },
        grid: {
          color: "rgba(128, 255, 210, 0.2)", // Color of grid lines
        },
        pointLabels: {
          font: {
            size: 14,
          },
          color: "#80ffd2", 
        },
        ticks: {
          beginAtZero: true,
          color: "#666", // Tick mark color
          stepSize: 20, // Increment for tick values
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#80ffd2",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white/5 h-[45vh] flex justify-center" style={{ width: "100%", margin: "auto", padding: "20px" }}>
      <Radar data={data} options={options} />
    </div>
  );
};