import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
    //const { fullName, bio, profession, handleName, children } = props;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {props.children}
            <div>
                <h2>{props.fullName}</h2>
                <p>{props.bio}</p>
                <p>{props.profession}</p>
                <button onClick={() => props.handleName(props.fullName)}>Click me</button>
            </div>
        </div>
    );
};

Profile.defaultProps = {
    fullName: 'John Doe',
    bio: 'A brief bio about the user',
    profession: 'Software engineer',
    handleName: () => { },
};

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
    children: PropTypes.element,
};

export default Profile;