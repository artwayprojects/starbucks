import Badge from 'react-bootstrap/Badge'

import Loader from '../common/Loader'

export default function GameBalanceBadge ({ amount }) {
    return (
        <Badge bg="primary">
            Balance: {amount ? amount + ' $' : <Loader size="sm" />}
        </Badge>
    )
}
