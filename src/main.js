import { createRoot } from "react-dom/client";
import './index.css'
import App from "./App.js";
import UserContext from "./UserContext";
import { Provider } from "react-redux";
import { store } from "./store.js";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <UserContext>
        <App />

    </UserContext>
    </Provider>
)