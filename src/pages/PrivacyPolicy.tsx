
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-burnout-black text-burnout-white">
      <Navbar />
      
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white mb-8">
            PRIVACY <span className="text-gradient">POLICY</span>
          </h1>
          
          <div className="space-y-8 text-burnout-gray-200 font-source text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Information We Collect</h2>
              <p>
                At Burnout Fitness Studio, we collect information you provide directly to us, such as when you create an account, 
                sign up for membership, book classes, or contact us for support. This may include your name, email address, 
                phone number, payment information, and fitness goals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, process transactions, 
                send you technical notices and support messages, communicate with you about our services, and respond to your comments and questions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share your information with service providers who assist us in operating our gym and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at info@burnoutfitness.com or call (555) BURNOUT.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
