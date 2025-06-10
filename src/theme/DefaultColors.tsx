import { createTheme } from "@mui/material/styles";
import { Plus_Jakarta_Sans } from "next/font/google";

export const plus = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const baselightTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#000000",        // Hermès black
      light: "#6C5C5F",       // Dark gray
      dark: "#43393b",        // Black
      contrastText: "#FFFFFF" // White text
    },
    secondary: {
      main: "#D5A021",       // Hermès gold
      light: "#E8D08B",      // Light gold
      dark: "#B3861B",       // Dark gold
      contrastText: "#000000"
    },
    error: {
      main: "#A50F15",       // Hermès red
      light: "#D47D7D",
      dark: "#8A0C11",
      contrastText: "#FFFFFF"
    },
    warning: {
      main: "#FFAE1F",
      light: "#FFD580",
      dark: "#CC8B00",
      contrastText: "#000000"
    },
    info: {
      main: "#5D87FF",
      light: "#ECF2FF",
      dark: "#4570EA",
      contrastText: "#FFFFFF"
    },
    success: {
      main: "#13DEB9",
      light: "#E6FFFA",
      dark: "#02B3A9",
      contrastText: "#000000"
    },
    background: {
      default: "#FFFFFF",     // White background
      paper: "#F6F1EB"       // Light gray
    },
    text: {
      primary: "#6C5C5F",     // Black text
      secondary: "#333333",  // Dark gray
      disabled: "#7C8FAC"
    },
    action: {
      active: "#D5A021",     // Gold
      hover: "rgba(213, 160, 33, 0.08)",
      selected: "rgba(213, 160, 33, 0.16)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)"
    },
    divider: "#E5EAEF"
  },
  typography: {
    fontFamily: plus.style.fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
    },
    h6: {
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: "1.2rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem",
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "#D5A021" // Gold on hover
          }
        },
        outlined: {
          borderColor: "#000000",
          "&:hover": {
            borderColor: "#D5A021",
            color: "#D5A021"
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }
      }
    }
  }
});

const basedarkTheme = createTheme({
  direction: "ltr",
  palette: {
    mode: "dark",
    primary: {
      main: "#D5A021",       // Gold becomes primary in dark mode
      light: "#E8D08B",
      dark: "#B3861B",
      contrastText: "#000000"
    },
    secondary: {
      main: "#FFFFFF",       // White as secondary
      light: "#F5F5F5",
      dark: "#CCCCCC",
      contrastText: "#000000"
    },
    error: {
      main: "#A50F15",
      light: "#D47D7D",
      dark: "#8A0C11",
      contrastText: "#FFFFFF"
    },
    warning: {
      main: "#FFAE1F",
      light: "#FFD580",
      dark: "#CC8B00",
      contrastText: "#000000"
    },
    info: {
      main: "#5D87FF",
      light: "#ECF2FF",
      dark: "#4570EA",
      contrastText: "#FFFFFF"
    },
    success: {
      main: "#13DEB9",
      light: "#E6FFFA",
      dark: "#02B3A9",
      contrastText: "#000000"
    },
    background: {
      default: "#121212",    // Dark background
      paper: "#1E1E1E"      // Darker surface
    },
    text: {
      primary: "#FFFFFF",    // White text
      secondary: "#D5A021", // Gold for secondary text
      disabled: "rgba(255, 255, 255, 0.5)"
    },
    action: {
      active: "#D5A021",
      hover: "rgba(213, 160, 33, 0.08)",
      selected: "rgba(213, 160, 33, 0.16)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)"
    },
    divider: "rgba(255, 255, 255, 0.12)"
  },
  typography: {
    ...baselightTheme.typography
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "#FFFFFF", // White on hover
            color: "#000000"
          }
        },
        outlined: {
          borderColor: "#D5A021",
          color: "#D5A021",
          "&:hover": {
            borderColor: "#FFFFFF",
            color: "#FFFFFF"
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1E1E",
          color: "#D5A021",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          backgroundColor: "#1E1E1E",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#121212",
          color: "#FFFFFF"
        }
      }
    }
  }
});

export { baselightTheme, basedarkTheme };