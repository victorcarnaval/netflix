import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './styles.css'

const Menu = ({ items }) => {

    return (
        <div className="header">
            <span className="header__logo">NETFLIX</span>
            <ul className="header__links">
                {items.map(
                    (item, i) =>
                        <Link to={item.path}>{item.text}</Link>
                )}
            </ul>
        </div>
    )
}

Menu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string,
            text: PropTypes.string
        })
    )
}

Menu.defaultProps = {
    items: []
}

export default Menu