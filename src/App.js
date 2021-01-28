import React, { createContext, useContext, useState } from "react";
import "./style.css";

const App = () => {
  const ThemeContext = createContext(null);
  const ThemeProvider = props => {
    const [theme, setTheme] = useState("White");

    const changeTheme = () => {
      setTheme(prev => (prev === "White" ? "Black" : "White"));
    };

    return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {props.children}
      </ThemeContext.Provider>
    );
  };

  const CellOne = () => {
    const { theme } = useContext(ThemeContext);
    return (
      <div className={`${theme} Base`}>This is {theme} color for Cell One.</div>
    );
  };

  const CellTwo = () => {
    const { theme } = useContext(ThemeContext);
    return (
      <div className={`${theme} Base`}>This is {theme} color for Cell Two.</div>
    );
  };

  const ChangeTheme = () => {
    const { changeTheme } = useContext(ThemeContext);
    const onChangeTheme = () => {
      changeTheme();
    };
    return (
      <button onClick={onChangeTheme} className="Button">
        Toggle Theme{" "}
      </button>
    );
  };

  return (
    <ThemeProvider>
      <div className="Wrapper">
        <div className="CellWrapper">
          <CellOne />
          <CellTwo />
        </div>
        <ChangeTheme />
      </div>
    </ThemeProvider>
  );
};

export default App;
