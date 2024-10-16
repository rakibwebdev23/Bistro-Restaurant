import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <p className="text-3xl">Hi, Welcome</p>
            {
                user?.displayName ? user.displayName : 'Back'
            }
        </div>
    );
};

export default UserHome;