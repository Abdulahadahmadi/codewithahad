import { createContext, useContext } from "react";

const RouteContext = createContext('');

export const RouterProvider = RouteContext.Provider;

export const useCurrentRoute = () => {
    return useContext(RouteContext);
}