'use client'
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

// import { getBanners, handleBannerCreate } from '@/utils/api'
import withAuth from '@/utils/withAuth'
import { useAxios } from '@/hooks/useAxios'
import { Container } from 'react-bootstrap'
import CreateBanner from '@/components/CreateBanner'
import Banners from '@/components/Banners'

const INITIAL_VALUES = {
    bannerText:
        'Introducing our vibrant new Frozen Lemonade Starbucks Refreshers® beverages: Strawberry Açaí, Pineapple Passionfruit and Mango Dragonfruit.',
    bannerHeading: 'Talk about refreshing',
    bannerButtonText: 'Order now',
    imageUrl:
        'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85162.jpg',
    bannerBackgroundColor: '#8f8bf4',
    bannerTextRightPosition: false,
}

const Dashboard = () => {
    const [banners, setBanners] = useState([])
    const axios = useAxios()

    const formikValidationSchema = yup.object().shape({
        bannerText: yup.string().required('Please enter bannerText'),
        bannerHeading: yup.string().required('Please enter bannerHeading'),
        bannerButtonText: yup
            .string()
            .required('Please enter an bannerButtonText'),
        bannerBackgroundColor: yup.string(),
        imageUrl: yup
            .string()
            .url()
            .nullable()
            .required('Please enter image url'),
    })

    const onSubmit = async (banner) => {
        try {
            await axios.post('/banners', {
                banner,
            })
        } catch (error) {
            const beError = error.response?.data.message
            if (beError) {
                alert(beError)
            } else {
                console.error(error)
            }
        }
    }

    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        onSubmit,
        validationSchema: formikValidationSchema,
        validateOnChange: false,
    })

    useEffect(() => {
        const getBanners = async () => {
            return await axios.get('/banners')
        }

        getBanners()
            .then(({ data }) => setBanners(data.data.banners))
            .catch(console.error)
    }, [formik.submitCount])

    return (
        <>
            <Container className="d-flex flex-column rounded-card-width">
                <h1 className="text-center text-bold my-5 py-5">
                    Create banner
                </h1>
                <CreateBanner formik={formik} />
            </Container>
            <Container>
                <Banners banners={banners} />
            </Container>
        </>
    )
}

export default withAuth(Dashboard)
