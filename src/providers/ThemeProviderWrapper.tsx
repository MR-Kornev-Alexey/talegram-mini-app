// src/providers/ThemeProviderWrapper.tsx
'use client';

import { ThemeProvider } from '@mui/material';
import {baselightTheme} from '@/theme/DefaultColors';
import CssBaseline from '@mui/material/CssBaseline';

export function ThemeProviderWrapper({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={baselightTheme}>
            <CssBaseline enableColorScheme/>
            {children}
        </ThemeProvider>
    );
}