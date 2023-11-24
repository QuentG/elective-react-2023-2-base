import { Fragment } from 'react'
 
const UserEdit = ({ user, onChangeUser }) => {
  const { name, age, month } = user

  return (
    <Fragment>
      <input 
        type="text" 
        value={name}
        onChange={(e) => onChangeUser({ ...user, name: e.target.value })}
      />

      <p>Le prénom de l'utilisateur est : {name}</p>
      {age >= 1 ? (
        <p>Il a {age} an{age > 1 && 's'} {month > 0 && `et ${month} mois`}</p>
      ) : month >= 1 ? (
        <p>Il a {month} mois</p>
      ) : (
        <p>Il n'a pas encore d'âge</p>
      )}

      <input
        type='number'
        value={age}
        onChange={(e) => onChangeUser({ ...user, age: e.target.value })}
      />
       <input
        type='number'
        value={month}
        onChange={(e) => onChangeUser({ ...user, month: e.target.value })}
      />
    </Fragment>
  )
}
 
export default UserEdit