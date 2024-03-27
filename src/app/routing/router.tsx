import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import {Layout} from "widgets/layouts/Layout";
import {InfoPage} from "pages/InfoPage";
import {MainPage} from "pages/MainPage";
import {Providers} from "../providers/Providers";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="*"
      element={
        <Providers>
          <Layout/>
        </Providers>
      }
    >
      <Route index element={<MainPage/>}/>
      <Route path="info" element={<InfoPage/>}/>
    </Route>
  ))