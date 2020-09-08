import React, { useState } from "react";


function List({ data }) {
  const [coVal, setCoVal] = useState('');
 
  const ff = (val) => {
    // console.log("copy clicked");
    // const cText = `https://rel.ink/${val}`;
    // setCoVal(cText);
    //  console.log(coVal);
  };
  return (
    <>
      {data.map((el) => (
        <li className="listContainer__card" key={el.hashid}>
          <div className="listContainer__col d-flex-center">{el.url}</div>
          <div className="listContainer__col text-right d-flex-center content-right">
            <a href={`https://rel.ink/${el.hashid}`} target="_blank">
              https://rel.ink/{el.hashid}{" "}
            </a>{" "}
            {/* <button className="copy" onClick={setCopied}>
              
              Copy {isCopied ? "Yes! 👍" : "Nope! 👎"}
            </button> */}
          </div>
        </li>
      ))}
    </>
  );
}

export default List;
