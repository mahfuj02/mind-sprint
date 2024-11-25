import React from 'react';

const InstructorProfile = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section className={`py-16 ${isDarkMode ? 'bg-darkMainBg' : 'bg-lightMainBg'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-textDark' : 'text-textLight'}`}>
            Message from the Founder
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image Container */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-xl"></div>
            <img 
              src="https://avatars.githubusercontent.com/u/50284327?v=4"
              alt="Md Mahfuj Ahmed"
              className="relative z-10 w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Content Container */}
          <div className="md:flex-1 space-y-6">
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-textDark' : 'text-textLight'}`}>
                    Mahfuj Ahmed    
              </h3>
              <p className="text-primary font-semibold">
                Founder - MindSprint
              </p>
            </div>

            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>
              Mahfuj Ahmed is a passionate technology enthusiast and aspiring full-stack developer currently studying Full Stack Web Development at Red River College. His journey began in 2019, driven by a love for coding and innovation.              </p>
              <p>
              With experience in modern technologies like C++, Python, Java, Next.js, React.js, PHP, and Django, Mahfuj is dedicated to building scalable and user-friendly applications. His focus remains on mastering full-stack development and contributing to the tech community.              </p>
            </div>

            {/* Trade License Info */}
            <div className="pt-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                {/* <img 
                  src="/api/placeholder/32/32"
                  alt="Learn With Mahfuj mILogo"
                  className="w-5 h-5"
                /> */}
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Business Licence: MA312654/02
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;