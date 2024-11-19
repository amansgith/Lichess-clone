import { useState } from "react";
import { userProfile } from "../utils/lichess";
// import 'profile.css';

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
                    <p>{profile.profile.bio}</p>
                    <p>{profile.count.all}</p>
                    <p>{profile.prefs.blitz}</p>
                </div>
            )}
        </div>
    );
}

export default Profile;