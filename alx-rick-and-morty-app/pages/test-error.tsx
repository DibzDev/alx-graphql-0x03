import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const TestErrorPage: React.FC = () => {
  return (
    <div>
      <h1>Testing ErrorBoundary</h1>
      <p>This page tests if ErrorBoundary catches errors.</p>
      
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
      
      <p>If ErrorBoundary is working, you'll see an error message above instead of this text crashing.</p>
    </div>
  );
};

export default TestErrorPage;