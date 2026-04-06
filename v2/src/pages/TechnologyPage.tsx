import React from 'react';
import IndranavGen1Presentation from '../components/IndranavGen1Presentation';
import { GLSLHills } from '../components/GLSLHills';

const TechnologyPage: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-[#020617]">
      {/* Fixed Background Hills */}
      <div className="fixed inset-0 z-0 opacity-100 pointer-events-none">
        <GLSLHills speed={0.2} cameraZ={125} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <IndranavGen1Presentation />
      </div>
    </main>
  );
};

export default TechnologyPage;
