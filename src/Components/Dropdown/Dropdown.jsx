import React from "react";
import './Dropdown.scss'

const data = [
  {
    title: "mangg",
    url: "",
    list: [{title:""},],
  },
  {
    title: "deng",
    url: "",
    list: [
      {
        title: "dengo",
        url: "",
      },
      {
        title: "denga",
        url: "",
      },
    ],
  },
  {
    title: "woeng",
    url: "",
  },
];

function Dropdown() {
  return (
    <>
      <div className="dropdown">
        {data.map((data, index) => (
          <div key={index} >
            <li className="dropdown-data">{data.title}</li>
            {data.list &&
              data.list.map((list, index) => <li className="dropdown-list" key={index}>{list.title}</li>)}
          </div>
        ))}
      </div>
    </>
  );
}

export default Dropdown;
