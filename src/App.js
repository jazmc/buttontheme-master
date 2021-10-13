import React from 'react';
import Header from './Header';
import ThemeContext from './ThemeContext';

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};

function App() {
  const themeContext = React.useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={buttonThemes[themeContext]}>
      <Header />
    </ThemeContext.Provider>
  );
}

export default App;
