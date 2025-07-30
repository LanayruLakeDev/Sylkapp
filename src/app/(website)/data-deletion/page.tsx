export default function DataDeletion() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Data Deletion Request</h1>
      
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-3">Request Data Deletion</h2>
          <p>You have the right to request deletion of your personal data. This includes:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Your account information</li>
            <li>Instagram connection data</li>
            <li>Automation history and settings</li>
            <li>Chat logs and AI interaction data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">How to Request Deletion</h2>
          <p>To request deletion of your data:</p>
          <ol className="list-decimal ml-6 mt-2">
            <li>Send an email to: <strong>support@sylkapp.vercel.app</strong></li>
            <li>Include "Data Deletion Request" in the subject line</li>
            <li>Provide your account email address</li>
            <li>Specify what data you want deleted (or request full deletion)</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Processing Time</h2>
          <p>Data deletion requests are processed within 30 days of receipt. You will receive a confirmation email once the deletion is complete.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">What Gets Deleted</h2>
          <p>When you request data deletion, we will remove:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Your user account and profile information</li>
            <li>Instagram API access tokens</li>
            <li>Automation configurations and history</li>
            <li>AI conversation logs</li>
            <li>Payment and subscription data (where legally permissible)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Data Retention for Legal Compliance</h2>
          <p>Some data may be retained for legal, regulatory, or security purposes as required by law. This includes transaction records for tax purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Account Deactivation</h2>
          <p>If you want to temporarily deactivate your account without deleting data, you can do so from your account settings or contact support.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p>For data deletion requests or questions:</p>
          <p><strong>Email:</strong> support@sylkapp.vercel.app</p>
          <p><strong>Subject:</strong> Data Deletion Request</p>
        </section>
      </div>
    </div>
  );
}
