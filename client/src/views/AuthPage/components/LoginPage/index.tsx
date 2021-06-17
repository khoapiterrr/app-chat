import React, { ReactNode } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

interface IProps {
  children?: ReactNode;
  tabLink?: any;
  onClickChangeTab?: any;
}
const LoginPage: React.FC<IProps> = ({
  tabLink,
  children,
  onClickChangeTab,
}) => {
  return (
    <div className='container'>
      <div className='row display-flex'>
        <div className='col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
          <div className='landing-content'>
            <h1>Chào mừng bạn đến với Mạng xã hội lớn nhất của chúng tôi</h1>
            <p>
              Chúng tôi là mạng xã hội tốt nhất và lớn nhất với 5 tỷ hoạt động
              người dùng trên toàn thế giới. Chia sẻ suy nghĩ của bạn, viết bài
              đăng trên blog, thể hiện âm nhạc yêu thích của bạn qua Stopify,
              kiếm huy hiệu và hơn thế nữa!
            </p>
            <a
              href='# !'
              onClick={(e) => {
                e.preventDefault();
                onClickChangeTab('register');
              }}
              className='btn btn-md btn-border c-white'>
              Đăng kí ngay!
            </a>
          </div>
        </div>
        <div className='col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
