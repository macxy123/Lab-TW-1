import {createElement, Fragment} from "react";
window.React= {createElement:createElement, Fragment:Fragment}; // needed in the lab because it works with both React and Vue
import { ReactRoot } from "./ReactRoot";
import { createRoot } from "react-dom/client";
import { reactiveModel } from "../mobxReactiveModel";


// mount the app in the browser page. Test at http://localhost:8080/react.html
createRoot(document.getElementById('root')).render(<ReactRoot model={reactiveModel}/>);