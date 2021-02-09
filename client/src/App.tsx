// Bootstrap css
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
// custom scss
import 'assets/scss/fonts.scss';
import 'assets/scss/main.scss';

import React, { Suspense } from 'react';
import Spinner from './components/Spinner';
import { configStore, getHistory } from 'app/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import RoutesComponent from 'routes/RoutesComponent';

// Import i18n messages
import { translationMessages } from './i18n';
import LanguageProvider from 'containers/LanguageProvider';
import PreLoader from 'components/PreLoader';

const store = configStore();
// const store = configStore();
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <ConnectedRouter history={getHistory()}>
            {/* <PreLoader /> */}
            <RoutesComponent />
          </ConnectedRouter>
        </LanguageProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
