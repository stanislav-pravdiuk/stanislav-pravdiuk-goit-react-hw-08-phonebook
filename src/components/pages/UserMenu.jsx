import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { logOut } from "redux/auth/authSlice";
import { delToken } from "services/instance";

function UserMenu() {

    const { profile } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
        const handleLogout = () => {
        dispatch(logOut());
        delToken();
    };

    return (
        <div>
        <button onClick={() => { navigate('/') }}>Phonebook</button>
        <p>email: {profile.email}</p>
        <button onClick={handleLogout}>Logout</button>
        </div>
    );
};
export default UserMenu;
