import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return userData.loading ? (
    <h1>Loading...</h1>
  ) : userData.error ? (
    <h1>{userData.error}</h1>
  ) : (
    <div>
      <h1>users list</h1>

      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => {
            return (
              <section key={user.id}>
                <p>
                  {user.name} - {user.email}
                </p>
              </section>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
