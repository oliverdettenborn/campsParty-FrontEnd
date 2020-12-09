import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AccomodationChoosing from "./pages/AccommodationForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={AccomodationChoosing} />
      </Switch>
    </Router>
  );
}

export default App;
