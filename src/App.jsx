import { useEffect, useState } from "react";

import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import AnswersV1 from "./pages/AnswersV1";
import AnswersV2 from "./pages/AnswersV2";
import ResultV2 from "./pages/ResultV2";
import AnswersV3 from "./pages/AnswersV3";
import ResultV3 from "./pages/ResultV3";
import Register from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/answersV1" element={<AnswersV1 />} />
        <Route path="/jkjoisdflk24234" element={<AnswersV2 />} />
        <Route path="/pjkjoisdflk24234" element={<ResultV2 />} />
        <Route path="/wer23" element={<AnswersV3 />} />
        <Route path="/pwer23" element={<ResultV3 />} />
      </Route>
    </Routes>
  );
}

export default App;
