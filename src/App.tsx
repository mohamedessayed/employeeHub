
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext';

import MainLayout from './layouts/MainLayout';

import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Departments from './pages/Departments';
import Settings from './pages/Settings';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>

        <MainLayout>
          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route
              path="/employees"
              element={<Employees />}
            />

            <Route
              path="/departments"
              element={<Departments />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

          </Routes>
        </MainLayout>

      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
