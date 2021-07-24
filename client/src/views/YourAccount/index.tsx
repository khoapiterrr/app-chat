import React from 'react';
import AccountBottom from 'assets/images/account-bottom.webp';
import AccountHeader from 'assets/images/account-header.webp';
import CustomSvgIcons from 'components/CustomSvgIcons';
import YourProfile from './components/YourProfile';
import AccountRoutes from 'containers/Account/routes';
import { getHistory } from 'app/store';
import { useRouteMatch } from 'react-router';
const YourAccount = () => {
  const [collapse, setCollapse] = React.useState(false);
  const { url } = useRouteMatch();
  const toggleCollapse = (e: any) => {
    e.preventDefault();
    setCollapse(!collapse);
  };

  return (
    <>
      {/* Your Account Personal Information */}
      <div className='header-spacer header-spacer-small'></div>
      <div className='main-header'>
        <div className='content-bg-wrap bg-account' />
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-8 m-auto col-md-8 col-sm-12 col-12'>
              <div className='main-header-content'>
                <h1>Cài đặt tài khoản</h1>
                <p>
                  Chào mừng bạn đến với trang tổng quan tài khoản của bạn! Ở đây
                  bạn sẽ tìm thấy mọi thứ bạn cần thay đổi thông tin hồ sơ, cài
                  đặt, đọc thông báo và yêu cầu, xem tin nhắn mới nhất của bạn,
                  thay đổi mật khẩu của bạn và nhiều hơn nữa! Ngoài ra, bạn có
                  thể tạo hoặc quản lý trang yêu thích của riêng bạn!
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className='img-bottom' src={AccountBottom} alt='friends' />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12'>
            <AccountRoutes />
          </div>
          <YourProfile toggleCollapse={toggleCollapse} collapse={collapse} />
        </div>
      </div>
    </>
  );
};

export default YourAccount;
