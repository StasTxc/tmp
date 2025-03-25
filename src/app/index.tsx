import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {router} from "app/routing/router";
import "app/styles/globals.scss"
import 'shared/config/i18n'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<RouterProvider router={router}/>);