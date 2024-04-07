import "./App.module.scss";
import Router from "./routes";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useScrollToTop } from "./hooks/use-scroll-top";
import { useFirestoreListenerUser } from "./hooks/use-listener";

const theme = createTheme({ palette: { mode: 'dark' } });

function App() {
  useScrollToTop()
  useFirestoreListenerUser()
  return (<ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>);
}

export default App;