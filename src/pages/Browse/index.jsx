import { Link } from 'react-router-dom'
import { PictureProfile } from '../../components'

import profiles from '../../profiles'
import './styles.css'

const Browse = () => {

    return (
        <div className="profiles">
            <div className="profiles__title">Quem está assistindo?</div>
            <Link to="/SwitchProfile" className="profiles__items">
                {profiles.map(
                    (profile, i) =>
                        <PictureProfile
                            key={i}
                            icon={profile.icon}
                            name={profile.name}
                            textAlign="bottom"
                        />
                )}
            </Link>
            <div className="profiles__button">
                <Link to="/ManageProfiles">GERENCIAR PERFIS</Link>
            </div>
        </div>
    )
}

export default Browse