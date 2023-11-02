import {createContext,useState} from "react";


export const CounterContext = createContext({
  counter: 0,    
  updateCounter: () => {}
})
 export const CounterProvider  = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const updateCounter = () => setCounter(counter + 1);
  const value = { counter, setCounter };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}