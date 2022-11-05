import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Json from './jsonLesson/JsonApp'
// import Charts from './chartsLib/ChartsComp'
// import Simple from './hookTutorial/Simple'
import Carousel from './reactLib/Carousel'

// import Nav from './pages/Nav'
// import Blog from './pages/Blog'
// import About from './pages/Abaut'
// import Home from './pages/Home'
// import NoPage from './pages/NoPage'

// import Sass from './sassTutorial/SassTutorail'
// import Api from './APITutorial/Backend'
// import Lifecycle from './lifecycle/Lifecycle'
// import MyApp from './components/MyApp'
// import MyApp2 from './components/MyApp2'
// import Component1 from './propsTutorial/component1'
// import Component2 from './propsTutorial/component2'
// import Lesson1 from './stateLesson/stateLesson1'

export default function App() {
  return (
    <div>
      {/* <Json /> */}
      {/* <Charts/> */}
      {/* <Simple/> */}
      <Carousel/>
    </div>
  )
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Nav />}>
//           <Route index element={<Home />} />
//           <Route path='/blog' element={<Blog />} />
//           <Route path='/blog' element={<Blog />} />
//           <Route path='/about' element={<About />} />
//           <Route path='*' element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;
