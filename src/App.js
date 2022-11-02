import React from 'react';
import MyApp from './components/MyApp'
import MyApp2 from './components/MyApp2'
import Component1 from './propsTutorial/component1'
import Component2 from './propsTutorial/component2'

function App() {
  return (
    <div>
      <Component1 age="17" name="Dilshod"/>
      <Component2  text="React Tutorial"/>

      {/* <MyApp/>  
      <MyApp2/>   */}
    </div>
  );
}

export default App;
