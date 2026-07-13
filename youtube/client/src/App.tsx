import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageHeader } from "./layouts/PageHeader";
import { Sidebar } from "./layouts/Sidebar";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import { SidebarProvider } from "./contexts/SidebarContext";
import { useLocation } from "react-router-dom";

const App = () => {
  const Layout = () => {
    const location = useLocation();

    return (
      <SidebarProvider location={location}>
        <div className="max-h-screen flex flex-col">
          <PageHeader />
          <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
            <Sidebar />
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/watch", element: <Watch /> },
        // { path: "/home", element: <Home /> },
        // { path: "/about", element: <About /> },
        // { path: "/contact", element: <Contact /> },
        // { path: "/team", element: <Team /> },
        // { path: "/events", element: <Events /> },
        // { path: "/events/:id", element: <EventInfo /> },
        { path: "*", element: <Home /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
