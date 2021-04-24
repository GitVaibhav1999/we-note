import "./App.css";

import AppRouter from "./AppRouter";
import { AuthProvider } from "./Authentication/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="root">
        <AppRouter />;
      </div>
    </AuthProvider>
  );
}

export default App;
