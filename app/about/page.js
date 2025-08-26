// step1: made this client component as we will be using useState here below.
"use client"
import React, { useState } from 'react';

// step2: head used to use HTML head elements like title and meta description now , here below.
import Head from 'next/head';

const AboutPage = () => {

    // step3: created a state to track which card is currently hovered ; initially null as no card hovered initially. 
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">

        {/* USE HEAD TO SET THE TITLE AND META DESCRIPTION OF THE PAGE HERE BELOW. */}
      <Head>
        <title>About Trimsy | Fast, Simple & Secure URL Shortener</title>
        <meta name="description" content="Learn about Trimsy, a privacy-focused URL shortener that provides fast, simple, and secure link shortening services." />
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Trimsy</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Trimsy 🚀 is a fast, secure, and user-friendly URL shortener that lets you create, customize, and share short links effortlessly while protecting your privacy.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 transform transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Trimsy, our mission is to empower individuals and organizations to create and share short, easy-to-remember links that are fast, reliable, and easy to remember. We believe that URL shortening should be accessible to everyone, regardless of their technical expertise or background.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Amazing Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Privacy Feature */}
            <div 

            // step4: now each card has the feature to get scaled up when hovered on it , else not ; also its shadow is md normally and increases to 2xl when hovered below.

            // step5: now we have used the state here , which initailly is "null" , now when user moves mouse on it ; it sets its value to 1 if hovered on card 1 and sets it back to null when moved mouse away from it ; similarly 2 and 3 for the other cards as well.

              className={`bg-white rounded-2xl p-6 transition-all duration-300 ease-in-out transform 
                ${hoveredFeature === 1 ? 'scale-105 shadow-2xl' : 'shadow-md'} group`}
              onMouseEnter={() => setHoveredFeature(1)}
              onMouseLeave={() => setHoveredFeature(null)}

            //   step6: so we give the following shadow color if hovered els ekept it '' i.e. default shadow otherwise.
              style={{
                boxShadow: hoveredFeature === 1 ? '0 25px 50px -12px rgba(59, 130, 246, 0.25)' : ''
              }}
            >

                {/* step7: we add svgs to each card and rotate the svg icon when hovered on its parent having "group" there. */}
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Privacy Focused</h3>
              <p className="text-gray-600">
                We prioritize your privacy by never tracking or storing your browsing data.
              </p>

              {/* step8: now we have a horizontal line there which gets full width when hovered on card 1 i.e. hoveredFeature === 1 else becomes width 0 and this transition happens in 300ms making it look good there thus , here below. */}

              {/* step9: also kept some padding from top text using "mt" here below. */}
              <div className={`mt-4 h-1 bg-blue-500 transition-all duration-300 ${hoveredFeature === 1 ? 'w-full' : 'w-0'}`}></div>
            </div>
            
            {/* step10: same cards now duplicated here below. */}
            <div 
              className={`bg-white rounded-2xl p-6 transition-all duration-300 ease-in-out transform 
                ${hoveredFeature === 2 ? 'scale-105 shadow-2xl' : 'shadow-md'} group`}
              onMouseEnter={() => setHoveredFeature(2)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{
                boxShadow: hoveredFeature === 2 ? '0 25px 50px -12px rgba(16, 185, 129, 0.25)' : ''
              }}
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Simple & Easy</h3>
              <p className="text-gray-600">
                Create short links in just a few clicks. No complicated setup required.
              </p>
              <div className={`mt-4 h-1 bg-green-500 transition-all duration-300 ${hoveredFeature === 2 ? 'w-full' : 'w-0'}`}></div>
            </div>
            
            {/* Customizable Feature */}
            <div 
              className={`bg-white rounded-2xl p-6 transition-all duration-300 ease-in-out transform 
                ${hoveredFeature === 3 ? 'scale-105 shadow-2xl' : 'shadow-md'} group`}
              onMouseEnter={() => setHoveredFeature(3)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{
                boxShadow: hoveredFeature === 3 ? '0 25px 50px -12px rgba(139, 92, 246, 0.25)' : ''
              }}
            >
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customizable Links</h3>
              <p className="text-gray-600">
                Personalize your shortened URLs with custom aliases to make them memorable.
              </p>
              <div className={`mt-4 h-1 bg-purple-500 transition-all duration-300 ${hoveredFeature === 3 ? 'w-full' : 'w-0'}`}></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-10 text-center transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Get Started Today</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Trimsy for shortening their URLs. It&apos;s fast, secure, and free.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-md transform hover:-translate-y-1 cursor-pointer">
            Try Trimsy Now
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .hover-pulse:hover {
          animation: pulse 2s infinite;
        }
        .feature-card {
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default AboutPage;