
import './App.css'
import { useHover } from './customHooks/useHover';

function App() {
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '500px',
        height: '200px',
        backgroundColor: 'orange',
        fontSize: '30px',
    }

    const { ref, hovered } = useHover();

    return (
      <div ref={ref} style={styles}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
    );
}

export default App