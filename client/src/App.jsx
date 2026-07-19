import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          <Route index element={<Home />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/dashboard/create"
            element={<CreateListing />}
          />

          <Route
            path="/dashboard/edit/:id"
            element={<EditListing />}
          />

        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;