import { useEffect, useRef, useState } from 'react'
// import { Perf } from 'r3f-perf'
import { Clouds } from '@react-three/drei'
import Puff from './Puff'
import Pointer from './Pointer'
import { useFrame } from '@react-three/fiber'

let cloudColor, currHour

const setBackground = () => {
    currHour = new Date().getHours()
    // currHour = new Date().getMinutes() % 23
    contact.className = ''
    root.className = ''
    root.classList.add('sky-gradient-' + currHour)
    switch (currHour) {
        case 0:
            contact.classList.add('night')
            cloudColor = '#00000c' 
            break;
        case 1:
            contact.classList.add('night')
            cloudColor = '#191621' 
            break;
        case 2:
            contact.classList.add('night')
            cloudColor = '#20202c'             
            break;
        case 3:
            contact.classList.add('night')
            cloudColor = '#3a3a52'         
            break;
        case 4:
            contact.classList.add('night')
            cloudColor = '#515175'
            break;
        case 5:
            contact.classList.add('day')
            cloudColor = '#8a76ab'        
            break;
        case 6:
            contact.classList.add('day')
            cloudColor = '#cd82a0' 
            break;
        case 7:
            contact.classList.add('day')
            cloudColor = '#eab0d1'         
            break;
        case 8:
            contact.classList.add('day')
            cloudColor = '#ebb2b1'     
            break;
        case 9:
            contact.classList.add('day')
            cloudColor = '#b1b5ea'     
            break;
        case 10:
            contact.classList.add('day')
            cloudColor = '#94dfff'  
            break;
        case 11:
            contact.classList.add('day')
            cloudColor = '#67d1fb'    
            break;
        case 12:
            contact.classList.add('day')
            cloudColor = '#38a3d1'      
            break;
        case 13:
            contact.classList.add('day')
            cloudColor = '#246fa8'        
            break;
        case 14:
            contact.classList.add('day')
            cloudColor = '#1e528e'        
            break;
        case 15:
            contact.classList.add('day')
            cloudColor = '#5b7983'        
            break;
        case 16:
            contact.classList.add('day')
            cloudColor = '#9da671'
            break;
        case 17:
            contact.classList.add('day')
            cloudColor = '#e9ce5d'        
            break;
        case 18:
            contact.classList.add('night')
            cloudColor = '#b26339'             
            break;
        case 19:
            contact.classList.add('night')
            cloudColor = '#B7490F'             
            break;
        case 20:
            contact.classList.add('night')
            cloudColor = '#8A3B12'             
            break;
        case 21:
            contact.classList.add('night')
            cloudColor = '#59230B'     
            break;
        case 22:
            contact.classList.add('night')
            cloudColor = '#2d0f00'
            break;
        case 23:
            contact.classList.add('night')
            cloudColor = '#150800'
            break;
        default:
            contact.classList.add('night')
            cloudColor = '#FFFFFF'
    }
}

export default function App() {
    const ref = useRef()
    const [col, setCol] = useState('')

    useEffect(() => {
        setBackground()
        setCol(cloudColor)
    })

    useFrame((state, delta) => {
        if (currHour!==new Date().getHours()) {
        // if (currHour!==new Date().getMinutes() % 23) {
            setBackground()
            setCol(cloudColor)
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
            position={ [ 1, 2, 3 ] }
            intensity={ 1.25 }
        />

        <directionalLight 
            color={ col }
            position={ [ 1, 2, 3 ] } 
            intensity={ 12.5 } 
        />

    </>
}