import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import { Clouds } from '@react-three/drei'
import Cloud from './Puff'
import Pointer from './Pointer'

let bgColor = "red"
root.classList.add('sunrise')

// const hour = new Date().getHours();
// if (hour <= 5) {
//     root.classList.add('night')
//     contact.classList.add('night')
//     bgColor = 'black'
// } else if (hour <= 8) {
//     root.classList.add('sunrise')
//     bgColor = 'red'
// } else if (hour <= 12) {
//     root.classList.add('morning')
//     bgColor = 'purple'
// } else if (hour <= 18) {
//     root.classList.add('afternoon')
//     bgColor = 'white'
// } else if (hour <= 21) {
//     root.classList.add('sunset')
//     bgColor = 'orange'
// } else {
//     background.classList.add('night')
//     contact.classList.add('night')
//     bgColor = 'black'
// }

export default function Experience() {
    const ref = useRef()

    return <>

        {/* <Perf position="top-right" /> */}

        <Pointer />
        <Clouds>
            <group ref={ ref } position={[0, 0, 0]}>
                { [...Array(10)].map((item, index) => <Cloud key={index} />) }
            </group>
        </Clouds>

        <directionalLight
            position={ [ 1, 2, 3 ] }
            intensity={ 2.5 }
        />

        <directionalLight 
            color={ bgColor }
            position={ [ 1, 2, 3 ] } 
            intensity={ 2.5 } 
        />

    </>
}