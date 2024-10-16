import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <Card className="max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Privacy Policy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-gray-600">Last Modified: {new Date().toLocaleDateString()}</p>
        
        <section>
          <p>
            generatelessonplans.com (&apos;we&apos;, &apos;us&apos;, or &apos;our&apos;) provides this Privacy Policy to inform you of our policies and procedures regarding the collection, use and disclosure of personal information we may receive from users of our website (&apos;Site&apos;), accessible from https://generatelessonplans.com, and any other services offered by us in connection with our site (any and all of the foregoing the &apos;Services&apos;).
          </p>
          <p className="mt-2">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at hello@alfiewebdev.com. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in generatelessonplans.com. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Information we collect</h2>
          <p>
            <strong>Personal Information:</strong> When you sign up, we collect your name and email address. This information comes entirely from your input during the registration process. We do not obtain this information from any other sources. We use this information for personalization and any essential communication with you. We never sell your data.
          </p>
          <p className="mt-2">
            <strong>Voluntary Correspondence:</strong> We retain questions or assistance requests, including your email, for future reference.
          </p>
          <p className="mt-2">
            <strong>Marketing Communications:</strong> Your email is processed for direct marketing and support. Unsubscribe anytime, and we promptly delete your information upon request.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Authentication and Security</h2>
          <p>
            We use Kinde to manage user authentication. We do not store any passwords on our servers. Kinde provides a secure authentication system that helps protect your account information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Your Data</h2>
          <p>
            Deleted data may remain in our database while your account is active. When you delete your account, all of your data is removed from our database. Retrieving data from backups is impractical.
            You can delete your account at any time by contacting us at hello@alfiewebdev.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Links to Other Sites</h2>
          <p>
            Our services may contain links to other websites, applications, and online services. If you choose to visit a third party service or click on another third party link, you will be directed to that third party&apos;s website, application, or online service. The fact that we link to a website, content is not an endorsement, authorization or representation of our affiliation with that third party, nor is it an endorsement of their privacy or information security policies or practices. We do not exercise control over third party websites or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Third Party Privacy Policies</h2>
          <p>
            Our Privacy Policy does not apply to other websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">GDPR Data Protection Rights</h2>
          <p>
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>The right to access</li>
            <li>The right to rectification</li>
            <li>The right to erasure</li>
            <li>The right to restrict processing</li>
            <li>The right to object to processing</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Changes to This Privacy Policy</h2>
          <p>
            This Privacy Policy may be revised periodically, and this will be reflected by a 'Last modified' date above. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:hello@alfiewebdev.com" className="text-blue-600 hover:underline">
              hello@alfiewebdev.com
            </a>
          </p>
        </section>

        <p className="text-sm text-gray-600 mt-6">
          &copy; {new Date().getFullYear()} Generate Lesson Plans. All rights reserved.
        </p>
      </CardContent>
    </Card>
  );
};

export default PrivacyPolicy;
