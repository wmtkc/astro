import './App.css'
import EclipticStrip from './components/head-on-view/EclipticStrip'
import ZodiacStrip from './components/head-on-view/ZodiacStrip'

const App = () => {
  return (
    <div className="app-page">
      <ZodiacStrip />
      <EclipticStrip />
    </div>
  )
}

export default App
