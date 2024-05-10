import {BrowserRouter, Route, Routes} from "react-router-dom";

import { Home } from "../pages/home";
import {Details} from "../pages/details";

import { NotFound } from "../pages/notFound";

export function AppRoutes(){
  return(
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Details/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}