import React from "react";
import React, { useState } from 'react';
import "./style.css";

function ToolBar() {
  const [value,setValue] = useState();
  const handler = (event) => {
    setValue(event.target.value);
  }
  let filters = ["All", "Websites", "Flayers", "Business Cards"];
  const style = {display: "flex", flexWrap: "wrap"};

  return (
      <div>
        <select value={value} onChange={handler} name="filter" id="filter">
          {filters.map((item,idx) => (
            <option id={idx}>{item}</option>
            // <div id={idx} onClick={() => handler(item)}>{item}</div>
          ))}
        </select>
        <div style={style}>
          <ProjectList value={value}/>
        </div>
      </div>
  );
}

function ProjectList(props) {

  const value = props.value;

  const imagesArray = [{
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers"
  }];

    if (value == "All") {

      return (
        <>
          {imagesArray.map((item) => (
            <div>
              <img src={item.img} alt="" /> 
            </div>
          ))}
        </>
      );

    } else {

      return (
        <>
          {imagesArray.map((item) => (
            item.category === value ?  <div>
                                          <img src={item.img} alt="" /> 
                                        </div>
                                    : <></> 
          ))}
        </>
      );
    }
}


export default function App() {

  return (
    <div>
        <ToolBar />
    </div>
  );
}
