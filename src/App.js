import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import { tambah, kurang } from "./Redux/Action/IniSiaction";

function App() {
  const tampilandata = useSelector((state) => state.IniSireducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>{tampilandata.nilai}</div>
      <div>
        <button onClick={() => dispatch(tambah())}>Tambah</button>
        <button onClick={() => dispatch(kurang())}>Kurang</button>
      </div>
    </div>
  );
}

export default App;
