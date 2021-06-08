import React from 'react';
import axiosClient from 'api/axiosClient';

const useSearchInfo = (userId: string) => {
  const [userData, setUserData] = React.useState<any>();
  React.useEffect(() => {
    axiosClient
      .get(`/users/${userId}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err, 'useSearchInfo'));
  }, [userId]);
  return userData;
};

export default useSearchInfo;
