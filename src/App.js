import { AppProvider } from "@shopify/polaris";
import "./App.css";
import Main from "./Main";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Main/>
      </div>
    </AppProvider>
  );
}

export default App;
