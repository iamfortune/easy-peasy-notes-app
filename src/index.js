import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Notes from './components/Notes';
import NotesForm from './components/NotesForm'
import { StoreProvider, createStore } from "easy-peasy";
import store from "./Store";

const Store = createStore(store);
function App() {
  return (
    <StoreProvider store={Store}>
      <div className="container">
        <NotesForm />
        <Notes />
      </div>
    </StoreProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
