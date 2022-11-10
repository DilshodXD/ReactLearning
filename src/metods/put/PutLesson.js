import axios from "axios";
import React, { useEffect, useState } from "react";

function PutLesson() {
  const [updatedAt, setUpdate] = useState(null);

  useEffect(() => {
    axios.put("https://reqres.in/api/articels/1").then((res) => {
      setUpdate(res.data.updatedAt);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <div className="card">
        <div className="header">Put req</div>
        <div className="body">Returned update {updatedAt}</div>
      </div>
    </div>
  );
}

export default PutLesson;
