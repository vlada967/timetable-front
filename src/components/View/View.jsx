import { Link } from 'react-router-dom';

function View() {
    return (
        <section className="view">
            <Link to='classes' className="view__link">Аудитории</Link>
            <Link to='groups' className="view__link">Группы</Link>
            <Link to='teachers' className="view__link">Преподаватели</Link>
        </section>
    );
}

export default View;