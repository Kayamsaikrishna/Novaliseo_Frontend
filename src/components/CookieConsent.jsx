import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  // Check if user has already made a choice
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    } else {
      try {
        const parsedConsent = JSON.parse(consent);
        setPreferences(parsedConsent.preferences);
        // Initialize cookies based on preferences
        initializeCookies(parsedConsent.preferences);
      } catch (e) {
        setIsVisible(true);
      }
    }
  }, []);

  const initializeCookies = (prefs) => {
    // Initialize necessary cookies
    if (prefs.necessary) {
      // Essential cookies for website functionality
      document.cookie = "cookieConsent=true; path=/; max-age=31536000"; // 1 year
    }
    
    // Initialize analytics cookies if accepted
    if (prefs.analytics) {
      // Google Analytics or similar
      // This would typically load analytics scripts
    }
    
    // Initialize marketing cookies if accepted
    if (prefs.marketing) {
      // Marketing/tracking cookies
      // This would typically load advertising scripts
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify({
      timestamp: new Date().toISOString(),
      preferences: allAccepted
    }));
    
    initializeCookies(allAccepted);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    
    setPreferences(onlyNecessary);
    localStorage.setItem('cookieConsent', JSON.stringify({
      timestamp: new Date().toISOString(),
      preferences: onlyNecessary
    }));
    
    initializeCookies(onlyNecessary);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      timestamp: new Date().toISOString(),
      preferences: preferences
    }));
    
    initializeCookies(preferences);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleCustomize = () => {
    setShowPreferences(true);
  };

  const handleClosePreferences = () => {
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cookie Consent Banner */}
      <AnimatePresence>
        {!showPreferences && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-[100] shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white">Cookie Preferences</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    You can choose which cookies to accept. Read our{' '}
                    <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                      Privacy Policy
                    </a>{' '}
                    for more information.
                  </p>
                </div>
                
                <div className="mt-6 md:mt-0 md:ml-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Reject All
                  </Button>
                  <Button
                    onClick={handleCustomize}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Customize
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 text-xs text-gray-500">
                <p>Your privacy is important to us. You can change your cookie preferences at any time by clicking the cookie settings link in the footer.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Preferences Panel */}
      <AnimatePresence>
        {showPreferences && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[101] p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Cookie Preferences</h3>
                    <p className="text-gray-400 mt-1">Manage your cookie settings and preferences</p>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={handleClosePreferences}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5 mt-1">
                      <input
                        id="necessary"
                        name="necessary"
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="necessary" className="font-medium text-gray-200">
                        Necessary Cookies
                      </label>
                      <p className="text-gray-400 text-sm mt-1">Required for the website to function properly. Cannot be disabled.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5 mt-1">
                      <input
                        id="analytics"
                        name="analytics"
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="analytics" className="font-medium text-gray-200">
                        Analytics Cookies
                      </label>
                      <p className="text-gray-400 text-sm mt-1">Help us understand how visitors interact with our site. Used for statistical analysis.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5 mt-1">
                      <input
                        id="marketing"
                        name="marketing"
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="marketing" className="font-medium text-gray-200">
                        Marketing Cookies
                      </label>
                      <p className="text-gray-400 text-sm mt-1">Used to make advertising messages more relevant to you and to limit the number of times you see an advertisement.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Reject All
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={handleSavePreferences}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Save Preferences
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;