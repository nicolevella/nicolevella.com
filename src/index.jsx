import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import App from './App.jsx'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        flat
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 0, 20 ]
        } }
    >
        <Suspense>
            <App />
        </Suspense>
    </Canvas>
)