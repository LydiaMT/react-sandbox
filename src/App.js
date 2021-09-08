import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('green')

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <div>Counter</div>
      <Counter initialCount={0}/>
      <div>Counter Hooks</div>
      <CounterHooks initialCount={0}/>
      <button onClick={()  => setTheme(prevTheme => {
        return prevTheme === 'green' ? 'blue' : 'green'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
