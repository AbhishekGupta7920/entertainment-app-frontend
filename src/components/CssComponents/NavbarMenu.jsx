
import React from 'react';
import IconButton from '@mui/material/IconButton';
import {  Box } from '@mui/material';
import { AiFillAppstore } from 'react-icons/ai';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


// this is btn for home page
export default function NavbarMenu() {
    const navigate = useNavigate();

    const { pathname } = useLocation();
    const { mediaType } = useParams();
    

    return (
        <Box>
            <IconButton
                sx={{
                    color: '#5A698F',
                    // backgroundColor: '#020617',
                    '&:hover': {
                        color: '#ff5349',
                    },
                }}
                
            >
                 {/* home page btn */}
                <AiFillAppstore
                    onClick={() => navigate("/")}
                    className={
                        
                        "hover:text-red-600 cursor-pointer font-bold text-2xl" +
                        (pathname === "/" || mediaType === "multi"
                            ? "text-red-600"
                            : "text-waikawaGrey")
                    }
                />
            </IconButton>
           
        </Box >
    );
}

