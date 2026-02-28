import './ZodiacStrip.css'
import * as Zodiac from '../../assets/zodiac/Zodiac'
import type { Aspect } from '../../assets/aspects/Aspects'
import { useEffect, useRef, useState } from 'react'


const Sign = (sign: Zodiac.Sign) => {
    return (
        <div className="sign-domain" key={sign.name}>
            <sign.glyph 
                className="glyph" 
                color={sign.element.stroke}
                fill={sign.element.fill} 
                fillOpacity={0.9}
                stroke={sign.element.stroke} 
                strokeWidth="2pt" 
                strokeOpacity={0.6}
                />
        </div>
    )
}

type ZodiacStripProps = {
    aspects: Aspect[], 
    chartARefs: Record<string, SVGSVGElement | null>
    chartBRefs: Record<string, SVGSVGElement | null>
}

const ZodiacStrip = (props: ZodiacStripProps) => {
    const { aspects, chartARefs, chartBRefs } = props
    const zodiacStripRef = useRef<HTMLDivElement>(null)
    const [ zodiacStripWidth, setZodiacStripWidth ] = useState(0)
    const [ zodiacStripHeight, setZodiacStripHeight ] = useState(0)

    const updateZodiacStripBounds = () => {
        if (zodiacStripRef.current) {
            setZodiacStripWidth(zodiacStripRef.current.getBoundingClientRect().width)
            setZodiacStripHeight(zodiacStripRef.current.getBoundingClientRect().height)
        }
    }

    useEffect(() => {
        updateZodiacStripBounds()
        window.addEventListener('resize', updateZodiacStripBounds)
    }, [])

    const drawAspect = (aspect: Aspect, ix: number) => {
        const planetA = chartARefs[aspect.planetA]
        const planetB = chartBRefs[aspect.planetB]

        if (planetA == null || planetB == null || zodiacStripRef.current == null) return <></>

        const zodiacStripBounds = zodiacStripRef.current.getBoundingClientRect()
        const planetABounds = planetA.getBoundingClientRect()
        const startPos = {
            x: planetABounds.left + (planetABounds.width / 2) - zodiacStripBounds.left,
            y: 30
        } 

        const planetBBounds = planetB.getBoundingClientRect()
        const endPos = {
            x: planetBBounds.left + (planetBBounds.width / 2) - zodiacStripBounds.left,
            y: zodiacStripBounds.height - 30
        } 

        // TODO: handle wraparound
        if (Math.abs(startPos.x - endPos.x) > zodiacStripBounds.width / 2) return <></>

        return (
            <line
                key={planetA + '-' + planetB + '-' + ix}
                x1={startPos.x} 
                y1={startPos.y} 
                x2={endPos.x} 
                y2={endPos.y}
                stroke={aspect.stroke}
                strokeWidth={3 - (aspect.orb) + "pt"}
                strokeLinecap="round"
                strokeOpacity={0.6}
            />
        )
    }

    return (
        <div className="zodiac-container">
            <div className="aspect-domain" style={{ width: zodiacStripWidth, height: zodiacStripHeight }}>
                <svg width="100%" height="100%">
                    { aspects.map((aspect, ix) => drawAspect(aspect, ix)) }
                </svg>
            </div>
            <div className="zodiac-strip" ref={zodiacStripRef}>
                { Object.values(Zodiac.Signs).map(sign => Sign(sign)) }
            </div>
        </div>
    )
}

export default ZodiacStrip