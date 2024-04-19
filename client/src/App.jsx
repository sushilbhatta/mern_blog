import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Projects from "./pages/Projects";
import DashBoard from "./pages/DashBoard";
import Header from "./component/Header";
import Footer from "./component/FooterCom";
import PrivateRoute from "./component/PrivateRoute";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='sign-up' element={<Signup />} />
        <Route path='/projects' element={<Projects />} />
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path='/dashboard' element={<DashBoard />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
