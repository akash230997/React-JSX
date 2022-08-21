// import React from "react";
// import ReactDOM from "react-dom";

// JSX:
// ReactDOM.render(
//   <React.Fragment>
//     <h1>This is My First Template Checking Elem And This is JSX</h1>
//     <p>In JSX We put out html elems in it and we render nd Arrange ourdata according to need.</p>
//     <ol>
//       <li>MovieOne</li>
//       <li>MovieTwo</li>
//       <li>MovieThree</li>
//       <li>MovieFour</li>
//       <li>MovieFive</li>
//     </ol>
//   </React.Fragment>, document.getElementById('root'));

// JSX EXPRESSIONS:
// import React from 'react';
// import ReactDOM from 'react-dom';

// const fName = 'Akash';
// const lName = 'Meena';
// let Number = 5;
// let Number2 = 10;

// ReactDOM.render(        //syntactical sugar for fragments.
//   <>
//   <h1>HelloWOrld!!😊</h1>
//     {`My Name is ${fName}  ${lName}`}<br/>
//       {Number}<br/>
//         {Number2}<br/>
//           {Number2 + Number} <br/> {Math.random()}
//   </>,
//   document.getElementById('root')
// )

// import React from 'react';
// import ReactDOM from 'react-dom';

// const myName = 'Akash Meena';
// let date = new Date();
// console.log(date.toDateString());
// let hrs = date.getHours();
// let mins = date.getMinutes();
// let secs = date.getSeconds();

// const funcTime = () =>{
//   if(hrs > 12){
//     return 'PM';
//   }else{
//     return 'AM';
//   }
// }
// funcTime();

// const funcTime2 = () => {
//   if (hrs > 12) {
//     return `${hrs - 12} : ${mins} ${secs} PM`;
//   } else {
//     return `${hrs} : ${mins} ${secs} AM`;
//   }
// }
// funcTime2();
// ReactDOM.render(
//   <React.Fragment>
//     <h1 contentEditable = 'true'>{`Hello, My Name is ${myName}`}</h1>
//     <p>{`Today's Date is ${date.toDateString()} - DateMethod 1`}</p>
//     <p>{`Today's Date is ${date.toLocaleDateString()} - DateMethod 2`}</p>
//     <p>{`CurrentTime is ${date.toLocaleTimeString()} - Method 1`}</p>
//     <p>{`CurrentTime is ${funcTime2()} - Method 2`}</p>
//     <p>{`CurrentTime is ${date.getHours() - 12} : ${date.getMinutes()} : ${date.getSeconds()} ${funcTime()} - Method 3`}</p>
//   </React.Fragment>
  
//   ,document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const img1 = 'https://picsum.photos/300/300';
const img2 = 'https://picsum.photos/400/300';
const img3 = 'https://picsum.photos/200/300';
const link = 'https://www.geeksforgeeks.org/';

const heading = {
  color: '#7FB77E',
  textAlign: 'center',
  textShadow:' 3px 3px 2px sandybrown',
  textDecoration: 'underline',
  textUnderlineOffset:' 10px',
  margin: '10px 0 50px 27%'
}

// const dateCheck = new Date(2022, 5, 2, 20);
// new Date(year, monthIndex, day, hours)
let dateCheck = new Date();

const TimeFunc = () =>{
  let hrs2 = dateCheck.getHours();
  console.log(hrs2);
  if (hrs2 > 0 && hrs2 <= 10){
    const Morning = {
      color: "#277BC0"
    }
    return <span style={Morning}>GOOD MORNING!!</span>;
  }else if(hrs2 > 10 && hrs2 <= 17){
    const Afternoon = {
      color: "#F0E161"
    }
    console.log("GOOD AFTERNOON");
    return <span style = {Afternoon}>GOOD AFTERNOON!!</span>;
  } else if (hrs2 > 17 && hrs2 <= 22){
    const Evening = {
      color: "#FF7F3F"
    }
    return <span style={Evening}>GOOD EVENING!!</span>;
    // console.log("GOOD EVENING");
  } else if (hrs2 > 22 && hrs2 <= 24){
    const Night = {
      color: "#293462"
    }
    return <span style={Night}>GOOD NIGHT🌟</span>;
    // console.log("GOOD NIGHT🌟");
  }else{
    return 'Jai Mata DI'
  }

}

ReactDOM.render(
  <React.Fragment>
    <h1 className='headR'>REACT WISHING PEOPLE</h1>
    {/* <h1 className='headOne' style={{ color: 'rgba(165, 42, 42, 0.705)', textAlign: 'center', margin: '100px 0' }}>'WALLPAPERS HD'</h1> */}
    <h1 className='headOne' style={heading}>HELLO AKASH 😊 {TimeFunc()}</h1>
    {/* <h1 className='headOne' style={heading}>'HELLO AKASH 😊 <span style={after}>GOOD MORNING✨</span>'</h1> */}
    {/* <h1 className='headOne' style={heading}></h1> */}
    <div className='imagesLayout'>
      <img src={img1} alt='randomImg' />
      <img src={img2} alt='randomImg2' />
      <a href={link} target='_Hello'><img src={img3} alt='randomImg3' /></a>
    </div>
  </React.Fragment>,
  document.getElementById('root')
);
