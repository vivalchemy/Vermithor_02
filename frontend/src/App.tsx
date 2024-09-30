import './App.css'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'

function App() {

  return (
    <ThemeProvider>
      <ModeToggle />
      <Button>Hello</Button>
    </ThemeProvider>
  )
}

export default App
