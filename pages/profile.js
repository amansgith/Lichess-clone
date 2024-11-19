import { useState } from "react";
import { userProfile } from "../utils/lichess";

const Profile = () => {
    const [username, setusername] = useState('');
    const [profile, setProfile] = useState(null);

    const fetchProfile = async () => {
        const data = await userProfile(username);
        setProfile(data);
    }

    return (
        <div>
            <h1>Lichess User Profile</h1>
            <input type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="Enter a username" />

            <button onClick={fetchProfile}>Get Profile</button>
            {profile && (
                <div>
                    <p>{profile.username}</p>
                    {/* <p>{profile.}</p> */}
                    <p>{profile.count.all}</p>
                    {/* <p>{profile.profile.fiderating}</p> */}
                </div>
            )}
        </div>
    );
}

export default Profile;