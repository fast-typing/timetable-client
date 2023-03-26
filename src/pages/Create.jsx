import React, { useEffect, useState } from "react";
import TimeTable from "../components/TimeTable";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
export default function Create() {
  const navigate = useNavigate();
  const [allLesons, setAllLesons] = useState([]);
  const [count, setCount] = useState([""]);
  const [date, setDate] = useState();
  const tables = count.map((item) => {
    return <TimeTable setAllLesons={setAllLesons} setCount={setCount} />;
  });
  const handleSubmit = () => {
    axios
      .post("/", {
        date: date,
        groups: allLesons,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert("Ошибка при создании расписания", err);
      });
  };
  return (
    <main>
      <div className="numbering">
        <p>1 пара</p>
        <p>2 пара</p>
        <p>3 пара</p>
        <p>4 пара</p>
      </div>
      <div className="tables">{tables}</div>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleSubmit}>Сохранить</button>
    </main>
  );
}
