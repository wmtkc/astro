import './LinearView.css'
import MyNatal from '../../assets/mock-data/kelvin.json'
import NowChart from "../../assets/mock-data/now.json"
import EclipticStrip from './EclipticStrip'
import ZodiacStrip from './ZodiacStrip'
import { AspectStyles } from '../../assets/aspects/Aspects'
import type { Aspect } from '../../assets/aspects/Aspects'
import type { PlanetList } from '../../assets/planets/Planets'
import { useEffect, useRef, useState } from 'react'

type AspectKey = keyof typeof AspectStyles

const findAspects = (chartA: PlanetList, chartB: PlanetList) => {
  const MAX_ORB = 3;
  const aspects: Aspect[] = [];

  // Always exatly 1280 checks
  for (const [planetAKey, planetA] of Object.entries(chartA)) {
    for (const [planetBKey, planetB] of Object.entries(chartB)) {
      for (const [aspectKey, aspect] of Object.entries(AspectStyles)) {
        const absDiff = Math.abs(planetA.degree - planetB.degree)
        const shortestAngle = absDiff > 180 ? 360 - absDiff : absDiff
        const orb = Math.abs(shortestAngle - aspect.degree)

        if (orb < MAX_ORB) {
          const aspect = { ...AspectStyles[aspectKey as AspectKey] }
          aspect.trueAngle = shortestAngle
          aspect.orb = orb
          aspect.planetA = planetAKey,
          aspect.planetB = planetBKey

          aspects.push(aspect)
        }
      }
    }
  }
  
  return aspects
}

const usePlanetRefs = () => {

  const refsByKey = useRef<Record<string, SVGSVGElement | null>>({})

  const setRef = (element: SVGSVGElement | null, key: string) => {
    refsByKey.current[key] = element;
  }

  return { refs: refsByKey.current, setRef: setRef };
}

const App = () => {
  const [ chartALoading, setChartALoading ] = useState(true)
  const [ chartBLoading, setChartBLoading ] = useState(true)

  const { refs: chartARefs, setRef: setChartARef } = usePlanetRefs()
  const { refs: chartBRefs, setRef: setChartBRef } = usePlanetRefs()

  const chartA = MyNatal.planets as PlanetList
  const chartB = NowChart.planets as PlanetList

  const aspects = findAspects(chartA, chartB)

  return (
    <div className="app-page">
      <div className="date-stamp">
        1997-08-26 19:11 dayton, ohio, usa
      </div>
      <EclipticStrip chartData={chartA} setPlanetRef={setChartARef} setLoading={setChartALoading} />
      { (chartALoading || chartBLoading) 
          ? <></> 
          : <ZodiacStrip 
              aspects={aspects} 
              chartARefs={chartARefs} 
              chartBRefs={chartBRefs} 
            />
      }
      <EclipticStrip chartData={chartB} setPlanetRef={setChartBRef} setLoading={setChartBLoading} />
      <div className="date-stamp">
        2026-02-23 17:23 tianjin, china
      </div>
    </div>
  )
}

export default App
