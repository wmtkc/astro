import './ZodiacStrip.css'
import * as Zodiac from '../../assets/zodiac/Zodiac'


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

const ZodiacStrip = () => {
    return (
        <div className="zodiac-strip">
            { Object.values(Zodiac.Signs).map(sign => Sign(sign)) }
        </div>
    )
}

export default ZodiacStrip