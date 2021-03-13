import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

/* Routes */
import routes from './routes'

const RouteConfig = () => {

    return (
        <Router>
            <Switch>
                {routes.map(
                    ({ path, component }, i) =>
                        <Route key={i} path={path} component={component} />
                )}
            </Switch>
        </Router>
    )
}

export default RouteConfig