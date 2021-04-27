import "./App.css";

import AppRouter from "./AppRouter";
import { AuthProvider } from "./Authentication/AuthContext";
import { DataProvider } from "./Context";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <div className="root">
          <AppRouter />
        </div>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
