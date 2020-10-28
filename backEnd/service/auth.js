const {users} = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

/*
user : {
  idx:int,
  userId:string,
  userPw:string
}
*/
function makeToken(user) {
  const {idx, userId} = user;
  const token = jwt.sign(
    {
      idx,
      userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2h',
    },
  );
  return token;
}

async function isRegisteredGithub(email) {
  const user = await users.findOne({where: {userId: email}});

  if (!user) return undefined;

  return user;
}

async function signUpGithub(email) {
  const user = await users.create({
    userId: email,
  });

  return user;
}

async function findUserOrCreate(email) {
  let user = await isRegisteredGithub(email);

  if (user === undefined) {
    user = await signUpGithub(email);
  }

  return user;
}

//jwt 생성하는 코드

module.exports = {findUserOrCreate, makeToken};
