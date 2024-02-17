import React from "react";

import { TbSearch } from "react-icons/tb";
import "./Schedule.css";

const Schedule = () => {
  const [scheduleData, setScheduleData] = React.useState(null);
  const [dropdownValue, setDropdownValue] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        fetch("/scheduleData.json")
          .then((response) => response.json())
          .then((data) => {
            setScheduleData(data);
            setLoading(false);
          })
          .catch((error) => console.log(error));
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <div className="Schedule">
      {loading ? (
        <div className="Loading">Loading...</div>
      ) : (
        <div>
          <div className="Schedule-Header">
            <p>VACCINATION SCHEDULE</p>
            <div className="Schedule-Header-Right">
              <div className="Searchbar-Icon">
                <TbSearch />
              </div>
              <div className="dropdown">
                <select
                  value={dropdownValue}
                  onChange={(e) => {
                    setDropdownValue(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    By Type
                  </option>
                  <option value="All">All</option>
                  <option value="Overdue">Overdue</option>
                  <option value="Noncore">Noncore</option>
                  <option value="Core">Core</option>
                </select>
              </div>
            </div>
          </div>
          <div className="Schedule-Table">
            <div className="Schedule-Table-Header">
              <p className="Table-Name">Name</p>
              <p className="Table-Type-Head">Type</p>
              <p className="Table-Date">Date</p>
              <p className="Table-Veterinar-Head">Veterinar</p>
            </div>
            {scheduleData &&
              scheduleData.map((item, index) => {
                if (
                  dropdownValue === "" ||
                  dropdownValue === "All" ||
                  item.type === dropdownValue
                )
                  return (
                    <div key={index} className="Schedule-Table-Item">
                      <p className="Table-Name">{item.name}</p>
                      <div className="Table-Type-Head">
                        <div className={"Table-Type " + item.type}>
                          {item.type}
                        </div>
                      </div>
                      <p className="Table-Date">{item.date}</p>
                      <div className="Table-Veterinar-Head">
                        {item.veterinar ? (
                          <p className="Table-Veterinar">{item.veterinar}</p>
                        ) : (
                          <p className="Table-Veterinar Find">Find veterinar</p>
                        )}
                      </div>
                    </div>
                  );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
