import React from 'react'
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function Layout() {

    return (
            <Box paddingTop="10vh" paddingBottom="2vh" paddingX="2vh" >
                <Outlet />
            </Box>
    )
}