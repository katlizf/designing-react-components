// Extracting the theme context to its own dedicated component and file

import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children, startingTheme }) {
  const [theme, setTheme] = useState(startingTheme);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
