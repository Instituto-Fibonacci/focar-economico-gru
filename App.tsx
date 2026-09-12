import { Toaster } from "sonner";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";

function NotFound() {
  return <div style={{ padding: 40, fontFamily: "sans-serif" }}>Página não encontrada.</div>;
}

export default function App() {
  return (
    <>
      <Toaster position="bottom-center" richColors />
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
