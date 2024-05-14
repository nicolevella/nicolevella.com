import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Pointer() {
    const ref = useRef()
    useFrame(({ mouse, viewport }) => {
      ref.current.position.x = (mouse.x * viewport.width) / 2
      ref.current.position.y = (mouse.y * viewport.width) / 2
    })

    return <pointLight ref={ ref } position={[0,0,0]} intensity={10.5}  color="#FFFFFF" />
}