import React from 'react';
import GroupBottom from 'assets/images/group-bottom.webp';
import { useQuery } from 'Hooks/useQuery';
import CustomSvgIcons from 'components/CustomSvgIcons';
import FriendSuggestions from 'containers/Contact/FriendSuggestions';
import SearchContact from 'containers/Contact/SearchContact';
const SearchPage = () => {
  const queryParams = useQuery();
  return (
    <>
      <div className='header-spacer header-spacer-small'></div>
      <div className='main-header'>
        <div className='content-bg-wrap bg-group' />
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-8 m-auto col-md-8 col-sm-12 col-12'>
              <div className='main-header-content'>
                <h1>Results search friends</h1>
                {/* <p>
                  Welcome to your friends groups! Do you wanna know what your
                  close friends have been up to? Groups will let you easily
                  manage your friends and put the into categories so when you
                  enter you’ll only see a newsfeed of those friends that you
                  placed inside the group. Just click on the plus button below
                  and start now!
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <img className='img-bottom' src={GroupBottom} alt='friends' />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-sm-12 col-12'>
            <SearchContact keyword={queryParams.get('q')} />
          </div>
          <div className='col col-xl-4 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12'>
            <FriendSuggestions />
            <FriendSuggestions />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
