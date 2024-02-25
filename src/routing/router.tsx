import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from 'react-router-dom';
import {Layout} from "../layouts/Layout";
import {InfoPage} from "../pages/InfoPage";
import {MainPage} from "../pages/MainPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="*"
      element={<Layout/>}
    >
      <Route index element={<MainPage />}/>
      <Route path="info" element={<InfoPage />}/>
    </Route>
  ))