'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { Button, Form, InputGroup, Container } from 'react-bootstrap'
import ShowPasswordIcon from '@/components/PasswordVisibilityIcon'
import RoundedCard from '@/components/RoundedCard'
import { useAuth } from '@/hooks/useAuth'

const INITIAL_VALUES = {
    email: 'test@gmail.com',
    password: 'Test123$',
}

export default function SignInForm() {
    const [showPassword, setShowPassword] = useState(false)
    const { login } = useAuth()

    const formikValidationSchema = yup.object().shape({
        email: yup.string().email().required('Please enter an email'),
        password: yup.string().required('Please enter a password'),
    })

    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        onSubmit: login,
        validationSchema: formikValidationSchema,
        validateOnChange: false,
    })

    return (
        <Container className="d-flex flex-column rounded-card-width">
            <h1 className="text-center text-bold my-5 py-5">
                Sign in or create an account
            </h1>
            <RoundedCard>
                <Form onSubmit={formik.handleSubmit}>
                    <p className="form-description">
                        * indicates required field
                    </p>
                    <InputGroup className="mb-3 form-input" controlid="email">
                        <Form.Control
                            type="input"
                            placeholder="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            isInvalid={!!formik.errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.email}
                        </Form.Control.Feedback>
                    </InputGroup>

                    <InputGroup
                        className="mb-5 d-flex form-input position-relative"
                        controlid="formBasicPassword"
                    >
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            type={showPassword ? 'input' : 'password'}
                            placeholder="password"
                            name="password"
                            autoComplete="current-password"
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.password}
                            value={formik.values.password}
                        />
                        <div className="password-icon">
                            <ShowPasswordIcon
                                {...{
                                    setShowPassword,
                                    showPassword,
                                }}
                            />
                        </div>
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.password}
                        </Form.Control.Feedback>
                    </InputGroup>
                    <div className="d-flex justify-content-end">
                        <Button type="submit" className="btn-signin-large">
                            Sign in
                        </Button>
                    </div>
                </Form>
            </RoundedCard>
        </Container>
    )
}
