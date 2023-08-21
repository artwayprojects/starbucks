'use client'

import { Row } from 'react-bootstrap'
import BannerTextContent from './BannerTextContent'
import BannerImage from './BannerImage'

export default function Banners({ banners }) {
    return banners.map((banner) => {
        const handleClick = () =>
            // send to the BE
            console.log({
                buttonText: banner.bannerButtonText,
                bannerText: banner.bannerText,
                bannerHeading: banner.bannerHeading,
                saidBannerPosition: banner.bannerTextRightPosition
                    ? 'right'
                    : 'left',
                userAgent: navigator.userAgent
            })

        return (
            <Row
                onClick={handleClick}
                key={banner._id}
                className="g-0 px-0 my-4"
            >
                {banner.bannerTextRightPosition ? (
                    <>
                        <BannerImage imageUrl={banner.imageUrl} />
                        <BannerTextContent {...banner} />
                    </>
                ) : (
                    <>
                        <BannerTextContent {...banner} />
                        <BannerImage imageUrl={banner.imageUrl} />
                    </>
                )}
            </Row>
        )
    })
}
