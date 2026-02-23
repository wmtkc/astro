import './EclipticStrip.css'
import RetroGlyph from '../../assets/planets/retro.svg?react'
import { PlanetStyles } from '../../assets/planets/Planets'
import type { Planet, PlanetList } from '../../assets/planets/Planets'
import { Fragment, useEffect, useRef, useState } from 'react'

type PlanetKey = keyof typeof PlanetStyles

const Planet = (planet: Planet, drawLength: number, key: PlanetKey) => {
    const planetStyle = PlanetStyles[key]

    // everything measured in pt except drawLength which relies on width calculations
    const size = planetStyle.size ?? 20
    const glyphLeftLoc = (drawLength / 360) * planet.degree - (0.75 * size)
    const glyphTopLoc = - size / 2 - 1
    const strokeWidth = planetStyle.strokeWidth ?? 0.9

    const retroSize = (size - 10 > 8) ? size - 10 : 8
    const retroLeftLoc = (retroSize <= 8) 
        ? glyphLeftLoc + size - 1
        : glyphLeftLoc + size - 5
    const retroTopLoc = (retroSize <= 8)
        ? glyphTopLoc + size - 1
        : glyphTopLoc + size - 4
    const retroStrokeWidth = strokeWidth - 0.1

    return (
        <Fragment key={key}>
            { drawLength &&
            <planetStyle.glyph 
                className="glyph" 
                style={{ top: glyphTopLoc + "pt", left: glyphLeftLoc }}
                fill={planetStyle.fill ?? "none"}
                color={planetStyle.stroke}
                stroke={planetStyle.stroke} 
                strokeWidth={strokeWidth + "pt"} 
                height={size + "pt"}
                width={size + "pt"} /> }
            { planet.retro &&
            <RetroGlyph
                className="glyph" 
                style={{ top: retroTopLoc + "pt", left: retroLeftLoc }}
                fill="none"
                color={planetStyle.stroke}
                stroke={planetStyle.stroke} 
                strokeWidth={retroStrokeWidth + "pt"} 
                height={retroSize + "pt"}
                width={retroSize + "pt"} /> }
        </Fragment>
    )
}

const EclipticStrip = (chartData: PlanetList) => {
    const eclipticRef = useRef<HTMLDivElement>(null)
    const [eclipticLen, setEclipticLen] = useState(0)

    const updateEclipticLen = () => {
        if (eclipticRef.current) {
            setEclipticLen(eclipticRef.current.getBoundingClientRect().width)
        }
    }

    useEffect(() => {
        updateEclipticLen()
        window.addEventListener('resize', updateEclipticLen)
    }, [])

    return (
        <div className="ecliptic-strip">
            <div className="ecliptic" ref={eclipticRef}>
                { Object.entries(chartData)
                    .reverse()
                    .map(([key, planet]) => (Planet(planet, eclipticLen, key as PlanetKey)))
                }
            </div>
        </div>
    )
}

export default EclipticStrip