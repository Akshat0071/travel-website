import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Packages from "@/pages/Packages";
import PackageDetail from "@/pages/PackageDetail";
import Taxi from "@/pages/Taxi";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/ScrollToTop"; // I should create this helper

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/packages" component={Packages} />
      <Route path="/packages/:slug" component={PackageDetail} />
      <Route path="/taxi" component={Taxi} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
