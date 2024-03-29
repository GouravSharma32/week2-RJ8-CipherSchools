
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Header from "./components/Header";
import SumNumbers from "./components/SumNumbers";
import TaskScreen from "./components/TaskScreen";
import CounterComponent from "./components/CounterComponent";
import Photos from "./components/Photos";
import higherOrderComponent from "./components/HOC";

// import Name from"./components/Name";

const App =  () => {
  const TestApp = higherOrderComponent(() => {
    return <div>Test App</div>;
    });

  return (
      <div>
        <BrowserRouter>
        <Header />
        <Routes>
        <Route path={"/"} element={<h1>This is on Home Page</h1>} />
            <Route path={"/contact"} element={<h1>This is on Contact Page</h1>}/>
            <Route path={"/about"} element={<h1>This is on About Page</h1>} />
            <Route path={"/signup"} element={<SignUpForm/>}/>
            <Route path={"/signup"} element={<SignUpForm />}/>
            <Route path={"sum"} element={<SumNumbers />} />
            <Route path={"/tasks"} element={<TaskScreen />} />
            <Route path={"/counter"} element={<CounterComponent />} />
            <Route path={"/photos"} element={<Photos/>} />
            <Route path={"/test"} element={<TestApp/>} />
            <Route path={"/sample"} element={<SampleRenderProps/>} />

          </Routes>
        </BrowserRouter>
      </div>
  );
};



export default App;