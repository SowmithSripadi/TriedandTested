import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, Post, PostListPage, Register, Write } from "./pages";
import MainLayout from "./components/MainLayout";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/clerk-react";
import Loading from "./pages/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing publishable key");
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <Post />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <ClerkLoading>
          <Loading />
        </ClerkLoading>
        <ClerkLoaded>
          <RouterProvider router={router} />
          <ToastContainer position="bottom-right" />
        </ClerkLoaded>
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>,
);
