import Box from "@mui/material/Box";
import * as React from "react";
import { Stack  } from "@mui/material";
import BackToHomeButton from "@/utils/BackToHomeButton";

export default function NotFound() {
    return (
        <Stack
            sx={{
                height: '100vh',              // Занимает всю высоту экрана
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',     // Центрирует по вертикали
                alignItems: 'center',         // Центрирует по горизонтали
                textAlign: 'center',
                gap: 4,                       // Расстояние между элементами
            }}
        >
            <Box
                component="img"
                sx={{
                    width: '96%',
                    maxWidth: 600,              // Ограничение по ширине
                    height: 'auto',
                }}
                alt="logo"
                src="/assets/images/404.svg"
            />

            <BackToHomeButton/>
        </Stack>
    );
}
