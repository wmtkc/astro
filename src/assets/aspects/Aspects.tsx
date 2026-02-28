
export type Aspect = {
    name: string,
    degree: number,
    trueAngle: number,
    orb: number,
    planetA: string,
    planetB: string,
    glyph: React.FC<React.SVGProps<SVGSVGElement>>,
    stroke: string
}

export const AspectStyles = {
    conj: {
        name: "Conjunction",
        degree: 0,
        stroke: "purple"
    } as Aspect,
    trine: {
        name: "Trine",
        degree: 60,
        stroke: "blue"
    } as Aspect,
    square: {
        name: "Square",
        degree: 90,
        stroke: "orange"
    } as Aspect,
    sext: {
        name: "Sextile",
        degree: 120,
        stroke: "green"
    } as Aspect,
    opp: {
        name: "Opposition",
        degree: 180,
        stroke: "red"
    } as Aspect,
}