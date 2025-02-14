import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginCard from "./components/login";
import TestComponent from "./components/test";
import NoMatch from "./components/noMatch";
import Dashboard from "./components/dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/test" element={<TestComponent />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="1st" />
            <Route path="2nd" />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
