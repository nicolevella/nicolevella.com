import { useEffect, useRef, useState } from 'react'
// import { Perf } from 'r3f-perf'
import { Clouds } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Puff from './Puff'
import Pointer from './Pointer'

let shade, hour

const setBackground = () => {
    hour = new Date().getHours()
    contact.className = ''
    root.className = ''
    root.classList.add('sky-gradient-' + hour)
    switch (hour) {
        case 0:
            contact.classList.add('night')
            shade = '#00000c'
            break;
        case 1:
            contact.classList.add('night')
            shade = '#191621'
            break;
        case 2:
            contact.classList.add('night')
            shade = '#20202c'
            break;
        case 3:
            contact.classList.add('night')
            shade = '#3a3a52'
            break;
        case 4:
            contact.classList.add('night')
            shade = '#515175'
            break;
        case 5:
            contact.classList.add('day')
            shade = '#8a76ab'
            break;
        case 6:
            contact.classList.add('day')
            shade = '#cd82a0'
            break;
        case 7:
            contact.classList.add('day')
            shade = '#eab0d1'
            break;
        case 8:
            contact.classList.add('day')
            shade = '#ebb2b1'
            break;
        case 9:
            contact.classList.add('day')
            shade = '#b1b5ea'
            break;
        case 10:
            contact.classList.add('day')
            shade = '#94ffff'
            break;
        case 11:
            contact.classList.add('day')
            shade = '#9fffff'
            break;
        case 12:
            contact.classList.add('day')
            shade = '#afffff'
            break;
        case 13:
            contact.classList.add('day')
            shade = '#ffffff'
            break;
        case 14:
            contact.classList.add('day')
            shade = '#afffff'
            break;
        case 15:
            contact.classList.add('day')
            shade = '#9fffff'
            break;
        case 16:
            contact.classList.add('day')
            shade = '#9da671'
            break;
        case 17:
            contact.classList.add('day')
            shade = '#e9ce5d'
            break;
        case 18:
            contact.classList.add('day')
            shade = '#e1c45e'
            break;
        case 19:
            contact.classList.add('night')
            shade = '#89752D'
            break;
        case 20:
            contact.classList.add('night')
            shade = '#5F3B12'
            break;
        case 21:
            contact.classList.add('night')
            shade = '#59230B'
            break;
        case 22:
            contact.classList.add('night')
            shade = '#2d0f00'
            break;
        case 23:
            contact.classList.add('night')
            shade = '#150800'
            break;
        default:
            contact.classList.add('night')
            shade = '#FFFFFF'
    }
}

export default function App() {
    const ref = useRef()
    const [lightColor, setLightColor] = useState('')

    useEffect(() => {
        setBackground()
        setLightColor(shade)
    })

    useFrame((state, delta) => {
        if (hour!==new Date().getHours()) {
            setBackground()
            setLightColor(shade)
        }
    })

    return <>

        {/* <Perf position="top-right" /> */}

        <Pointer />
        <Clouds>
            <group ref={ ref } position={[0, 0, 0]}>
                { [...Array(10)].map((item, index) => <Puff key={index} />) }
            </group>
        </Clouds>

        <directionalLight
            position={ [ 0, 2, 1 ] }
            intensity={ 2.25 }
        />

        <directionalLight 
            color={ lightColor }
            position={ [ 0, -2, 1 ] } 
            intensity={ 10.5 } 
        />
    </>
}