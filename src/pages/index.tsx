import { useState } from 'react';
import CompanyLanding from './CompanyLanding';
import SwitchNavbar from './SwitchNavbar';
import StudentLanding from './StudentLanding';

export default function Home() {
  const [version, setVersion] = useState('student');

  return (
    <>
      <SwitchNavbar setVersion={setVersion} version={version} />
      {version === 'student' && <StudentLanding />}
      {version === 'company' && <CompanyLanding />}
    </>
  );
}

// import { useState, useEffect } from 'react';
// import CompanyLanding from './CompanyLanding';
// import SwitchNavbar from './SwitchNavbar';
// import StudentLanding from './StudentLanding';

// export default function Home() {
//   const [version, setVersion] = useState('student');
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     setIsTransitioning(true);
//     const timer = setTimeout(() => setIsTransitioning(false), 300); // 300ms matches the transition duration
//     return () => clearTimeout(timer);
//   }, [version]);

//   const transitioningClass = "opacity-0 pointer-events-none";
//   const shownClass = "opacity-100";

//   return (
//     <>
//       <SwitchNavbar setVersion={setVersion} version={version} />
//       <div className={`transition-all duration-300 ${version === 'student' && !isTransitioning ? shownClass : transitioningClass}`}>
//         <StudentLanding />
//       </div>
//       <div className={`transition-all duration-300 ${version === 'company' && !isTransitioning ? shownClass : transitioningClass}`}>
//         <CompanyLanding />
//       </div>
//     </>
//   );
// }

