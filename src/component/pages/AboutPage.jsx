import Card from "../shared/Card"
import {Link} from 'react-router-dom'
function AboutPage() {
    return (
        <Card>
        <div className="About">
        <h2>About page</h2>
        <p>This is an about page</p>
        <p>Version 1.0</p>
        <Link to='/'>Back to Home page</Link>
        </div>
        </Card>
        
    )
}

export default AboutPage