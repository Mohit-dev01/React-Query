import { useState } from "react";

import "./App.css";
import { QueryClientProvider , QueryClient} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./components/Home.page";
import { RQSuperherospage } from "./components/RQSuperheros.page";
import { Superherospage } from "./components/Superheros.page";

const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/super-heroes" element={<Superherospage />}></Route>
            <Route path="/rq-super-heroes" element={<RQSuperherospage />}></Route>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
