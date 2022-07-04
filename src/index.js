import { React } from "react";
import { createRoot } from "react-dom/client";
import MainRoot from "./PageComponents/MainRoot";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<MainRoot />);
