// 1. Create a Context
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null); // Default value

// 2. Create a Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Consume the Context
function Toolbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === 'light' ? '#eee' : '#333',
        color: theme === 'light' ? '#333' : '#eee',
        padding: '20px',
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        margin: '10px',
      }}
    >
      I'm a Themed Button!
    </button>
  );
}

// App usage
function Context() {
  return (
    <ThemeProvider>
      <Toolbar />
    </ThemeProvider>
  );
}

export default Context;
