import AriesGlyph from './aries.svg?react'
import TaurusGlyph from './taurus.svg?react'
import GeminiGlyph from './gemini.svg?react'
import CancerGlyph from './cancer.svg?react'
import LeoGlyph from './leo.svg?react'
import VirgoGlyph from './virgo.svg?react'
import LibraGlyph from './libra.svg?react'
import ScorpioGlyph from './scorpio.svg?react'
import SaggitariusGlyph from './saggitarius.svg?react'
import CapricornGlyph from './capricorn.svg?react'
import AquariusGlyph from './aquarius.svg?react'
import PiscesGlyph from './pisces.svg?react'

export type Element = {
    name: string,
    fill: string,
    stroke: string,
}

export type Sign = {
    name: string
    glyph: React.FC<React.SVGProps<SVGSVGElement>>,
    element: Element,
    modality: 'cardinal' | 'fixed' | 'mutable'
}

export const Elements = {
    fire: {
        name: 'Fire',
        fill: 'white',
        stroke: 'maroon'
    } as Element,

    earth: {
        name: 'Earth',
        fill: 'white',
        stroke: 'green'
    } as Element,

    air: {
        name: 'Air',
        fill: 'white',
        stroke: 'goldenrod'
    } as Element,

    water: {
        name: 'Water',
        fill: 'white',
        stroke: 'navy'
    } as Element
}

export const Signs = {
    aries: {
        name: 'Aries',
        glyph: AriesGlyph,
        element: Elements.fire,
        modality: 'cardinal'
    } as Sign,

    taurus: {
        name: 'Taurus',
        glyph: TaurusGlyph,
        element: Elements.earth,
        modality: 'fixed'
    } as Sign,

    gemini: {
        name: 'Gemini',
        glyph: GeminiGlyph,
        element: Elements.air,
        modality: 'mutable'
    } as Sign,

    cancer: {
        name: 'Cancer',
        glyph: CancerGlyph,
        element: Elements.water,
        modality: 'cardinal'
    } as Sign,

    leo: {
        name: 'Leo',
        glyph: LeoGlyph,
        element: Elements.fire,
        modality: 'fixed'
    } as Sign,
    virgo: {
        name: 'Virgo',
        glyph: VirgoGlyph,
        element: Elements.earth,
        modality: 'mutable'
    } as Sign,

    libra: {
        name: 'Libra',
        glyph: LibraGlyph,
        element: Elements.air,
        modality: 'cardinal'
    } as Sign,

    scorpio: {
        name: 'Scorpio',
        glyph: ScorpioGlyph,
        element: Elements.water,
        modality: 'fixed'
    } as Sign,

    saggitarius: {
        name: 'Saggitarius',
        glyph: SaggitariusGlyph,
        element: Elements.fire,
        modality: 'mutable'
    } as Sign,

    capricorn: {
        name: 'Capricorn',
        glyph: CapricornGlyph,
        element: Elements.earth,
        modality: 'cardinal'
    } as Sign,

    aquarius: {
        name: 'Aquarius',
        glyph: AquariusGlyph,
        element: Elements.air,
        modality: 'fixed'
    } as Sign,

    pisces: {
        name: 'Pisces',
        glyph: PiscesGlyph,
        element: Elements.water,
        modality: 'cardinal'
    } as Sign
}
