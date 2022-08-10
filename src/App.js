import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Form from './pages/Form';
import Clock from './pages/Clock';
import Todo from './pages/Todo';
import Counter from './pages/Counter';


function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="clock" element={<Clock />} />
        <Route path="todo" element={<Todo />} />
        <Route path="counter" element={<Counter />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
