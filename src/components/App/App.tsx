import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
