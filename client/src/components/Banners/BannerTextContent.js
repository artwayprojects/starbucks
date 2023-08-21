import Link from 'next/link'
import { Col } from 'react-bootstrap'

export default function BannerTextContent({
    bannerBackgroundColor,
    bannerHeading,
    bannerText,
    bannerButtonText,
}) {
    return (
        <Col xs={12} lg={6}>
            <section
                className="banner-content"
                style={{
                    backgroundColor: bannerBackgroundColor,
                }}
            >
                <h2 className="banner-heading">{bannerHeading}</h2>
                <p className="banner-text mb-5">{bannerText}</p>
                <Link className="btn" href="#">
                    {bannerButtonText}
                </Link>
            </section>
        </Col>
    )
}
