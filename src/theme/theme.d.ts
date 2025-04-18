import { PaletteColorOptions, PaletteColor } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        beige: PaletteColor;
        brick: PaletteColor;
        icons: PaletteColor;
    }
    interface PaletteOptions {
        beige?: PaletteColorOptions;
        brick?: PaletteColorOptions;
        icons?: PaletteColorOptions;
    }
}