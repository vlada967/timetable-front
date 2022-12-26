function ViewTeachers({ teachers, onClick }) {
    return (
        <section className="view-teachers">
            {teachers.map((item) => {
                return (
                    <button key={item.id} id={item.id} className="view__link" onClick={onClick}>{item.name}</button>
                )
            })}
        </section>
    );
}

export default ViewTeachers;
