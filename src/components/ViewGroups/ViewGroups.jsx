function ViewGroups({ groups, onClick }) {
    return (
        <section className="view-groups">
            {groups.map((item) => {
                return (
                    <button key={item.id} id={item.id} className="view__link" onClick={onClick}>{item.name}</button>
                )
            })}
        </section>
    );
}

export default ViewGroups;
