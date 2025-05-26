
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-burnout-black text-burnout-white">
      <Navbar />
      
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white mb-8">
            TERMS OF <span className="text-gradient">SERVICE</span>
          </h1>
          
          <div className="space-y-8 text-burnout-gray-200 font-source text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Membership Terms</h2>
              <p>
                By purchasing a membership at Burnout Fitness Studio, you agree to these terms and conditions. 
                Memberships are non-transferable and non-refundable unless otherwise specified. Monthly memberships 
                require 30 days written notice for cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Facility Usage</h2>
              <p>
                Members must follow all gym rules and regulations. Proper workout attire and closed-toe shoes are required. 
                Members are responsible for their personal belongings. The gym is not responsible for lost or stolen items.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Health and Safety</h2>
              <p>
                Members participate in fitness activities at their own risk. It is recommended to consult with a physician 
                before beginning any exercise program. Members must inform staff of any medical conditions that may affect their ability to exercise safely.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Code of Conduct</h2>
              <p>
                All members must treat staff and other members with respect. Inappropriate behavior, including harassment 
                or intimidation, will result in immediate termination of membership without refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Limitation of Liability</h2>
              <p>
                Burnout Fitness Studio's liability is limited to the amount of membership fees paid. We are not liable for 
                any indirect, incidental, or consequential damages arising from the use of our facilities or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Contact Information</h2>
              <p>
                For questions regarding these terms, please contact us at info@burnoutfitness.com or call (555) BURNOUT.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
