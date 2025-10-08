export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="space-y-6 text-gray-700">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">What Are Cookies</h2>
          <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">How We Use Cookies</h2>
          <p>Sylk uses cookies for the following purposes:</p>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly, including authentication and security</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
            <li><strong>Analytics Cookies:</strong> Track usage patterns to improve our service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Types of Cookies We Use</h2>
          
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Authentication Cookies</h3>
            <p>These cookies are essential for logging into your account and maintaining your session securely. Without these cookies, you cannot access your Sylk dashboard.</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Preference Cookies</h3>
            <p>These cookies remember your settings and preferences, such as language preferences and display settings.</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Analytics Cookies</h3>
            <p>We use analytics cookies to understand how users interact with our platform, helping us improve the user experience and service quality.</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Third-Party Cookies</h3>
            <p>We use third-party services that may set their own cookies, including:</p>
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Clerk:</strong> For authentication and user management</li>
              <li><strong>Stripe:</strong> For payment processing</li>
              <li><strong>Facebook & Instagram:</strong> For social media integration and automation features</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Managing Cookies</h2>
          <p>You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.</p>
          <p className="mt-2">Please note that disabling cookies may affect the functionality of our website and prevent you from using certain features of Sylk.</p>
          
          <div className="mt-4">
            <h3 className="font-semibold mb-2">How to Control Cookies:</h3>
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Browser Settings:</strong> You can set your browser to refuse all cookies or to alert you when a cookie is being sent</li>
              <li><strong>Cookie Preferences:</strong> You can manage your cookie preferences through your browser settings</li>
              <li><strong>Third-Party Opt-Out:</strong> You can opt out of third-party cookies by visiting the respective service's privacy settings</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Cookie Retention</h2>
          <p>Different cookies have different lifespans:</p>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
            <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
            <li><strong>Authentication Cookies:</strong> Typically remain active for 30 days or until you log out</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Your Privacy Rights</h2>
          <p>We respect your privacy and your right to control your data. You can:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Request information about the cookies we use</li>
            <li>Withdraw your consent for non-essential cookies at any time</li>
            <li>Delete cookies from your browser at any time</li>
            <li>Request deletion of data collected through cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Updates to This Policy</h2>
          <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any significant changes by posting a notice on our website.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p>Sylk App is developed by Ahmed Ben Abdallah Dev.</p>
          <p>If you have questions about our use of cookies, please contact us at:</p>
          <p>Email: sylk@email.com</p>
        </section>

        <section className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>We respect our users!</strong> Your privacy and trust are important to us. We only use cookies that are necessary for providing you with the best possible experience on Sylk.
          </p>
        </section>
      </div>
    </div>
  );
}
