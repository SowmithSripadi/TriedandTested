import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, Post, PostList, Register, Write } from "./pages";
import MainLayout from "./components/MainLayout";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/clerk-react";
import Loading from "./pages/Loading";

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
        element: <PostList />,
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
      <ClerkLoading>
        <Loading />
      </ClerkLoading>
      <ClerkLoaded>
        <RouterProvider router={router} />
      </ClerkLoaded>
    </ClerkProvider>
  </StrictMode>
);
