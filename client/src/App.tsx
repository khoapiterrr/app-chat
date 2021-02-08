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

const store = configStore();
// const store = configStore();
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <ConnectedRouter history={getHistory()}>
            <RoutesComponent />
          </ConnectedRouter>
        </LanguageProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
