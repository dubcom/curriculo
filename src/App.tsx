import "./Styles/App.css";
import { UserProvider } from "./Context/UserContext";
import AppRoutes from "./Routes/App.routes";

export default function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}
