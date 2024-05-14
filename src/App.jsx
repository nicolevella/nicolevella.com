import { useRef } from 'react'
// import { Perf } from 'r3f-perf'
import { Clouds } from '@react-three/drei'
import Cloud from './Puff'
import Pointer from './Pointer'

export default function Experience() {
    const ref = useRef()

    return <>

        {/* <Perf position="top-left" /> */}

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
            color={ "red" }
            position={ [ 1, 2, 3 ] } 
            intensity={ 2.5 } 
        />

    </>
}