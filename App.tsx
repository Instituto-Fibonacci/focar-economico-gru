import { Toaster } from "sonner";
import Home from "./Home";
import ErrorBoundary from "./ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <Home />
      <Toaster position="top-right" />
    </ErrorBoundary>
  );
}
