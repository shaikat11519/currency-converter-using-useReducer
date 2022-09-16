import React, { useReducer } from "react";
// import { useState } from 'react';
import reducer from "../../utils/reducer";
import './index.css';
const intialState = {
  tk: 0,
  usd: 0,
};

const CurrencyConvater = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const takaToDollar = (e) => {
    console.log(e.target.value);
    return dispatch({
      type: "TAKA_TO_DOLLAR",
      payload: {
        currency: e.target.value,
      },
    });
  };

  const dollarToTaka = (e) => {
    console.log(e.target.value);
    return dispatch({
      type: "DOLLAR_TO_TAKA",
      payload: {
        currency: e.target.value,
      },
    });
  };

  return (
    <div className="main">
      <h2>Currency Converter</h2>
      <section>
        <p>BDT</p>
        <input className="taka"
          value={state.tk}
          type="number"
          name="bdt"
          onChange={takaToDollar}
        />
      </section>
      <section>
        <p>USD</p>
        <input className="usd"
          value={state.usd}
          type="number"
          name="usd"
          onChange={dollarToTaka}
        />
      </section>
    </div>
  );
};

export default CurrencyConvater;
