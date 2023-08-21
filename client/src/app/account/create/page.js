'use client'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button, Form, InputGroup, Container } from 'react-bootstrap'
import { useAuth } from '@/hooks/useAuth'

import RoundedCard from '@/components/RoundedCard'
import ShowPasswordIcon from '@/components/PasswordVisibilityIcon'

const INITIAL_VALUES = {
    firstName: 'Test',
    lastName: 'Test',
    email: 'test@gmail.com',
    password: 'Test123$',
}

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false)
    const { signup } = useAuth()

    const formikValidationSchema = yup.object().shape({
        firstName: yup.string().required('Please enter the first name'),
        lastName: yup.string().required('Please enter then last name'),
        email: yup.string().email().required('Please enter an email'),
        password: yup
            .string()
            .nullable()
            .matches(
                /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{5,})$/,
                'Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.'
            )
            .required('Please enter a password'),
    })

    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        onSubmit: signup,
        validationSchema: formikValidationSchema,
        validateOnChange: false,
    })

    return (
        <Container className="d-flex flex-column rounded-card-width">
            <h1 className="text-center text-bold my-5 py-5">
                Create an account
            </h1>
            <RoundedCard>
                <Form onSubmit={formik.handleSubmit}>
                    <p className="form-description mb-5">
                        <span className="text-green">*</span> indicates required
                        field
                    </p>
                    <div className="mb-5">
                        <h3 className="text-bold-4 mb-4">
                            Personal Information
                        </h3>
                        <InputGroup
                            className="mb-3 form-input"
                            controlid="email"
                        >
                            <Form.Control
                                type="input"
                                placeholder="First name"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                isInvalid={!!formik.errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.firstName}
                            </Form.Control.Feedback>
                        </InputGroup>
                        <InputGroup
                            className="mb-3 form-input"
                            controlid="email"
                        >
                            <Form.Control
                                type="input"
                                placeholder="Last name"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                isInvalid={!!formik.errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.lastName}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-bold-4 mb-4">Account security</h3>
                        <InputGroup
                            className="mb-3 form-input"
                            controlid="email"
                        >
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
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button type="submit" className="btn-signin-large">
                            Sign up
                        </Button>
                    </div>
                </Form>
            </RoundedCard>
        </Container>
    )
}
