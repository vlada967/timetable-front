import { Link } from 'react-router-dom';

function View() {
    return (
        <section className="view">
            <Link to='classes' className="view__link">Classes</Link>
            <Link to='groups' className="view__link">Groups</Link>
            <Link to='teachers' className="view__link">Teachers</Link>
        </section>
    );
}

export default View;