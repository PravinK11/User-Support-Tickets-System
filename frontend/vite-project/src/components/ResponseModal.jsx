import React from "react";

const ResponseModal = ({
    responses,
    show,
    onClose
}) => {

    if (!show) return null;

    return (
        <div className="modal d-block bg-dark bg-opacity-50">

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5>
                            Ticket Responses
                        </h5>

                        <button
                            className="btn-close"
                            onClick={onClose}
                        />

                    </div>

                    <div className="modal-body">

                        {responses.length === 0 ? (
                            <p>
                                No responses found
                            </p>
                        ) : (
                            responses.map(
                                (response) => (
                                    <div
                                        key={
                                            response.response_id
                                        }
                                        className="card mb-2"
                                    >
                                        <div className="card-body">

                                            <h6>
                                                {
                                                    response.responded_by
                                                }
                                            </h6>

                                            <p>
                                                {
                                                    response.response_text
                                                }
                                            </p>

                                        </div>
                                    </div>
                                )
                            )
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ResponseModal;