import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkSideProvider } from "./context/DarkSideContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DarkSideProvider>
    <App />
  </DarkSideProvider>,
);
