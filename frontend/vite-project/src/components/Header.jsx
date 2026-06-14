import React from "react";

const Header = ({ selectedUser, onOpenModal }) => {
    return (
        <header className="container py-4">
            <div className="d-flex justify-content-between align-items-center">
                <h1>Customer Support Ticket System</h1>

                <button
                    className="btn btn-primary"
                    onClick={onOpenModal}
                >
                    Select Profile
                </button>
            </div>

            {selectedUser && (
                <div className="card mt-3">
                    <div className="card-body">
                        <h5>{selectedUser.username}</h5>
                        <p>{selectedUser.email}</p>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;