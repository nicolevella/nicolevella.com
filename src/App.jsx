import { useRef } from 'react'
// import { Perf } from 'r3f-perf'
import { Clouds } from '@react-three/drei'
import Puff from './Puff'
import Pointer from './Pointer'

let cloudColor = '#FFFFFF'
const hour = new Date().getHours()
root.classList.add('sky-gradient-'+hour)

if (hour < 1) {
    contact.classList.add('night')
    cloudColor = '#00000c' //00
} else if (hour < 2) {
    contact.classList.add('night')
    cloudColor = '#191621' //01
} else if (hour < 3) {
    contact.classList.add('night')
    cloudColor = '#20202c' //02
} else if (hour < 4) {
    contact.classList.add('night')
    cloudColor = '#3a3a52' //03
} else if (hour < 5) {
    cloudColor = '#515175' //04
} else if (hour < 6) {
    cloudColor = '#8a76ab' //05
} else if (hour < 7) {
    cloudColor = '#cd82a0' //06
} else if (hour < 8) {
    cloudColor = '#eab0d1' //07
} else if (hour < 9) {
    cloudColor = '#ebb2b1' //08
} else if (hour < 10) {
    cloudColor = '#b1b5ea' //09
} else if (hour < 11) {
    cloudColor = '#94dfff' //010 w
} else if (hour < 12) {
    cloudColor = '#67d1fb' //011 w
} else if (hour < 13) {
    cloudColor = '#38a3d1' //012 w
} else if (hour < 14) {
    cloudColor = '#246fa8' //013 w
} else if (hour < 15) {
    cloudColor = '#1e528e' //014 w
} else if (hour < 16) {
    cloudColor = '#5b7983' //015 w
} else if (hour < 17) {
    cloudColor = '#9da671' //016
} else if (hour < 18) {
    cloudColor = '#e9ce5d' //017
} else if (hour < 19) {
    contact.classList.add('night')
    cloudColor = '#b26339' //018
} else if (hour < 20) {
    contact.classList.add('night')
    cloudColor = '#B7490F' //019
} else if (hour < 21) {
    contact.classList.add('night')
    cloudColor = '#8A3B12' //020
} else if (hour < 22) {
    contact.classList.add('night')
    cloudColor = '#59230B' //021
} else if (hour < 23) {
    contact.classList.add('night')
    cloudColor = '#4B1D06' //022
} else {
    contact.classList.add('night')
    cloudColor = '#00000c' //23
}

export default function Experience() {
    const ref = useRef()

    return <>

        {/* <Perf position="top-right" /> */}

        <Pointer />
        <Clouds>
            <group ref={ ref } position={[0, 0, 0]}>
                { [...Array(10)].map((item, index) => <Puff key={index} />) }
            </group>
        </Clouds>

        <directionalLight
            position={ [ 1, 2, 3 ] }
            intensity={ 1.5 }
        />

        <directionalLight 
            color={ cloudColor }
            position={ [ 1, 2, 3 ] } 
            intensity={ 10.5 } 
        />

    </>
}