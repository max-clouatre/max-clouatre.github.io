import React from "react";
import { ContentRoutes } from "./routing";
import AppContextProvider from "./contexts";
import { NavLinks } from "./routing";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <nav>
          <p>Nav!</p>
          {NavLinks.map((navLink) => navLink)}
        </nav>
        <main>
          <ContentRoutes />
        </main>
      </div>
    </AppContextProvider>
  );
}

export default App;
