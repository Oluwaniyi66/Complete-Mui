import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import SideMenu from "./components/SideMenu";
import Employee from "./pages/employees/Employee";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <Box sx={{ pl: "320px", width: "100%" }}>
        <Header />
        <PageHeader />
        <Employee />
      </Box>

      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
