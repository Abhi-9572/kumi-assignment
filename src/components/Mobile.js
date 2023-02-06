import React from "react";
import './main.css'
const Mobile = ({category,handlerClick}) => {
  return (
    <div className="mobile">
      {category.map((d) => {
        console.log(d)
        return (
            <div>
          <button
            onClick={() => handlerClick(d)}
            key={d.id}
            value=""
            className="topbtn"
          >
            {d.substring(0,10)}
          </button>
          </div>
        );
      })}
    </div>
  );
};

export default Mobile;