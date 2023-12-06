import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Navigate to="/home" />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      <Navigation />
    </>
  );
};

export default App;
