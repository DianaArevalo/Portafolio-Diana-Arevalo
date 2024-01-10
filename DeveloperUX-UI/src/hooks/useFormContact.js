
import React, { useState } from 'react';

export const useFormContact = (contactForm, onValidate) => {
    const [formState, setFormState] = useState(contactForm)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [currentAnimation, setCurrentAnimation] = useState('idle')


    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const err = onValidate(formState)
        setErrors(err)
        setCurrentAnimation('hit')

        if (Object.keys(err).length === 0) {
            setLoading(true)
            fetch("https://formsubmit.co/ajax/caroldevelop9607@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formState)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    data.success === "true" && setFormState(contactForm)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                    setCurrentAnimation('idle')
                });
        }
    }

    const handleFocus = () => setCurrentAnimation('walk')
    const handleBlur = () => setCurrentAnimation('idle')









    return {
        formState,
        errors,
        loading,
        currentAnimation,
        handleSubmit,
        onInputChange,
        handleFocus,
        handleBlur
    }
}
