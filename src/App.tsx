import React, { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import { LogSnag } from '@logsnag/node';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import CarouselPage from './CarouselPage';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const logsnag = new LogSnag({
  token: 'LOGSNAG_TOKEN',
  project: 'PROJECT_NAME',
});

const track = async () => {
  await logsnag.track({
    channel: 'yes',
    event: 'Will you be my girlfriend?',
    description: 'She said yes!',
    icon: '💖',
    notify: true,
  });
};

function App() {
  const steps = [
    { content: 'Heyyyyy, Angel.', image: '/character/one.png' },
    { content: 'I’ve always liked you from afar...', image: '/character/two.png' },
    // ... other steps
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [sheWantsToBeMyValentine, setSheWantsToBeMyValentine] = useState(false);
  const { width, height } = useWindowSize();
  const history = useHistory();

  useEffect(() => {
    const imagePaths = [...steps.map(step => step.image), '/character/yayyyy.png'];
    imagePaths.forEach(path => {
      const img = new Image();
      img.src = path;
    });
  }, []);

  useEffect(() => {
    if (sheWantsToBeMyValentine) {
      setTimeout(() => {
        history.push('/carousel');
      }, 2000); // Navigate to carousel after 2 seconds
    }
  }, [sheWantsToBeMyValentine, history]);

  return (
    <Router>
      <Switch>
        <Route path="/carousel">
          <CarouselPage />
        </Route>
        <Route path="/">
          <div className="bg-[#FFC5D3] min-h-screen text-white p-5 flex flex-col items-center justify-center max-w-md mx-auto">
            <motion.img
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src={steps[currentStep].image}
              alt=""
              className="w-40"
            />
            <motion.div
              key={currentStep + '-text'}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-josefin text-4xl font-bold"
            >
              {steps[currentStep].content}
            </motion.div>
            {currentStep < steps.length - 1 && (
              <>
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-white text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-10 font-semibold"
                >
                  Next
                </button>
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="bg-white text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-2 font-semibold opacity-90"
                  >
                    Back
                  </button>
                )}
              </>
            )}
            {currentStep === steps.length - 1 && (
              <button
                onClick={async () => {
                  setSheWantsToBeMyValentine(true);
                  await track();
                }}
                className="bg-white text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-10 font-semibold"
              >
                Yes
              </button>
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;