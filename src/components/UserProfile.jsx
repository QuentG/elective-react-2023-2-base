import React from 'react'

const UserProfile = ({ name, age }) => (
    <div className="card">
        <span>Name : {name}</span>
        <br />
        <span>Age : {age}</span>
    </div>
)

export default UserProfile