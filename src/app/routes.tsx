import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ProjectDetail } from "./pages/ProjectDetail";
import { BehindTheWork } from "./pages/BehindTheWork";
import { Contact } from "./pages/Contact";
import { Work } from "./pages/Work";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "about", Component: About },
      { path: "project/:slug", Component: ProjectDetail },
      { path: "process", Component: BehindTheWork },
      { path: "contact", Component: Contact },
    ],
  },
]);
