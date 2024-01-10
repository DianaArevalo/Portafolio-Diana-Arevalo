
import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import dragonBossScene from '../assets/3D/dragon_boss.glb'
import { useFrame } from '@react-three/fiber'



const DragonBoss = ({ isRotating, ...props }) => {
    const { scene, animations } = useGLTF(dragonBossScene)
    const dragonRef = useRef()
    const { actions } = useAnimations(animations, dragonRef)

    useEffect(() => {
        console.log(animations);

        if (isRotating) {
            actions['Take 001'].play();
        }
    }, [actions, isRotating])

    useFrame(({ clock, camera }) => {
        // Ajusta la posición en función de la altura y la rotación inicial
        dragonRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
        dragonRef.current.rotation.set(0, 1, 0);  // Rota 180 grados en el eje Y

        // Ajusta la rotación o posición según la altura del dragón en relación con la cámara
        const heightDifference = dragonRef.current.position.y - camera.position.y;

        if (heightDifference > 10) {
            // Ajusta la rotación o posición si el dragón está por encima de la cámara
        } else if (heightDifference < -10) {
            // Ajusta la rotación o posición si el dragón está por debajo de la cámara
        }

        // Mueve el dragón hacia la derecha independientemente de la altura
        dragonRef.current.position.x -= 0.01;
    });



    return (
        <mesh
            {...props}
            position={[3, 0, -45]}
            scale={[25.555, 25.555, 5.555]}
            ref={dragonRef}
        >
            <primitive object={scene} />
        </mesh>
    )
}

export default DragonBoss