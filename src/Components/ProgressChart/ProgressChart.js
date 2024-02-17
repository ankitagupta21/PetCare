import React from "react";
import "./ProgressChart.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressChart() {
  const [progressData, setProgressData] = React.useState(null);
  const [dropdownValue, setDropdownValue] = React.useState([
    "Daily",
    "Daily",
    "Daily",
  ]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        fetch("/progressData.json")
          .then((response) => response.json())
          .then((data) => {
            setProgressData(data);
            setLoading(false);
          })
          .catch((error) => console.log(error));
      }, 2000);
    };
    fetchData();
  }, []);
  return (
    <>
      {!loading ? (
        <div className="progress">
          {progressData &&
            progressData.map((item, index) => {
              return (
                <div className="progress-item">
                  <div className="Chart-header">
                    <p>{item.name}</p>
                    <div className="dropdown">
                      <select
                        value={dropdownValue[index]}
                        onChange={(e) => {
                          const newArr = [...dropdownValue];
                          newArr[index] = e.target.value;
                          setDropdownValue(newArr);
                        }}
                      >
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                      </select>
                    </div>
                  </div>
                  {dropdownValue[index] === "Daily" ? (
                    <div className="progess-bar">
                      <CircularProgressbar
                        value={item.daily}
                        text={`${item.daily}%`}
                        styles={{
                          path: {
                            stroke:
                              item.daily >= 70
                                ? "rgba(39, 164, 104, 1)"
                                : item.daily >= 50
                                ? "rgba(242, 167, 53, 1)"
                                : "rgba(229, 55, 97, 1)",
                          },
                          trail: {
                            stroke: "rgba(242, 245, 250, 1)",
                            strokeWidth: 7,
                          },
                          text: {
                            fill: "rgba(11, 28, 51, 1)",
                            fontSize: "1.5vw",
                          },
                        }}
                      />
                    </div>
                  ) : dropdownValue[index] === "Weekly" ? (
                    <div className="progess-bar">
                      <CircularProgressbar
                        value={item.weekly}
                        text={`${item.weekly}%`}
                        styles={{
                          path: {
                            stroke:
                              item.weekly >= 70
                                ? "rgba(39, 164, 104, 1)"
                                : item.weekly >= 50
                                ? "rgba(242, 167, 53, 1)"
                                : "rgba(229, 55, 97, 1)",
                            strokeWidth: 7,
                          },
                          trail: {
                            stroke: "rgba(242, 245, 250, 1)",
                            strokeWidth: 7,
                          },
                          text: {
                            fill: "rgba(11, 28, 51, 1)",
                            fontSize: "1.5vw",
                          },
                        }}
                      />
                    </div>
                  ) : dropdownValue[index] === "Monthly" ? (
                    <div className="progess-bar">
                      <CircularProgressbar
                        value={item.monthly}
                        text={`${item.monthly}%`}
                        styles={{
                          path: {
                            stroke:
                              item.monthly >= 70
                                ? "rgba(39, 164, 104, 1)"
                                : item.monthly >= 50
                                ? "rgba(242, 167, 53, 1)"
                                : "rgba(229, 55, 97, 1)",
                            strokeWidth: 7,
                          },
                          trail: {
                            stroke: "rgba(242, 245, 250, 1)",
                            strokeWidth: 7,
                          },
                          text: {
                            fill: "rgba(11, 28, 51, 1)",
                            fontSize: "1.5vw",
                          },
                        }}
                      />
                    </div>
                  ) : (
                    <div className="progess-bar">
                      <CircularProgressbar
                        value={item.yearly}
                        text={`${item.yearly}%`}
                        styles={{
                          path: {
                            stroke:
                              item.yearly >= 70
                                ? "rgba(39, 164, 104, 1)"
                                : item.yearly >= 50
                                ? "rgba(242, 167, 53, 1)"
                                : "rgba(229, 55, 97, 1)",
                            strokeWidth: 7,
                          },
                          trail: {
                            stroke: "rgba(242, 245, 250, 1)",
                            strokeWidth: 7,
                          },
                          text: {
                            fill: "rgba(11, 28, 51, 1)",
                            fontSize: "1.5vw",
                          },
                        }}
                        width={50}
                        height={50}
                      />
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      ) : (
        <div className="Loading">Loading...</div>
      )}
    </>
  );
}

export default ProgressChart;
