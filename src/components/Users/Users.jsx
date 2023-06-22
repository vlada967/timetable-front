import React from 'react';
import trashPath from '../../images/trash.svg';
import AddUserPopup from '../AddUserPopup/AddUserPopup';
import * as api from '../../utils/api.js';

function Users({ users, setUsers, slots }) {
    const [isAddPopupOpen, setIsAddPopupOpen] = React.useState(false);

    function handleAddClick() {
        setIsAddPopupOpen(true);
    }

    function closePopup() {
        setIsAddPopupOpen(false);
    }

    function handleDeleteUser(e) {
        api.deleteUser(e.target.id)
            .then(() => {
                setUsers((state) => state.filter(c => c.id !== e.target.id));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <section className="classes">
            <div className="classes__cont">
                <h2 className="classes__title">💖 Users 💖</h2>
                <button type="button" onClick={() => handleAddClick()} className="classes__add">Add</button>
            </div>

            <div className="classes__cont">
                <table className="classes__table">
                    <tbody className="classes__table-body">
                        <tr className="classes__row">
                            <th className="classes__cell">Name</th>
                            <th className="classes__cell">Username</th>
                            <th className="classes__cell">Role</th>
                        </tr>

                        {users.map((item) => {
                            console.log('course', item)
                            return (
                                <tr className="classes__row">
                                    <td className="classes__cell">{item.name}</td>
                                    <td className="classes__cell">{item.username}</td>
                                    <td className="classes__cell">{item.role}</td>
                                    <img src={trashPath} alt="trash" className="classes__img" id={item.username} onClick={handleDeleteUser} />
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

            <AddUserPopup isOpen={isAddPopupOpen} onClose={closePopup} slots={slots}></AddUserPopup>
        </section>
    );
}

export default Users;
