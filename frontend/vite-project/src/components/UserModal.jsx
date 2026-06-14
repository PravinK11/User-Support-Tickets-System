import React from "react";

const UserModal = ({
    users,
    show,
    onClose,
    onSelect
}) => {

    if (!show) return null;

    return (
        <div className="modal d-block bg-dark bg-opacity-50">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5>Select User</h5>

                        <button
                            className="btn-close"
                            onClick={onClose}
                        />
                    </div>

                    <div className="modal-body">

                        {users.map((user) => (
                            <div
                                key={user.user_id}
                                className="card mb-2"
                            >
                                <div className="card-body">

                                    <h6>
                                        {user.username}
                                    </h6>

                                    <p>
                                        {user.email}
                                    </p>

                                    <button
                                        className="btn btn-success"
                                        onClick={() =>
                                            onSelect(user)
                                        }
                                    >
                                        Select
                                    </button>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserModal;