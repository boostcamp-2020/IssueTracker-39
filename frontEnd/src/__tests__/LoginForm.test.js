import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useState, useCallback} from 'react';
import axios from 'axios';

const LoginForm = () => {
  // Store the username so we can reference it in a submit handler
  const [username, setUsername] = useState('');

  // Create a state for the user data we are going to receive
  // from the API call upon form submit.
  const [userData, setUserData] = useState(null);

  // Whenever we change our username input's value
  // update the corresponding state's value.
  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  // Handle a submit event of the form
  const handleFormSubmit = useCallback(
    (event) => {
      // Prevent the default behavior, as we don't want
      // for our page to reload upon submit.
      event.preventDefault();

      // Perform a POST /login request and send the username
      axios
        .post('/login', {
          body: JSON.stringify({
            username,
          }),
        })
        .then((response) => setUserData(response.data));
    },
    [username],
  );

  if (userData) {
    return (
      <div>
        <h1>
          <span data-testid="firstName">{userData.firstName}</span>{' '}
          <span data-testid="lastName">{userData.lastName}</span>
        </h1>
        <p data-testid="userId">{userData.id}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

describe('LoginForm', () => {
  it('should allow a user to log in', async () => {
    render(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/username/i), 'johnUser');

    userEvent.click(screen.getByRole('button', {name: /submit/i}));

    expect(
      await screen.findByText('f79e82e8-c34a-4dc7-a49e-9fadc0979fda'),
    ).toBeInTheDocument();
    expect(await screen.findByText('John')).toBeInTheDocument();
    expect(await screen.findByText('Maverick')).toBeInTheDocument();
  });
});
