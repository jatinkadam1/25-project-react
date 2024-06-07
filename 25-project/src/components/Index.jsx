import React, { useState } from "react";
import data from "./data";

const Index = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiselection, setenableMultiselection] = useState(false);
  const [multi, setMulti] = useState([]);
  function handleClick(selectedId) {
    setSelected(selectedId === selected ? null : selectedId);
  }

  function handleMultiselection(selectedId) {
    let arr = [...multi];
    const indexes = arr.indexOf(selectedId);
    console.log(indexes);
    if (indexes === -1) arr.push(selectedId);
     else arr.splice(indexes, 1);
      setMulti(arr);
      console.log(selected, multi);
  }

  return (
    <div className="flex flex-col items-center justify-center text-center bg-customColor1 w-full h-screen">
      <button
        onClick={() => setenableMultiselection(!enableMultiselection)}
        className="bg-customColor2 w-48 h-10 border-2 border-black rounded-lg mb-5 hover:bg-customColor3 "
      >
        Enable MultiSelection
      </button>
      <div className="cursor-pointer w-1/2 bg-customColor2 h-1/2 items-center flex justify-center rounded-lg border-black border-2 text-pretty">
        {data && data.length > 0 ? (
          <div className="w-2/3 h-2/3 flex flex-col justify-center items-center text-center">
            {data.map((selectedData) => (
              <div
                className="bg-customColor3 border-black border-2 w-1/2 h-auto flex flex-col justify-center items-center rounded-lg mb-3"
                onClick={
                  enableMultiselection
                    ? ()=> handleMultiselection(selectedData.id)
                    : () => handleClick(selectedData.id)
                }
              >
                <h3>{selectedData.question}</h3>
                {selected === selectedData.id ? null : <span>+</span>}
                {selected === selectedData.id || multi.indexOf(selectedData.id) !== -1 ? (
                  <div className=" w-auto h-auto flex justify-center items-center rounded-lg mt-2">
                    {selectedData.answer}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
};

export default Index;
