// import "./App.css";
import Navbar from "../Navbar";
import { AuthProvider } from "../context/AuthContext";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(null);

  const getBrowserTheme = () => {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
  };

  const onBrowserThemeChange = (callback) => {
    const mediaQueryList = getBrowserTheme();
    const browserThemeListener = (e) => callback(e.matches ? "dark" : "light");
    mediaQueryList && mediaQueryList.addListener(browserThemeListener);
    return () => mediaQueryList && mediaQueryList.removeListener(browserThemeListener);
  };

  const updateWebIcon = () => {
    const iconElement = document.getElementById("favicon");
    iconElement.href =
      theme === "dark" ? "https://www.google.com/favicon.ico" : " https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico";
  };

  useEffect(() => {
    if (theme === null) {
      setTheme(getBrowserTheme().matches ? "dark" : "light");
    }
    updateWebIcon();
    return onBrowserThemeChange(setTheme);
  }, [theme, setTheme]);

  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
      </div>
    </AuthProvider>
  );
}

export default App;

//https://reactgo.com/react-change-favicon-dynamically/
