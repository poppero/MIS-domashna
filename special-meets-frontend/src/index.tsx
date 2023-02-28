import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./Redux/Store"
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById('root');
const root = createRoot(container!);


let persistor = persistStore(store)

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          toastClassName={() =>
            "relative flex py-4 px-3 rounded overflow-hidden cursor-pointer bg-white shadow-lg"
          }
          bodyClassName={() => "text-black text-base font-normal"}
          position="bottom-left"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeButton={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <App />
      </PersistGate>
    </Provider>
  // </React.StrictMode >
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
