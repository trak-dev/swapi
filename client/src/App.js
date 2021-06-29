import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import Details from "./components/CardsLists/CardsList";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Switch>
          {/* rediriger vers l'accueil si aucun parametre */}
          <Route path="/" exact component={Home} />
          {/* redigiger vers la cathegorie si elle est saisie */}
          <Route path="/:cathegorie" exact component={Details} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
