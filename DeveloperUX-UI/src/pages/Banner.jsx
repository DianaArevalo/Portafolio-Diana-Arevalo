
import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import Loader from '../components/Loader'
import DragonBoss from '../models/DragonBoss'
import Castle from '../models/Castle'
import HomeInfo from '../components/BannerInfo';
import { Link } from 'react-router-dom'





export const Banner = () => {

    const [texto] = useTypewriter({
        words: ['Developer FullStack', 'Developer design UI / UX', 'Developer MERN', 'Developer Frontend'],
        loop: 0
    })


    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)

    const adjustCastleSreenSize = () => {
        let screenScale = null
        let screenPosition = [1, 0, 2]
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [1, 1, 1]
        }
        return [screenScale, screenPosition, rotation]
    }

    const adjustDragonSreenSize = () => {
        let screenScale, screenPosition


        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [0, -1.5, 0]
        } else {
            screenScale = [3, 3, 3]
            screenPosition = [0, -4, -4]
        }
        return [screenScale, screenPosition]
    }

    const [castleScale, castlePosition, castleRotation] = adjustCastleSreenSize()

    const [dragonScale, dragonPosition] = adjustDragonSreenSize()




    return (
        <section className='w-full h-screen relative'>

            <div className='absolute left-10 top-28 z-10 items-center justify-center text-tertiary grid '>
                {currentStage && <HomeInfo currentStage={currentStage} />}

                <div className='grid grid-cols-3 gap-3 py-20'>
                    <div className='justify-between col-span-1'>
                        <div className='w-15 h-30 p-5 rounded-lg bg-white items-center justify-center flex shadow-md'>
                            <span className='font-tertiary font-extrabold rose-gradient_text'> Diana Arevalo</span>
                        </div>
                    </div>
                    <div className='justify-between col-span-2'>
                        <h1 className='font-extrabold font-tertiary text-black text-4xl'>
                            I'm a
                            <span className='rose-gradient_text font-tertiary text-4xl font-extrabold'>
                                {texto}
                            </span>
                        </h1>
                    </div>

                </div>

                <div className='m-auto'>
                    <Link to="/contact" className='btn capitalize'>contact</Link>
                </div>


            </div>



            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating} ? 'cursor-grabbing': 'cursor-grab'`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={5} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor='#b1e1ff' groundColor={'#000000'} intensity={1} />
                    <Castle
                        position={castlePosition}
                        scale={castleScale}
                        rotation={castleRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    {/* <DragonBoss
                        isRotating={isRotating}
                        position={dragonPosition}
                        scale={dragonScale}
                        rotation={[0, Math.PI / 2, 0]}

                    /> */}
                </Suspense>

            </Canvas>
        </section>
    )
}
