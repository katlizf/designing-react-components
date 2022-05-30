// Creating a theme context and sharing it with the header component

import Header from "./Header";
import { createContext, useState } from "react";
import Speakers from "./Speakers";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <div
        className={
          theme === "light" ? "container-fluid light" : "container-fluid dark"
        }
      >
        <Header />
        <Speakers />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
