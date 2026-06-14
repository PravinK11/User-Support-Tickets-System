import React from "react";

const TicketCard = ({
    ticket,
    onShowResponses
}) => {

    return (
        <div className="card mb-3">

            <div className="card-body">

                <h5>{ticket.title}</h5>

                <p>
                    {ticket.description}
                </p>

                <p>
                    Status:
                    {" "}
                    {ticket.status}
                </p>

                <p>
                    Priority:
                    {" "}
                    {ticket.priority}
                </p>

                <button
                    className="btn btn-primary"
                    onClick={() =>
                        onShowResponses(
                            ticket.ticket_id
                        )
                    }
                >
                    Show Responses
                </button>

            </div>

        </div>
    );
};

export default TicketCard;