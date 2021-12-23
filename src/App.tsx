import { Router, RouteComponentProps } from '@reach/router'
import { HomePage } from './pages/HomePage/HomePage'
import { Statistic } from './pages/Statistic/Statistic'

const Route = (
    props: { component: JSX.Element } & RouteComponentProps
) => props.component;

const App = () => (
    <Router>
        <Route path="/home" component={<HomePage />} />
        <Route path="/statistic" component={<Statistic />} />
    </Router>
)

export default App;