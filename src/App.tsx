
import './App.css'
import { useViewportSize } from './customHooks/useViewportSize';

function App() {

    const { height, width } = useViewportSize();

    return (
      <>
        Width: {width}, height: {height}
      </>
    );
}

export default App