import React, { useEffect, useState } from "react";
import TimeTable from "../components/TimeTable";
import axios from "../axios";
import { useParams } from "react-router-dom";
export default function Main() {
  const params = useParams();
  const [allLesons, setAllLesons] = useState([]);
  useEffect(() => {
    axios
      .get(`/${params.id}`)
      .then((res) => {
        setAllLesons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(allLesons);
  const tables = allLesons?.groups?.map((item) => {
    return (
      <div className="table">
        <div className="lessons-of-group">
          <input type="text" disabled value={item.group} />
          {item.lessons.map((lesson) => (
            <div className="lesson">
              {lesson.title} <br /> {lesson.teacher} <br /> {lesson.cabinet}
            </div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <main>
      <h1>{allLesons?.date}</h1>
      <div className="numbering">
        <p>1 пара</p>
        <p>2 пара</p>
        <p>3 пара</p>
        <p>4 пара</p>
      </div>

      <div className="tables">{tables}</div>
    </main>
  );
}
