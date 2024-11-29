import React from 'react';
import { useAssessmentStore } from './store/assessmentStore';
import { CategorySection } from './components/CategorySection';
import { personalitySection } from './data/personalityQuestions';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProgressBar } from './components/ProgressBar';
import { AssessmentHeader } from './components/AssessmentHeader';

function App() {
  const { currentCategoryIndex, nextCategory, previousCategory } = useAssessmentStore();
  const currentCategory = personalitySection.categories[currentCategoryIndex];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <AssessmentHeader />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Section 1: Personality Assessment
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete this section to understand your personality traits and how they
              align with different career paths.
            </p>
          </div>

          <ProgressBar 
            categories={personalitySection.categories}
            currentIndex={currentCategoryIndex}
          />

          {currentCategory && <CategorySection category={currentCategory} />}
          
          <div className="max-w-2xl mx-auto flex justify-between pb-8">
            <button
              onClick={previousCategory}
              disabled={currentCategoryIndex === 0}
              className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </button>
            
            <button
              onClick={nextCategory}
              disabled={currentCategoryIndex === personalitySection.categories.length - 1}
              className="flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;