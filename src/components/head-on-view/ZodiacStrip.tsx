import './ZodiacStrip.css'
import * as Zodiac from '../../assets/zodiac/Zodiac'


const Sign = (sign: Zodiac.Sign) => {
    return (
        <div className="sign-domain" key={sign.name}>
            <sign.glyph 
                className="glyph" 
                color={sign.element.stroke}
                fill={sign.element.fill} 
                stroke={sign.element.stroke} 
                strokeWidth="2pt" />
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