import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "./services/history";
import AppRoutes from "./routes/Router";
import { store } from "./app/store";
import { ModalWindow } from "./components/ModalWindow";

function App() {
  return (
    <HistoryRouter history={history}>
      <ReduxProvider store={store}>
        <ModalWindow />
        <div>
          <AppRoutes />
        </div>
      </ReduxProvider>
    </HistoryRouter>
  );
}

export default App;
