import React, { useState } from "react";
import "./App.css";
import Web3 from "web3";
import { Account } from "web3-core";
import { AbiItem } from "web3-utils/types";
import abi from "./abi.json";

function App() {
  const web3 = new Web3(
    Web3.givenProvider || process.env.REACT_APP_CHAIN_WS_URL
  );

  const [account, setAccount] = useState<Account>();
  const bytecode = SimpleStorage.bytecode;
  const deployContract = () => {
    const jsonInterface = abi;
    const contract = new web3.eth.Contract(jsonInterface);
  };
  return (
    <div className="App">
      Shuffld
      <div>Current Account: {account?.address}</div>
      <button onClick={() => setAccount(web3.eth.accounts.create())}>
        Create New Account
      </button>
      <button onClick={() => console.log("deploying contract...")}>
        Deploy Contract
      </button>
    </div>
  );
}

export default App;
