import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./pages/Main";
import Start from "./pages/Start";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Start,
  },
  {
    path: "/main",
    Component: Main,
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Initial Load...</p>}
    ></RouterProvider>
  );
}

export default App;
