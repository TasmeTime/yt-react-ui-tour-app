import styled from "styled-components";
import Colors from "./assets/Colors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import InfoPage from "./components/InfoPage";

const AppEl = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppEl>
        <Routes>
          <Route excat path="/info" element={<InfoPage />} />
          <Route excat path="/" element={<HomePage />} />
        </Routes>
      </AppEl>
    </Router>
  );
}

export default App;
