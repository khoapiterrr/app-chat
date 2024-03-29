// Bootstrap css
// import 'bootstrap/dist/css/bootstrap-reboot.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-grid.css';
import 'assets/css/bootstrap-reboot.css';
import 'assets/css/bootstrap.css';
import 'assets/css/bootstrap-grid.css';
import 'emoji-mart/css/emoji-mart.css';
//  Main Styles SCSS
import 'assets/scss/fonts.scss';
import 'assets/scss/main.scss';

// demo https://codesandbox.io/s/l9n3vnz8yz?file=/index.js:123-163
import 'react-image-lightbox/style.css';

import React, { Suspense } from 'react';
import Spinner from './components/Spinner';
import { configStore, getHistory } from 'app/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import RoutesComponent from 'routes/RoutesComponent';

// Import i18n messages
import { translationMessages } from './i18n';
import LanguageProvider from 'containers/LanguageProvider';
import { MuiThemeProvider } from '@material-ui/core';
import theme from 'constants/themes';
import './app.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import CustomSnackbar from 'components/Snackbar';

const store = configStore();
// const store = configStore();

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CustomSnackbar />
          <LanguageProvider messages={translationMessages}>
            <ConnectedRouter history={getHistory()}>
              {/* <PreLoader /> */}
              <RoutesComponent />
            </ConnectedRouter>
          </LanguageProvider>
        </MuiThemeProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
