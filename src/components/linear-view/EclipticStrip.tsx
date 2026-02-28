import './EclipticStrip.css'
import RetroGlyph from '../../assets/planets/retro.svg?react'
import { PlanetStyles } from '../../assets/planets/Planets'
import type { Planet, PlanetList } from '../../assets/planets/Planets'
import { Fragment, useEffect, useRef, useState } from 'react'

type PlanetKey = keyof typeof PlanetStyles

type EclipticStripProps = {
    chartData: PlanetList, 
    setPlanetRef: ((element: SVGSVGElement | null, key: string) => void)
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const EclipticStrip = (props: EclipticStripProps) => {
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


    const drawPlanet = (
        planet: Planet, 
        key: PlanetKey,
        ix: number
    ) => {
        const planetStyle = PlanetStyles[key]

        // everything measured in pt except eclipticLen which relies on width calculations
        const size = planetStyle.size ?? 20
        const glyphLeftLoc = (eclipticLen / 360) * planet.degree - (0.75 * size)
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

        if (ix === Object.keys(props.chartData).length - 1) {
            props.setLoading(false) 
        }

        return (
            <Fragment key={key}>
                { eclipticLen &&
                <planetStyle.glyph 
                    ref={element => props.setPlanetRef(element, key)}
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


    return (
        <div className="ecliptic-strip">
            <div className="ecliptic" ref={eclipticRef}>
                { Object.entries(props.chartData)
                    .reverse()
                    .map(([key, planet], ix) => (drawPlanet(planet, key as PlanetKey, ix)))
                }
            </div>
        </div>
    )
}

export default EclipticStrip