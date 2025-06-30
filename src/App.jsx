import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

import AuthProvider from "./components/Auth/AuthProvider";
import PublicRoute from "./components/Auth/PublicRoute";
import PrivateRoute from "./components/Auth/PrivateRoute";

import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";

import Profile from "./Users/Profile/Profile";
import LandingPage from "./Users/LandingPage/LandingPage";
import Home from "./Users/Home/Home";
import Cart from "./Users/Cart/Cart";

import MainLayout from "./components/Layout/MainLayout";
import AboutUs from "./Users/AboutUS/AboutUs";
import ContactUs from "./Users/ContactUs/ContactUs";

function App() {
  return (
    <Provider store={appStore}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicRoute />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </Route>

            <Route element={<MainLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />

              <Route element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
