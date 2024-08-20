import "./App.css";

// Importing Libraries
import { Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'

// Importing Components
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import HomePage from "./components/HomePage";

function App() {

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/superhero">Super Heroes</Link>
            </li>
            <li>
              <Link to="/rqSuperhero">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/superhero" element={<SuperHeroesPage />} />
          <Route path="/rqSuperhero" element={<RQSuperHeroesPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen = {false} position ='bottom-right' />
      </QueryClientProvider>
    </>
  );
}

export default App;
