import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./assets/scss/global.scss";
import { AppHeader } from "./components/AppHeader";
import { Lobby } from "./views/Lobby";
import { CodeblockDetails } from "./views/CodeblockDetails";
import { CodeblockEdit } from './views/CodeblockEdit';

function App() {
  return (
    <Router>
      <section className="main-app">
        <AppHeader />
        <main className="container">
          <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="/codeblock/:id" element={<CodeblockDetails />} />
            <Route path="/edit/:id?" element={<CodeblockEdit />} />
          </Routes>
        </main>
      </section>
    </Router>
  );
}

export default App;
