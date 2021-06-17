db.createUser({
  user: 'ltk',
  pwd: 'ltk1999',
  roles: [
    {
      role: 'readWrite',
      db: 'app-chat',
    },
  ],
});

db.users.insert({
  role: 'user',
  deleteFlag: false,
  status: 'offline',
  firstName: 'Trọng',
  lastName: 'Khoa',
  email: 'ltk.gym@gmail.com',
  password: '$2b$10$l/Wd0MbckomOcmnTy49sNuSSSKGMAVM8S0viUzd7SpYEMH4moAR1m',
  gender: 'Male',
  city: 'Hà Nội',
  country: 'Vietnam',
  facebookLink: 'https://www.facebook.com/KhoaPiterrr/',
  phoneNumber: '0393837623',
  province: '1',
  description: 'test thông tin',
  _id: '607fd37e8a21546a7cc4602c',
});
db.friends.insert({
  userId: '607fd37e8a21546a7cc4602c',
  friends: [],
});
