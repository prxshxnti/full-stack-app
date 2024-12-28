import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className="flex w-full h-screen">
        <Routes>
          {/* Sign In Route */}
          <Route
            path="/"
            element={
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="p-8 mt-10 lg:mt-20">
                  <Form />
                </div>
              </div>
            }
          />
          {/* Register Route */}
          <Route
            path="/register"
            element={
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="p-8 mt-10 lg:mt-20">
                  <Register />
                </div>
              </div>
            }
          />
        </Routes>

        {/* Right Side Design for Both Pages */}
        <div className="hidden relative lg:flex h-full items-center justify-center bg-gray-200 w-1/2">
          <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
        </div>
      </div>
    </Router>
  );
}

export default App;
