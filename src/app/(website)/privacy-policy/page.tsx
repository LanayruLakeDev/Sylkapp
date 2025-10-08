export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-gray-700">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <p>We collect information you provide when you:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Create an account on our platform</li>
            <li>Connect your Facebook and Instagram accounts</li>
            <li>Use our automation features</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Facebook & Instagram Data</h2>
          <p>When you connect your Facebook and Instagram accounts, we access:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Your Facebook and Instagram posts and comments</li>
            <li>Direct messages for automation purposes</li>
            <li>Basic profile information</li>
          </ul>
          <p className="mt-2">This data is used solely to provide our automation services and is not shared with third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Provide Facebook and Instagram automation services</li>
            <li>Generate AI-powered responses</li>
            <li>Manage your account and subscription</li>
            <li>Send important service updates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Data Security</h2>
          <p>We implement industry-standard security measures to protect your data. Your Facebook and Instagram access tokens are encrypted and stored securely.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
          <p>We retain your data only as long as necessary to provide our services. You can request data deletion at any time through our support page.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p>Sylk App is developed by Ahmed Ben Abdallah Dev.</p>
          <p>If you have questions about this Privacy Policy, contact us at:</p>
          <p>Email: sylk@email.com</p>
        </section>
      </div>
    </div>
  );
}
