import { useEffect, useRef } from 'react'
// import { Perf } from 'r3f-perf'
import { Clouds } from '@react-three/drei'
import Puff from './Puff'
import Pointer from './Pointer'
import { useFrame } from '@react-three/fiber'

let cloudColor, currHour

const setBackground = () => {
    currHour = new Date().getHours()
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
            cloudColor = '#515175' 
            break;
        case 5:
            cloudColor = '#8a76ab'        
            break;
        case 6:
            cloudColor = '#cd82a0' 
            break;
        case 7:
            cloudColor = '#eab0d1'         
            break;
        case 8:
            cloudColor = '#ebb2b1'     
            break;
        case 9:
            cloudColor = '#b1b5ea'     
            break;
        case 10:
            cloudColor = '#94dfff'  
            break;
        case 11:
            cloudColor = '#67d1fb'    
            break;
        case 12:
            cloudColor = '#38a3d1'      
            break;
        case 13:
            cloudColor = '#246fa8'        
            break;
        case 14:
            cloudColor = '#1e528e'        
            break;
        case 15:
            cloudColor = '#5b7983'        
            break;
        case 16:
            cloudColor = '#9da671'
            break;
        case 17:
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
            // contact.classList.add('night')
            // cloudColor = '#4B1D06'
            contact.classList.add('night')
            cloudColor = '#00000c'
            break;
        case 23:
            contact.classList.add('night')
            cloudColor = '#00000c'
            break;
        default:
            cloudColor = '#FFFFFF'
    }
}

export default function App() {
    const ref = useRef()

    useEffect(() => {
        setBackground()
    })

    useFrame((state, delta) => {
        if (currHour!==new Date().getHours()) {
            setBackground()
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
            intensity={ 1.5 }
        />

        <directionalLight 
            color={ cloudColor }
            position={ [ 1, 2, 3 ] } 
            intensity={ 10.5 } 
        />

    </>
}