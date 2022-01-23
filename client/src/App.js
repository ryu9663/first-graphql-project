import { client } from "./apolloClient";
import { ApolloProvider } from "@apollo/client";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";

import PlayerPage from "./pages/PlayerPage";

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<PlayerPage />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
