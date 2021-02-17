import PreLoader from 'components/PreLoader';
import Loadable from 'react-loadable';
import Spinner from '../Spinner';

function CustomLoadable(opts: any) {
  return Loadable(
    Object.assign(
      {
        loading: PreLoader,
        delay: 800,
        timeout: 20000,
      },
      opts,
    ),
  );
}
export default CustomLoadable;
