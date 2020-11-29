import React, {useEffect} from 'react'

// class Profile extends React.Component {
//     render() {
//         return (
//             <p>
//                 This is Profile.js.
//             </p>
//         )
//     }
// }

// export default Profile

const Profile = ({height, weight}) => {
    useEffect(() => {
        // write component did mount code here
        return () => {
            //write any componenet did unmount here
        }
    },[])

    return (
    <p>
        This is Profile.js.
    </p>
    )
}
export default Profile