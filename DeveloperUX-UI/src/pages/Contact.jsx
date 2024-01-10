import React, { Suspense } from 'react'
import { useFormContact } from '../hooks/useFormContact'
import { Canvas } from '@react-three/fiber'
import Otter from '../models/Otter'
import Loader from '../components/Loader'

export const Contact = () => {



    const contactForm = {
        name: '',
        email: '',
        message: '',
    }

    const onValidate = (formState) => {
        let errors = {}
        let regexComments = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,250}$/
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let regexName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;

        if (!formState.name.trim()) {
            errors.name = 'Este campo es necesario para enviar el formulario'
        } else if (!regexName.test(formState.name)) {
            errors.name = 'Este campo solo acepta letras y espacios'

        }
        if (!formState.email.trim()) {
            errors.email = 'Este campo es necesario para enviar el formulario'
        } else if (!emailRegex.test(formState.email)) {
            errors.email = 'El campo "Email" contiene un formato no valido'

        }

        if (!formState.message.trim()) {
            errors.message = 'Este campo es necesario para enviar el formulario'
        } else if (!regexComments.test(formState.message)) {
            errors.message = ''


        }

        return errors

    }

    const { formState, errors, loading, handleSubmit, onInputChange, handleBlur, handleFocus, currentAnimation } = useFormContact(contactForm, onValidate)



    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in Touch</h1>

                <form
                    onSubmit={handleSubmit}
                    className='w-full flex flex-col gap-7 mt-14'
                >
                    <label
                        htmlFor=""
                        className='text-black font-semibold'
                    >
                        name
                        <input
                            type="text"
                            name='name'
                            className='input'
                            placeholder='John'
                            value={formState.name}
                            onChange={onInputChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        {errors.name && <div className='rose-gradient_text text-primary alert alert-danger p-1'
                        >
                            {errors.name}
                        </div>}
                    </label>

                    <label
                        htmlFor=""
                        className='text-black font-semibold'
                    >
                        Email
                        <input
                            type="email"
                            name='email'
                            className='input'
                            placeholder='John@gmail.com'
                            value={formState.email}
                            onChange={onInputChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        {errors.email && <div className='rose-gradient_text text-primary alert alert-danger p-1'
                        >
                            {errors.email}
                        </div>}


                    </label>

                    <label
                        htmlFor=""
                        className='text-black font-semibold'
                    >
                        Your Message
                        <textarea

                            rows={4}
                            name='message'
                            className='textarea'
                            placeholder="Let me know how I can help you"
                            value={formState.message}
                            onChange={onInputChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        {errors.message && <div className='rose-gradient_text text-primary alert alert-danger p-1'
                        >
                            {errors.message}
                        </div>}

                    </label>
                    <button
                        type='submit'
                        className='btn capitalize'
                        disabled={loading}
                    >
                        {loading ? "sending messsage" : "send message"}
                    </button>
                </form>
            </div>

            <div className='lg:w-1/2 w-full lg:h:auto md:h-[550px] h-[350px]'
            >
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000
                    }}
                >
                    <directionalLight intensity={2.5} position={[0, 0, 1]} />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={<Loader />}>
                        <Otter
                            currentAnimation={currentAnimation}
                            position={[0, -1, 0]}
                            rotation={[12.6, -1, 0]}
                            scale={[5.5, 5.5, 5.5]}
                        />
                    </Suspense>
                </Canvas>

            </div>

        </section>
    )
}
