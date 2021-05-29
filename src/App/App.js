// import "./App.css";
import Navbar from "../Navbar";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
      </div>
    </AuthProvider>
  );
}

export default App;
