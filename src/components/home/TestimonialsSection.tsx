import React from 'react';

interface Review {
  id: string;
  name: string;
  platform: 'YouTube' | 'Facebook';
  comment: string;
  avatarUrl: string;
}

const TestimonialsSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const reviews: Review[] = [
    {
      id: '1',
      name: 'John Doe',
      platform: 'YouTube',
      comment: 'I didn’t know we had such amazing creators in Bangladesh. Your content is not just on par with platforms like Traversy Media or Academind—it’s even more efficient! Proud to have a content creator like you from our country.',
      avatarUrl: 'https://i.pravatar.cc/48?img=1',
    },
    {
      id: '2',
      name: 'Basra K',
      platform: 'Facebook',
      comment: 'Your use of animations makes understanding the concepts so much easier. I can only imagine the effort you put into these videos. Best wishes!',
      avatarUrl: 'https://i.pravatar.cc/48?img=2',
    },
    {
      id: '3',
      name: 'Cristiano Ronaldo',
      platform: 'Facebook',
      comment: 'Your videos stand out from other local content creators. The level of detail and clarity you provide is unmatched. Looking forward to more amazing content from you!',
      avatarUrl: 'https://i.pravatar.cc/48?img=3',
    },
    {
      id: '4',
      name: 'Harsh Sing',
      platform: 'YouTube',
      comment: 'Dear Mahfuj, I had to reach out with a huge thank you for your incredible React tutorials. Your teaching style is exceptional and truly inspiring!',
      avatarUrl: 'https://i.pravatar.cc/48?img=4',
    },
  ];


  return (
    <section className={`py-16 ${isDarkMode ? 'bg-darkMainBg' : 'bg-lightMainBg'}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Icon */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6">
            <svg
              viewBox="0 0 24 24"
              className={`w-full h-full ${isDarkMode ? 'text-white' : 'text-darkMainBg'}`}
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
            </svg>
          </div>
          <h2 className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-textDark' : 'text-textLight'}`}>
            What <span className="text-primary">Our Learners</span> Say About Us
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Our learners have always expressed their love and appreciation for Learn with Mahfuj.
          </p>

        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`
                p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-1
                ${isDarkMode ? 'bg-cardDark' : 'bg-cardLight'}
                shadow-card hover:shadow-lg
              `}
            >
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={review.avatarUrl}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className={`font-bold ${isDarkMode ? 'text-textDark' : 'text-textLight'}`}>
                    {review.name}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    commented on {review.platform}
                  </p>
                </div>
              </div>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;