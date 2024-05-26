import "./App.module.scss";
import Router from "./routes";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useScrollToTop } from "./hooks/use-scroll-top";
import { useFirestoreListenerUser } from "./hooks/use-listener";
import { useAppSelector } from "./redux";

const theme = createTheme({ palette: { mode: 'dark', primary: { main: '#1976d2' } } });

function App() {
  useScrollToTop()
  useFirestoreListenerUser()

  const auth = useAppSelector((state) => state.auth);
  console.log(auth)
  return (<ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>);
}

export default App;