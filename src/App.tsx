import React, { ReactElement } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { history } from "./services/history";
import CustomHistoryRouter from "./routes/CustomHistoryRouter";
import AppRoutes from "./routes/Router";
import { store } from "./app/store";

function App(): ReactElement {
  return (
    <CustomHistoryRouter history={history}>
      <ReduxProvider store={store}>
        <div>
          <AppRoutes />
        </div>
      </ReduxProvider>
    </CustomHistoryRouter>
  );
}

export default App;
