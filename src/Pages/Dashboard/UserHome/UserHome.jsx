import useAuth from "../../../hook/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>Hi, Welcome </h1>
            <span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
            </span>
        </div>
    );
};

export default UserHome;