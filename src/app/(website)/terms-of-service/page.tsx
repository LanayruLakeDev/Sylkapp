export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-gray-700">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
          <p>By using our Instagram automation service, you agree to these terms. If you do not agree, please do not use our service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Service Description</h2>
          <p>Our platform provides Instagram automation services including:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Automated responses to comments and direct messages</li>
            <li>AI-powered engagement tools</li>
            <li>Analytics and performance tracking</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Use the service in compliance with Instagram's Terms of Service</li>
            <li>Not use the service for spam or inappropriate content</li>
            <li>Maintain the security of your account credentials</li>
            <li>Use automation responsibly and ethically</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Instagram Compliance</h2>
          <p>Our service operates within Instagram's API guidelines. Users must ensure their Instagram accounts comply with Instagram's community guidelines and terms of service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Subscription and Payments</h2>
          <p>Premium features require a subscription. Payments are processed securely through Stripe. Subscriptions can be cancelled at any time.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Service Availability</h2>
          <p>We strive to maintain 99% uptime but cannot guarantee uninterrupted service. We may temporarily suspend service for maintenance or updates.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
          <p>Our service is provided "as is." We are not liable for any damages resulting from the use of our automation tools.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Termination</h2>
          <p>We may terminate accounts that violate these terms or Instagram's policies. Users can cancel their accounts at any time.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <p>For questions about these terms, contact us at:</p>
          <p>Email: support@sylkapp.vercel.app</p>
        </section>
      </div>
    </div>
  );
}
