import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cloud } from '@react-three/drei'

const bounds = [0.5, 1.5, 2.5]

export default function Puff() {
    const ref = useRef()
    const speed = Math.random() * .5
    const boundary = bounds[Math.floor(Math.random()*bounds.length)]

    useFrame((state, delta) => {
        const pos = ref.current.position.x;
        if (pos > 20) ref.current.position.x = -20
        ref.current.position.x += delta * speed
        ref.current.rotation.x += delta * (0.10 * (Math.random()-.5))
        ref.current.rotation.z += delta * (0.15 * (Math.random()-.5))
    })

    return <Cloud 
                ref={ ref } 
                fade={ 40 } 
                speed={ 0.2 } 
                segments={ 20 } 
                volume={ 4 } 
                opacity={ 0.3 } 
                bounds={ [boundary, boundary, boundary] }
                position={[
                    (Math.random()-.5) * 30,
                    (Math.random()-.5) * 10 + 2,
                    -0.5,
                ]} 
            />
}