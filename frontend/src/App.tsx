import './App.css'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'
import WebSocketComponent from './pages/Chat';

function App() {

  return (
    <ThemeProvider>
      <ModeToggle />
      <Button>Hello</Button>
      <WebSocketComponent/>
    </ThemeProvider>
  )
}

export default App
