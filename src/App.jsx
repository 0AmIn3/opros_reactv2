import { useEffect, useState } from "react";

import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import AnswersV1 from "./pages/AnswersV1";
import AnswersV2 from "./pages/AnswersV2";
import ResultV2 from "./pages/ResultV2";
import ResultV3 from "./pages/ResultV3";
import Register from "./pages/Register";
import AnswersV3 from "./pages/AnswersV3";
import ResultV1 from "./pages/ResultV1";
import Admin from "./pages/Admin";
import AdminPanel from "./pages/AdminPanel";
import AnswersPage from "./pages/AnswersPage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Register />} />

      <Route path="/:copid" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:copid/poll/:id" element={<AnswersPage />} />
        <Route path="/:copid/result/:id" element={<ResultPage />} />
      </Route>

      <Route path="/nedminRegister" element={<Admin />} />
      <Route path="/panel" element={<AdminPanel />} />
    </Routes>
  );
}
{
  /* <Route  path="/poll/:id" element={<AnswersPage/>} />
        <Route  path="/pollresult/:id" element={<ResultPage />} /> */
}
export default App;
