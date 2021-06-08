import CustomSvgIcons from 'components/CustomSvgIcons';
import React from 'react';
import classnames from 'classnames';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link, useRouteMatch } from 'react-router-dom';
import contactSelectors from 'containers/Contact/selectors';
import { useSelector } from 'react-redux';

interface IProps {
  toggleCollapse: any;
  collapse: boolean;
}

const YourProfile: React.FC<IProps> = ({ toggleCollapse, collapse }) => {
  const { url } = useRouteMatch();
  const friendRequest = useSelector(contactSelectors.selectRequests);
  const friendRequestSend = useSelector(contactSelectors.selectRequestsSent);

  const handleClickDefault = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className='col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 responsive-display-none'>
      <div className='ui-block'>
        {/* Your Profile  */}
        <div className='your-profile'>
          <div className='ui-block-title ui-block-title-small'>
            <h6 className='title'>Your PROFILE</h6>
          </div>
          <div id='accordion' role='tablist' aria-multiselectable='true'>
            <div className='card'>
              <div className='card-header' role='tab' id='headingOne'>
                <h6 className='mb-0'>
                  <a
                    href='# !'
                    aria-expanded={collapse}
                    onClick={toggleCollapse}
                    aria-controls='collapseOne'>
                    Profile Settings
                    {collapse ? (
                      <CustomSvgIcons
                        className='olymp-dropdown-arrow-icon'
                        id='olymp-dropdown-arrow-icon'
                      />
                    ) : (
                      <ChevronRightIcon style={{ fontSize: 12 }} />
                    )}
                  </a>
                </h6>
              </div>
              <div
                id='collapseOne'
                className={classnames('collapse', { show: collapse })}
                role='tabpanel'
                aria-labelledby='headingOne'>
                <ul className='your-profile-menu'>
                  <li>
                    <Link to={`${url}/personal-info`}>
                      Personal Information
                    </Link>
                  </li>

                  <li>
                    <Link to={`${url}/change-password`}>Change Password</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='ui-block-title'>
            <Link to={`${url}/notification`} className='h6 title'>
              Send Requests
            </Link>
            <a
              href='# !'
              onClick={handleClickDefault}
              className='items-round-little bg-primary'>
              {friendRequestSend?.length ?? 0}
            </a>
          </div>
          <div className='ui-block-title'>
            <Link to={`${url}/friend-requests`} className='h6 title'>
              Friend Requests
            </Link>
            <a
              href='# !'
              onClick={handleClickDefault}
              className='items-round-little bg-blue'>
              {friendRequest?.length ?? 0}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourProfile;
