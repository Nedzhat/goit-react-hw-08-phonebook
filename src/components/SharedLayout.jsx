import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "./Header/Header";
import { Loader } from "./Loader/Loader";
import { Box } from "@chakra-ui/react";

export const SharedLayout = () => {
    return (
        <Box h="100%">
            <Header />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Box>
    )
};