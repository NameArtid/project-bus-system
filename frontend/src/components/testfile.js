import React from "react";
import { Button } from "react-bootstrap";

export default function Testfile() {
  // const num = [1,2,3,4,5,6,7,8,9,10]
  function createNum() {
    var num = [];
    for (var i = 1; i <= 30; i++) {
      num.push(i);
    }
    // console.log(num)
    return num;
  }

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => (
      <h3 key={number.toString()}>{number}</h3>
    ));
    return <p>{listItems}</p>;
  }

  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>test</h1>
      <br />
      {/* {console.log(createNum())} */}
      {createNum().map((num) => {
        <p key={num}>{num}</p>;
      })}
      {/* {num.map((num)=><p>{num}</p>)} */}
      <NumberList numbers={numbers} />
    </div>
  );
}
