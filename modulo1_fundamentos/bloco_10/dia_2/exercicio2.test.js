const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

  describe('getUserName - promise', () => {
    describe('when the user id exists', () => {
      it('returns the user name', () => {
        expect.assertions(1);
        return getUserName(4).then(data => expect(data).toEqual('Mark'));
      });
    });
  
    describe('when the user id does not exists', () => {
      it('returns an error', () => {
        expect.assertions(1);
        return getUserName(2).catch(error =>
          expect(error).toEqual({ error: 'User with 2 not found.' })
        );
      });
    });
  });