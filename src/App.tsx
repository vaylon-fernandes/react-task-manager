import { TaskManager } from "./components/TaskManager";
import { ThemeContextProvider } from "./components/ThemeContextProvider";
function App() {
  return (
    <ThemeContextProvider>
      <TaskManager></TaskManager>
    </ThemeContextProvider>
  );
}

export default App;
