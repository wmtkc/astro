import SolarGlyph from './sol.svg?react'
import LunarGlyph from './luna.svg?react'
import MercuryGlyph from './mercury.svg?react'
import VenusGlyph from './venus.svg?react'
import MarsGlyph from './mars.svg?react'
import CeresGlyph from './ceres.svg?react'
import JupiterGlyph from './jupiter.svg?react'
import SaturnGlyph from './saturn.svg?react'
import UranusGlyph from './uranus.svg?react'
import NeptuneGlyph from './neptune.svg?react'
import PlutoGlyph from './pluto.svg?react'
import ErisGlyph from './eris.svg?react'
import ChironGlyph from './chiron.svg?react'
import LilithGlyph from './lilith.svg?react'
import NorthNodeGlyph from './northnode.svg?react'
import SouthNodeGlyph from './southnode.svg?react'

export type Planet = {
    name: string,
    glyph: React.FC<React.SVGProps<SVGSVGElement>>,
    size: number,
    fill: string,
    stroke: string,
    strokeWidth: number,
    degree: number,
    retro: boolean
}

export type PlanetList = {
    sol: Planet,
    luna: Planet,
    mercury: Planet,
    venus: Planet,
    mars: Planet,
    jupiter: Planet,
    saturn: Planet,
    uranus: Planet,
    neptune: Planet,
    pluto: Planet,
    ceres: Planet,
    eris: Planet,
    chiron: Planet,
    lilith: Planet,
    northNode: Planet,
    southNode: Planet
}

export const PlanetStyles: PlanetList = {
    sol: {
        name: 'Sun',
        glyph: SolarGlyph,
        size: 30,
        stroke: 'ivory',
        strokeWidth: 1,
    } as Planet,

    luna: {
        name: 'Moon',
        glyph: LunarGlyph,
        size: 30,
        stroke: 'midnightblue',
    } as Planet,

    mercury: {
        name: 'Mercury',
        glyph: MercuryGlyph,
        stroke: 'blue',
    } as Planet,

    venus: {
        name: 'Venus',
        glyph: VenusGlyph,
        stroke: 'yellow',
    } as Planet,

    mars: {
        name: 'Mars',
        glyph: MarsGlyph,
        stroke: 'orange',
    } as Planet,

    jupiter: {
        name: 'Jupiter',
        glyph: JupiterGlyph,
        stroke: '#9B26B6',
    } as Planet,

    saturn: {
        name: 'Saturn',
        glyph: SaturnGlyph,
        stroke: '#D9027D',
    } as Planet,
    
    uranus: {
        name: 'Uranus',
        glyph: UranusGlyph,
        stroke: 'turquoise',
    } as Planet,

    neptune: {
        name: 'Neptune',
        glyph: NeptuneGlyph,
        stroke: 'cyan',
    } as Planet,

    pluto: {
        name: 'Pluto',
        glyph: PlutoGlyph,
        stroke: 'red',
    } as Planet,

    ceres: {
        name: 'Ceres',
        glyph: CeresGlyph,
        size: 16,
        stroke: '#00ff00',
    } as Planet,

    eris: {
        name: 'Eris',
        glyph: ErisGlyph,
        size: 16,
        stroke: 'magenta',
    } as Planet,

    chiron: {
        name: 'Chiron',
        glyph: ChironGlyph,
        stroke: 'black',
        size: 14,
        strokeWidth: 0.6,
    } as Planet,

    lilith: {
        name: 'Lilith',
        glyph: LilithGlyph,
        size: 14,
        fill: 'black',
        stroke: 'black',
        strokeWidth: 0.6,
    } as Planet,

    northNode: {
        name: 'North Node',
        glyph: NorthNodeGlyph,
        stroke: 'black',
        size: 14,
        strokeWidth: 0.6,
    } as Planet,

    southNode: {
        name: 'South Node',
        glyph: SouthNodeGlyph,
        stroke: 'black',
        size: 14,
        strokeWidth: 0.6,
    } as Planet,
}