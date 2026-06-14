import { useEffect, useState } from "react";

import Header from "./components/Header";
import UserModal from "./components/UserModal";
import TicketCard from "./components/TicketCard";
import ResponseModal from "./components/ResponseModal";
import Footer from "./components/Footer";

import {
    getUsers,
    getTicketsByUser,
    getResponsesByTicket
} from "./services/api";

function App() {

    const [users, setUsers] = useState([]);

    const [selectedUser, setSelectedUser] =
        useState(null);

    const [tickets, setTickets] = useState([]);

    const [responses, setResponses] =
        useState([]);

    const [showUserModal, setShowUserModal] =
        useState(false);

    const [
        showResponseModal,
        setShowResponseModal
    ] = useState(false);

    

    useEffect(() => {
        fetchUsers();

        const savedUser =
            sessionStorage.getItem(
                "selectedUser"
            );

        if (savedUser) {
            const user =
                JSON.parse(savedUser);

            setSelectedUser(user);

            fetchTickets(user.user_id);
        }
    }, []);

  
    const fetchUsers = async () => {
        try {
            const data =
                await getUsers();
            console.log(data);
            setUsers(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchTickets = async (
        userId
    ) => {
        try {
            const data =
                await getTicketsByUser(
                    userId
                );

            setTickets(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchResponses = async (
        ticketId
    ) => {
        try {
            const data =
                await getResponsesByTicket(
                    ticketId
                );

            setResponses(data.data);

            setShowResponseModal(true);
        } catch (error) {
            console.error(error);
        }
    };

 
    const handleUserSelect = (
        user
    ) => {
        setSelectedUser(user);

        sessionStorage.setItem(
            "selectedUser",
            JSON.stringify(user)
        );

        fetchTickets(user.user_id);

        setShowUserModal(false);
    };

    return (
        <div
            className="
                min-vh-100
                d-flex
                flex-column
            "
        >

            {/* Header */}

            <Header
                selectedUser={
                    selectedUser
                }
                onOpenModal={() =>
                    setShowUserModal(
                        true
                    )
                }
            />

            {/* Main */}

            <main
                className="
                    container
                    flex-grow-1
                    mt-4
                "
            >

                {!selectedUser && (
                    <div
                        className="
                            alert
                            alert-info
                        "
                    >
                        Please select a
                        profile to view
                        tickets.
                    </div>
                )}

                {tickets.map(
                    (ticket) => (
                        <TicketCard
                            key={
                                ticket.ticket_id
                            }
                            ticket={
                                ticket
                            }
                            onShowResponses={
                                fetchResponses
                            }
                        />
                    )
                )}

            </main>

            {/* User Modal */}

            <UserModal
                users={users}
                show={
                    showUserModal
                }
                onClose={() =>
                    setShowUserModal(
                        false
                    )
                }
                onSelect={
                    handleUserSelect
                }
            />

            {/* Response Modal */}

            <ResponseModal
                responses={responses}
                show={
                    showResponseModal
                }
                onClose={() =>
                    setShowResponseModal(
                        false
                    )
                }
            />

            {/* Footer */}

            <Footer />

        </div>
    );
}

export default App;