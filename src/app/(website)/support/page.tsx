export default function Support() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Support</h1>
      
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-3">Get Help</h2>
          <p>Need assistance with our Instagram automation platform? We're here to help!</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><strong>Email:</strong> support@sylkapp.vercel.app</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Common Issues</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Instagram Connection Issues</h3>
              <p>If you're having trouble connecting your Instagram account, ensure you have a Business or Creator account and try disconnecting/reconnecting.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Automation Not Working</h3>
              <p>Check that your automation rules are active and that your Instagram account permissions are properly set.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">AI Responses</h3>
              <p>AI responses are available for Pro subscribers only. Ensure your subscription is active and automation rules are configured.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Billing Questions</h3>
              <p>For subscription and billing inquiries, contact us with your account email address.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">When Contacting Support</h2>
          <p>Please include the following information:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Your account email address</li>
            <li>Description of the issue</li>
            <li>Steps you've already tried</li>
            <li>Screenshots (if relevant)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Feature Requests</h2>
          <p>Have an idea for a new feature? We'd love to hear from you! Send your suggestions to our support email.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Emergency Issues</h2>
          <p>For urgent issues affecting your Instagram automation, mark your email as "URGENT" in the subject line.</p>
        </section>
      </div>
    </div>
  );
}
