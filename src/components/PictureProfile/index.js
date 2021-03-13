import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const PictureProfile = ({ icon, name, textAlign }) => {

    return (
        <div className={`profile profile--${textAlign}`}>
            <div className="image__wrapper">
                <div className="profile__image" style={{ backgroundImage: `url(${icon})`}}></div>
            </div>
            <span className="profile__text">{name}</span>
        </div>
    )
}

PictureProfile.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    textAlign: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
}

PictureProfile.defaultProps = {
    textAlign: 'bottom'
}

export default PictureProfile