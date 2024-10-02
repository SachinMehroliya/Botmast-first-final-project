// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from "./components/Home.jsx"
// import Aboutus from './components/Aboutus.jsx'
// import Services from './components/Services.jsx'
// import Careers from './components/Careers.jsx'
// import Inboundagent from './components/Inboundagent.jsx'
// import Mediacentre from './components/Mediacentre.jsx'

// const appRouter = createBrowserRouter([
//   {
//     path:'/',
//     element:<Home/>
//   },
//   {
//     path:'/aboutus',
//     element:<Aboutus/>
//   },
//   {
//     path:'/services',
//     element:<Services/>
//   },
//   {
//     path:'/inboundagent',
//     element:<Inboundagent/>
//   },
//   {
//     path:'/careers',
//     element:<Careers/>
//   },
//   {
//     path:'/mediacentre',
//     element:<Mediacentre/>
//   },
// ])


// function App(){
//   return (
//     <>
//       <RouterProvider router = {appRouter}/>
//     </>
//   )
// }

// export default App
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Aboutus from "./components/Aboutus";
import Inboundagent from "./components/Inboundagent";
import Careers from "./components/Careers";
import Mediacentre from "./components/Mediacentre";
import Letstalk from "./components/Letstalk";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/inbound-agent" element={<Inboundagent />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/media-centre" element={<Mediacentre />} />
        <Route path="/letstalk" element={<Letstalk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

