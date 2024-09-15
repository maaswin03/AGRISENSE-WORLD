import { useState, useEffect } from "react";
import { useQuery } from "convex/react";
import "../Dashboard/Dashboard.css";
import { api } from "../../convex/_generated/api";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  ArcElement,
  BarElement,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Filler,
  Tooltip,
  Legend
);



interface SensorData1 {
  [key: string]: any;
}



function Dashboard() {
  const [sensorData, setSensorData] = useState<SensorData1>({});
  const d1 = useQuery(api.users.fetchAllDataFromSensor)

  useEffect(() => {
    if (d1) {
      setSensorData(d1);

      if (Array.isArray(d1) && d1.length > 0) {
        setSensorData(d1[0]);
      }
    }
  }, [d1]);

  console.log(sensorData?.current_humidity)


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://final-1-jkbd.onrender.com/api/dashboard", {
  //         method: "GET",
  //       });
  //       const data: SensorData = await response.json();
  //       setSensorData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  const difftemperature = Math.round(
    Number(sensorData.current_temperature) - Number(sensorData.previous_temperature)
  );
  const diffhumidity = Math.round(
    Number(sensorData?.current_humidity) - Number(sensorData?.previous_humidity)
  );
  const difflight = Math.round(
    Number(sensorData.current_light_intensity) - Number(sensorData.previous_light_intensity)
  );
  const diffspeed = Math.round(
    Number(sensorData.current_wind_speed) - Number(sensorData.previous_wind_speed)
  );

  const starttemperature = Math.round(sensorData.current_temperature) - 3;
  const endtemperature = Math.round(sensorData.current_temperature) + 3;

  const startspeed = Math.round(sensorData.current_wind_speed) - 3;
  const endspeed = Math.round(sensorData.current_wind_speed) + 3;

  const soil = Math.round((Number(sensorData.current_soil_moisture) / 1023) * 100);
  const soil1 = Math.round((Number(sensorData.previous_soil_moisture) / 1023) * 100);
  const soil2 = Math.round((Number(sensorData.previous1_soil_moisture) / 1023) * 100);
  const soil3 = Math.round((Number(sensorData.previous2_soil_moisture) / 1023) * 100);
  const soil4 = Math.round((Number(sensorData.previous3_soil_moisture) / 1023) * 100);
  const soil5 = Math.round((Number(sensorData.previous4_soil_moisture) / 1023) * 100);
  const soil6 = Math.round((Number(sensorData.previous5_soil_moisture) / 1023) * 100);

  const diffsoil = Math.round(Number(soil) - Number(soil1));

  const chartData = {
    labels: [
      sensorData.current_time,
      sensorData.previous_time,
      sensorData.previous1_time,
      sensorData.previous2_time,
      sensorData.previous3_time,
      sensorData.previous4_time,
      sensorData.previous5_time,
    ],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [
          sensorData.current_temperature,
          sensorData.previous_temperature,
          sensorData.previous1_temperature,
          sensorData.previous2_temperature,
          sensorData.previous3_temperature,
          sensorData.previous4_temperature,
          sensorData.previous5_temperature,
        ],
        borderColor: "rgb(46, 141, 78)",
        backgroundColor: "rgb(46, 141, 78,0.3)",
        fill: "start",
      },
    ],
  };

  const chartData1 = {
    labels: [
      sensorData.current_time,
      sensorData.previous_time,
      sensorData.previous1_time,
      sensorData.previous2_time,
      sensorData.previous3_time,
      sensorData.previous4_time,
      sensorData.previous5_time,
    ],
    datasets: [
      {
        label: "Humidity (%)",
        data: [
          sensorData.current_humidity,
          sensorData.previous_humidity,
          sensorData.previous1_humidity,
          sensorData.previous2_humidity,
          sensorData.previous3_humidity,
          sensorData.previous4_humidity,
          sensorData.previous5_humidity,
        ],
        borderColor: "rgb(46, 141, 78)",
        backgroundColor: "rgb(46, 141, 78,0.3)",
        fill: "start",
      },
    ],
  };

  const chartData2 = {
    labels: [
      sensorData.current_time,
      sensorData.previous_time,
      sensorData.previous1_time,
      sensorData.previous2_time,
      sensorData.previous3_time,
      sensorData.previous4_time,
      sensorData.previous5_time,
    ],
    datasets: [
      {
        label: "Soil Moisture (%)",
        data: [soil, soil1, soil2, soil3, soil4, soil5, soil6],
        borderColor: "rgb(234, 80, 73)",
        backgroundColor: "rgb(234, 80, 73,0.3)",
        fill: "start",
      },
    ],
  };

  const chartData3 = {
    labels: [
      sensorData.current_time,
      sensorData.previous_time,
      sensorData.previous1_time,
      sensorData.previous2_time,
      sensorData.previous3_time,
      sensorData.previous4_time,
      sensorData.previous5_time,
    ],
    datasets: [
      {
        label: "Light Intensity (Lux)",
        data: [
          sensorData.current_light_intensity,
          sensorData.previous_light_intensity,
          sensorData.previous1_light_intensity,
          sensorData.previous2_light_intensity,
          sensorData.previous3_light_intensity,
          sensorData.previous4_light_intensity,
          sensorData.previous5_light_intensity,
        ],
        borderColor: "rgb(234, 80, 73)",
        backgroundColor: "rgb(234, 80, 73,0.3)",
        fill: "start",
      },
    ],
  };

  // const chartData4 = {
  //   labels: [
  //     sensorData.time,
  //     sensorData.time1,
  //     sensorData.time2,
  //     sensorData.time3,
  //     sensorData.time4,
  //     sensorData.time5,
  //   ],
  //   datasets: [
  //     {
  //       label: "Nitrogen (N)",
  //       data: [
  //         sensorData.n,
  //         sensorData.n1,
  //         sensorData.n2,
  //         sensorData.n3,
  //         sensorData.n4,
  //         sensorData.n5,
  //       ],
  //       borderColor: "rgb(46, 141, 78)",
  //       backgroundColor: "rgb(46, 141, 78,0.2)",
  //       fill:'start'
  //     },
  //     {
  //       label: "Phosphorus (P)",
  //       data: [
  //         sensorData.p,
  //         sensorData.p1,
  //         sensorData.p2,
  //         sensorData.p3,
  //         sensorData.p4,
  //         sensorData.p5,
  //       ],
  //       borderColor: "rgb(234, 80, 73)",
  //       backgroundColor: "rgb(234, 80, 73,0.2)",
  //       fill: "start",
  //     },
  //     {
  //       label: "Potassium (K)",
  //       data: [
  //         sensorData.k,
  //         sensorData.k1,
  //         sensorData.k2,
  //         sensorData.k3,
  //         sensorData.k4,
  //         sensorData.k5,
  //       ],
  //       borderColor: "rgba(75, 192, 192, 1)",
  //       backgroundColor: "rgba(75, 192, 192, 0.2)",
  //     },
  //   ],
  // };

  const chartData4 = {
    labels: [
      sensorData.current_time,
      sensorData.previous_time,
      sensorData.previous1_time,
      sensorData.previous2_time,
      sensorData.previous3_time,
      sensorData.previous4_time,
      sensorData.previous5_time,
    ],
    datasets: [
      {
        label: "Nitrogen (N)",
        data: [
          sensorData.current_nitrogen,
          sensorData.previous_nitrogen,
          sensorData.previous1_nitrogen,
          sensorData.previous2_nitrogen,
          sensorData.previous3_nitrogen,
          sensorData.previous4_nitrogen,
          sensorData.previous5_nitrogen,
        ],
        borderColor: "rgb(46, 141, 78)",
        backgroundColor: "rgba(46, 141, 78, 0.5)",
        fill: "start",
      },
      {
        label: "Phosphorus (P)",
        data: [
          sensorData.current_phosphorus,
          sensorData.previous_phosphorus,
          sensorData.previous1_phosphorus,
          sensorData.previous2_phosphorus,
          sensorData.previous3_phosphorus,
          sensorData.previous4_phosphorus,
          sensorData.previous5_phosphorus,
        ],
        borderColor: "rgb(234, 80, 73)",
        backgroundColor: "rgba(234, 80, 73, 0.5)",
        fill: "start",
      },
      {
        label: "Potassium (K)",
        data: [
          sensorData.current_potassium,
          sensorData.previous_potassium,
          sensorData.previous1_potassium,
          sensorData.previous2_potassium,
          sensorData.previous3_potassium,
          sensorData.previous4_potassium,
          sensorData.previous5_potassium,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const chartData5 = {
    labels: [
      sensorData.current_time,
      sensorData.previous_time,
      sensorData.previous1_time,
      sensorData.previous2_time,
      sensorData.previous3_time,
      sensorData.previous4_time,
      sensorData.previous5_time,
    ],
    datasets: [
      {
        label: "Light Intensity (Lux)",
        data: [
          sensorData.current_wind_speed,
          sensorData.previous_wind_speed,
          sensorData.previous1_wind_speed,
          sensorData.previous2_wind_speed,
          sensorData.previous3_wind_speed,
          sensorData.previous4_wind_speed,
          sensorData.previous5_wind_speed,
        ],
        borderColor: "rgba(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        fill: "start",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 25,
        max: 45,
        title: {
          display: false,
          text: "Temperature (°C)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 5,
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
      x: {
        title: {
          display: false,
          text: "Time (hours)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const options1 = {
    scales: {
      y: {
        min: 50,
        max: 70,
        title: {
          display: false,
          text: "Humidity (%)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 5,
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
      x: {
        title: {
          display: false,
          text: "Time (hours)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const options2 = {
    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: false,
          text: "Soil Moisture (%)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 25,
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
      x: {
        title: {
          display: false,
          text: "Time (hours)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const options3 = {
    scales: {
      y: {
        min: 700,
        max: 800,
        title: {
          display: false,
          text: "Light Intensity (Lux)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 25,
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
      x: {
        title: {
          display: false,
          text: "Time (hours)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const options4 = {
    scales: {
      y: {
        min: 0,
        max: 200,
        title: {
          display: false,
          text: "N , P , and K values in soil (ppm)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 50,
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
      x: {
        title: {
          display: false,
          text: "Time (hours)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const options5 = {
    scales: {
      y: {
        min: 0,
        max: 200,
        title: {
          display: false,
          text: "Wind Speed (cm/s)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 50,
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
      x: {
        title: {
          display: false,
          text: "Time (hours)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>

      <div className="dash1">
        <h2>Sensor Data Over Time</h2>
        <p>Visual representation of sensor data over time</p>
        <div className="dash2" style={{ marginBottom: "3%" }}>
          <div className="dash50">
            <h3>Temperature</h3>
            <Line data={chartData} options={options} />
          </div>
          <div className="dash50">
            <h3>Humidity</h3>
            <Line data={chartData1} options={options1} />
          </div>
        </div>
        <div className="dash2" style={{ marginBottom: "3%" }}>
          <div className="dash50">
            <h3>Soil Moisture</h3>
            <Line data={chartData2} options={options2} />
          </div>
          <div className="dash50">
            <h3>Light Intensity</h3>
            <Line data={chartData3} options={options3} />
          </div>
        </div>
        <div className="dash2">
          <div className="dash50">
            <h3>Soil Quailty</h3>
            <Bar data={chartData4} options={options4} />
          </div>
          <div className="dash50">
            <h3>Wind Speed</h3>
            <Line data={chartData5} options={options5} />
          </div>
        </div>
      </div>

      <div className="dash1">
        <h2>Dashboard</h2>
        <p>Real-time monitoring of your fields</p>
        <div className="dash2">
          <div className="dash3">
            <p>Temperature</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                marginTop: "1%",
                marginBottom: "1%",
                textAlign: "center",
              }}
            >
              {sensorData.current_temperature} {"\u00B0"}C
            </p>
            {difftemperature >= 0 ? (
              <p style={{ color: "green" }}>
                +{difftemperature}
                {"\u00B0"}C
              </p>
            ) : (
              <p style={{ color: "rgb(234, 80, 73)" }}>
                {difftemperature}
                {"\u00B0"}C
              </p>
            )}
          </div>

          <div className="dash3">
            <p>Humidity</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                marginTop: "1%",
                marginBottom: "1%",
                textAlign: "center",
              }}
            >
              {sensorData.current_humidity} %
            </p>
            {diffhumidity >= 0 ? (
              <p style={{ color: "green" }}>+{diffhumidity} %</p>
            ) : (
              <p style={{ color: "rgb(234, 80, 73)" }}>{diffhumidity} %</p>
            )}
          </div>

          <div className="dash3">
            <p>Light Intensity</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                marginTop: "1%",
                marginBottom: "1%",
                textAlign: "center",
              }}
            >
              {sensorData.current_light_intensity} Lux
            </p>
            {difflight >= 0 ? (
              <p style={{ color: "green" }}>+{difflight} Lux</p>
            ) : (
              <p style={{ color: "rgb(234, 80, 73)" }}>{difflight} Lux</p>
            )}
          </div>

          <div className="dash3">
            <p>Soil Moisture</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                marginTop: "1%",
                marginBottom: "1%",
                textAlign: "center",
              }}
            >
              {soil} %
            </p>
            {diffsoil >= 0 ? (
              <p style={{ color: "green" }}>+{diffsoil} %</p>
            ) : (
              <p style={{ color: "rgb(234, 80, 73)" }}>{diffsoil} %</p>
            )}
          </div>

          <div className="dash3">
            <p>Wind Speed</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                marginTop: "1%",
                marginBottom: "1%",
                textAlign: "center",
              }}
            >
              {sensorData.current_wind_speed} CM/S
            </p>
            {diffspeed >= 0 ? (
              <p style={{ color: "green" }}>+{diffspeed} CM/S</p>
            ) : (
              <p style={{ color: "rgb(234, 80, 73)" }}>{diffspeed} CM/S</p>
            )}
          </div>
        </div>
      </div>

      <div className="dash4">
        <h2>Current Location</h2>
        <p>Real-time location of your fields</p>
        <div className="dash5">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3916.340156854884!2d${sensorData.longitude}!3d${sensorData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714217822268!5m2!1sen!2sin`}
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe width="650" height="450" src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=wind&product=ecmwf&level=surface&lat=7.101&lon=76.992&detailLat=11.014&detailLon=76.994&detail=true&pressure=true&message=true"></iframe>
        </div>
      </div>

      <div className="dash6">
        <h2>Detailed Weather Report</h2>
        <p>Comprehensive weather information and forecasts</p>
        <div className="dash7">
          <div className="dash8">
            <p>Temperature Over Time</p>
            <p style={{ fontSize: "30px", fontWeight: "700", textAlign: 'center', color: '#4F7D96' }}>
              {starttemperature}
              {"\u00B0"}C - {endtemperature}
              {"\u00B0"}C
            </p>
            <p style={{ color: "rgb(70, 70, 70)" }}>24 Hours</p>
          </div>
          <div className="dash8">
            <p>Precipitation Over Time</p>
            <p style={{ fontSize: "30px", fontWeight: "700", textAlign: 'center', color: '#4F7D96' }}>
              0.5mm - 5mm
            </p>
            <p style={{ color: "rgb(70, 70, 70)" }}>24 Hours</p>
          </div>
          <div className="dash8">
            <p>Wind Speed Over Time</p>
            <p style={{ fontSize: "30px", fontWeight: "700", textAlign: 'center', color: '#4F7D96' }}>
              {startspeed}MPH - {endspeed}MPH
            </p>
            <p style={{ color: "rgb(70, 70, 70)" }}>24 Hours</p>
          </div>
        </div>
      </div>

      <div className="dash9">
        <div className="dash10">
          <h2>Historical Data</h2>
          <p>Analyzing historical data reveals trends and insights</p>
          <div className="dash11">
            <table className="historical-table">
              <tbody>
                <tr id="dash12" style={{ border: 'none' }}>
                  <td>Date</td>
                  <td>Temperature</td>
                  <td>Humidity</td>
                  <td>Light Intensity</td>
                  <td>Soil Moisture</td>
                  <td>Wind Speed</td>
                </tr>

                <tr>
                  <td>{sensorData.current_time}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.current_temperature} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.current_humidity} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.current_light_intensity} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.current_wind_speed} MPH</td>
                </tr>

                <tr>
                  <td>{sensorData.previous_time}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.previous_temperature} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous_humidity} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous_light_intensity} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil1} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous_wind_speed} MPH</td>
                </tr>
                <tr>
                  <td>{sensorData.previous1_time}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.previous1_temperature} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous1_humidity} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous1_light_intensity} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil2} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous1_wind_speed} MPH</td>
                </tr>
                <tr>
                  <td>{sensorData.previous2_time}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.previous2_temperature} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous2_humidity} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous2_light_intensity} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil3} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous2_wind_speed} MPH</td>
                </tr>
                <tr>
                  <td>{sensorData.previous3_time}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.previous3_temperature} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous3_humidity} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous3_light_intensity} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil4} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous3_wind_speed} MPH</td>
                </tr>
                <tr>
                  <td>{sensorData.previous4_time}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.previous4_temperature} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous4_humidity} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous4_light_intensity} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil5} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous4_wind_speed} MPH</td>
                </tr>
                <tr style={{ border: 'none' }}>
                  <td>{sensorData.previous5_time}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.previous5_temperature} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous5_humidity} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous5_light_intensity} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil6} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.previous5_wind_speed} MPH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
