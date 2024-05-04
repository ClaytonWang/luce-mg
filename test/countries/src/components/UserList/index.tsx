import { User } from '../../utils/types';
import './index.css';
const UserList = ({ users }: { users: User[] }) => {
  return users.map((user, index) => (
    <div key={index} className="user">
        <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>City:</strong> {user.location.city}</p>
        <p><strong>State:</strong> {user.location.state}</p>
        <p><strong>Date Registered:</strong> {new Date(user.registered.date).toLocaleDateString()}</p>
      </div>
    
  ));
};

export default UserList;
