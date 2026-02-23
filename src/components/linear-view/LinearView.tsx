import './LinearView.css'
import MyNatal from '../../assets/mock-data/kelvin.json'
import NowChart from "../../assets/mock-data/now.json"
import EclipticStrip from './EclipticStrip'
import ZodiacStrip from './ZodiacStrip'
import type { PlanetList } from '../../assets/planets/Planets'

const App = () => {
  const chartA = MyNatal.planets as PlanetList
  const chartB = NowChart.planets as PlanetList

  return (
    <div className="app-page">
      <div className="date-stamp">
        1997-08-26 19:11 dayton, ohio, usa
      </div>
      <EclipticStrip {...chartA} />
      <ZodiacStrip />
      <EclipticStrip {...chartB} />
      <div className="date-stamp">
        2026-02-23 17:23 tianjin, china
      </div>
    </div>
  )
}

export default App
