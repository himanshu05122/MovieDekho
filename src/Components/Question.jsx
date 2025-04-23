import React from 'react';

const Question = () => {
  return (
    <div className="space-y-4">
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">How do I create an account?</div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the registration process.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
        <div className="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the instructions sent to your email.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">How do I update my profile information?</div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">Can I cancel my subscription?</div>
        <div className="collapse-content text-sm">
          Yes, you can cancel anytime from your account settings under the "Subscription" tab.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">What payment methods are accepted?</div>
        <div className="collapse-content text-sm">
          We accept all major credit/debit cards, PayPal, and digital wallets like Apple Pay.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">Is my personal data safe?</div>
        <div className="collapse-content text-sm">
          Absolutely. We use industry-standard encryption and follow strict privacy policies.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">How do I contact support?</div>
        <div className="collapse-content text-sm">
          You can reach out through our Contact Us page or email us at support@example.com.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">Can I switch plans later?</div>
        <div className="collapse-content text-sm">
          Yes, you can upgrade or downgrade your plan anytime from your subscription settings.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">Do you offer a free trial?</div>
        <div className="collapse-content text-sm">
          Yes, we offer a 7-day free trial for all new users.
        </div>
      </div>
    </div>
  );
};

export default Question;
