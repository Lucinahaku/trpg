import React, { Suspense } from 'react';
import { RouteProvider, useRoute } from './contexts/RouteContext';
import AnimatedHeader from './components/animated-header';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Profile = React.lazy(() => import('./pages/Profile'));
const ScenarioList = React.lazy(() => import('./pages/ScenarioList'));
const Scenario = React.lazy(() => import('./pages/Scenario'));
const Seekers = React.lazy(() => import('./pages/Seekers'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500"></div>
  </div>
);

const AppContent: React.FC = () => {
  const { currentPath } = useRoute();

  const renderContent = () => {
    // Remove trailing slash if present
    const normalizedPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
    
    switch (normalizedPath.toLowerCase()) {
      case '':
      case '/':
        return <Home />;
      case '/profile':
        return <Profile />;
      case '/scenarios':
      case '/scenariolist':
        return <ScenarioList />;
      case '/seekers':
        return <Seekers />;
      case '/contact':
        return <Contact />;
      default:
        if (normalizedPath.startsWith('/scenario/')) {
          return <Scenario />;
        }
        return (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
              <p className="text-gray-600">ページが見つかりませんでした。</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeader />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          {renderContent()}
        </Suspense>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <RouteProvider>
      <AppContent />
    </RouteProvider>
  );
};

export default App;