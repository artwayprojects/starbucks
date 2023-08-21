'use client'
import { Button, Form, InputGroup } from 'react-bootstrap'
import RoundedCard from '@/components/RoundedCard'

export default function CreateBanner({ formik }) {
    return (
        <RoundedCard>
            <Form onSubmit={formik.handleSubmit}>
                <p className="form-description mb-5">
                    <span className="text-green">*</span> indicates required
                    field
                </p>
                <div className="mb-5">
                    <h3 className="text-bold-4 mb-4">Image</h3>
                    <InputGroup
                        className="mb-3 form-input"
                        controlid="imageUrl"
                    >
                        <Form.Control
                            type="input"
                            placeholder="Image url"
                            name="imageUrl"
                            onChange={formik.handleChange}
                            value={formik.values.imageUrl}
                            isInvalid={!!formik.errors.imageUrl}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.imageUrl}
                        </Form.Control.Feedback>
                    </InputGroup>
                    <p>Ex: https://picsum.photos/300/300</p>
                </div>
                <div className="mb-5">
                    <h3 className="text-bold-4 mb-4">Banner</h3>
                    <InputGroup
                        className="mb-3 form-input"
                        controlid="bannerHeading"
                    >
                        <Form.Control
                            type="input"
                            placeholder="Banner heading"
                            name="bannerHeading"
                            onChange={formik.handleChange}
                            value={formik.values.bannerHeading}
                            isInvalid={!!formik.errors.bannerHeading}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.bannerHeading}
                        </Form.Control.Feedback>
                    </InputGroup>

                    <InputGroup
                        className="mb-3 form-input"
                        controlid="bannerText"
                    >
                        <Form.Control
                            type="input"
                            placeholder="Banner text"
                            name="bannerText"
                            onChange={formik.handleChange}
                            value={formik.values.bannerText}
                            isInvalid={!!formik.errors.bannerText}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.bannerText}
                        </Form.Control.Feedback>
                    </InputGroup>

                    <InputGroup
                        className="mb-3 form-input"
                        controlid="bannerButtonText"
                    >
                        <Form.Control
                            type="input"
                            placeholder="Banner button text"
                            name="bannerButtonText"
                            onChange={formik.handleChange}
                            value={formik.values.bannerButtonText}
                            isInvalid={!!formik.errors.bannerButtonText}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.bannerButtonText}
                        </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup
                        className="mb-3 form-input"
                        controlid="bannerBackgroundColor"
                    >
                        <Form.Control
                            type="input"
                            placeholder="Banner background color"
                            name="bannerBackgroundColor"
                            onChange={formik.handleChange}
                            value={formik.values.bannerBackgroundColor}
                            isInvalid={!!formik.errors.bannerBackgroundColor}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.bannerBackgroundColor}
                        </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup>
                        <Form.Check
                            value={formik.values.bannerTextRightPosition}
                            type="switch"
                            className="form-switch form-switch-lg"
                            label={'Position text right'}
                            onChange={() =>
                                formik.setFieldValue(
                                    'bannerTextRightPosition',
                                    !formik.values.bannerTextRightPosition
                                )
                            }
                            checked={formik.values.bannerTextRightPosition}
                            name="bannerTextRightPosition"
                            placeholder="Position text in banneron the right"
                            isInvalid={!!formik.errors.bannerTextRightPosition}
                        />
                    </InputGroup>
                </div>

                <div className="d-flex justify-content-end">
                    <Button type="submit" className="btn-signin-large">
                        Create
                    </Button>
                </div>
            </Form>
        </RoundedCard>
    )
}
