import { Col } from 'react-bootstrap'
import Image from 'next/image'

export default function BannerImage({ imageUrl }) {
    return (
        <Col xs={12} lg={6}>
            <div className="banner-image">
                <Image src={imageUrl} fill={true} alt="banner-image" />
            </div>
        </Col>
    )
}
