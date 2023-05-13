import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();
const UserContext = createContext();

const App = () => {
  const user = { name: 'Jayanth', age: 22 };
  const theme = 'dark';

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <MyComponent />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

const MyComponent = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div>
      <h1>{theme} theme</h1>
      <p>User: {user.name}, Age: {user.age}</p>
    </div>
  );
};

export default App;
