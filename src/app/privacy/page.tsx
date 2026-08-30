import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy: TaleCrafters",
  description:
    "TaleCrafters Ltd Privacy Policy. How we collect, use, store, share, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--brand-black)",
        color: "var(--brand-white)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Back Link */}
      <div className="px-6 pt-8 md:px-12 lg:px-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
          style={{ color: "var(--brand-cyan)", fontFamily: "var(--font-mono)" }}
        >
          <span aria-hidden="true">&larr;</span> Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-16 md:px-12 lg:px-8">
        {/* Title */}
        <h1
          className="mb-2 text-4xl font-bold tracking-tight md:text-5xl"
          style={{
            color: "var(--brand-magenta)",
            fontFamily: "var(--font-display)",
          }}
        >
          Privacy Policy
        </h1>
        <p
          className="mb-1 text-lg font-semibold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          TaleCrafters Ltd
        </p>
        <p
          className="mb-1 text-sm"
          style={{ color: "var(--brand-concrete-light)" }}
        >
          Last Updated: 1 April 2026
        </p>
        <p
          className="mb-8 text-sm"
          style={{ color: "var(--brand-concrete-light)" }}
        >
          Effective Date: 1 April 2026
        </p>

        {/* Gradient Separator */}
        <div
          className="mb-12 h-px w-full"
          style={{
            background:
              "linear-gradient(to right, var(--brand-magenta), var(--brand-violet), var(--brand-cyan))",
          }}
        />

        {/* Sections */}
        <div className="space-y-12 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              1. Introduction
            </h2>
            <p className="mb-4" style={{ color: "var(--brand-white)" }}>
              TaleCrafters Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;, or &ldquo;the Company&rdquo;) is committed to
              protecting and respecting your privacy. This Privacy Policy
              explains how we collect, use, store, share, and protect your
              personal data when you visit our website at
              www.talecrafters.studio, use our services, or interact with us in
              any way.
            </p>
            <p className="mb-4">
              This Privacy Policy is issued in compliance with the UK General
              Data Protection Regulation (UK GDPR), the Data Protection Act
              2018, and the Privacy and Electronic Communications Regulations
              2003 (PECR).
            </p>
            <p>
              By accessing or using our website, you acknowledge that you have
              read and understood this Privacy Policy. If you do not agree with
              the practices described herein, please do not use our website or
              services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              2. Data Controller Information
            </h2>
            <p className="mb-4">
              For the purposes of the UK GDPR, the Data Controller responsible
              for your personal data is:
            </p>
            <ul className="mb-4 list-none space-y-1 pl-4">
              <li>
                <strong>Company Name:</strong> TaleCrafters Ltd
              </li>
              <li>
                <strong>Company Number:</strong> 15121346
              </li>
              <li>
                <strong>Registered Address:</strong> 71-75 Shelton Street,
                Covent Garden, London, United Kingdom, WC2H 9JQ
              </li>
              <li>
                <strong>Email:</strong> hello@talecrafters.studio
              </li>
              <li>
                <strong>Website:</strong> www.talecrafters.studio
              </li>
            </ul>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, or if you wish to exercise any of your rights as a data
              subject, please contact us at hello@talecrafters.studio.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              3. Personal Data We Collect
            </h2>
            <p className="mb-6">
              We may collect and process the following categories of personal
              data:
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              3.1 Data You Provide Directly
            </h3>
            <p className="mb-3">
              <strong>Contact Form Submissions:</strong> When you fill out our
              contact form, we collect your name, email address, phone number
              (if provided), company name (if provided), and the content of your
              message.
            </p>
            <p className="mb-3">
              <strong>Email Communications:</strong> When you email us directly,
              we collect your email address, name, and the content of your
              correspondence.
            </p>
            <p className="mb-3">
              <strong>Service Inquiries:</strong> When you request a quote or
              inquire about our services, we collect any information you
              voluntarily provide, including project details, budget
              information, and business requirements.
            </p>
            <p className="mb-6">
              <strong>Newsletter Subscription:</strong> If you subscribe to our
              newsletter or mailing list, we collect your email address and
              name.
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              3.2 Data Collected Automatically
            </h3>
            <p className="mb-3">
              <strong>Cookies and Tracking Technologies:</strong> We use cookies
              and similar technologies to collect information about your
              browsing behaviour. This includes session cookies (essential for
              website functionality), analytics cookies (to understand how
              visitors use our site), and preference cookies (to remember your
              settings). See Section 8 for full details on our cookie practices.
            </p>
            <p className="mb-3">
              <strong>Log Data:</strong> Our servers automatically collect
              certain information when you visit our website, including your IP
              address, browser type and version, operating system, referring
              URL, pages visited, date and time of visit, and time spent on each
              page.
            </p>
            <p className="mb-6">
              <strong>Device Information:</strong> We may collect information
              about the device you use to access our website, including device
              type, screen resolution, and unique device identifiers.
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              3.3 Data from Third Parties
            </h3>
            <p>
              We may receive personal data about you from third-party sources,
              including analytics providers (such as Google Analytics), social
              media platforms (when you interact with our social media pages),
              and referral partners or collaborators.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              4. Legal Basis for Processing
            </h2>
            <p className="mb-6">
              Under the UK GDPR, we must have a valid legal basis for processing
              your personal data. We rely on the following legal bases:
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              4.1 Consent (Article 6(1)(a) UK GDPR)
            </h3>
            <p className="mb-6">
              We process your data based on your explicit consent for the
              following purposes: sending you marketing communications or
              newsletters, setting non-essential cookies on your device, and
              processing any special categories of data (if applicable). You
              have the right to withdraw your consent at any time by contacting
              us at hello@talecrafters.studio. Withdrawal of consent does not
              affect the lawfulness of processing carried out before the
              withdrawal.
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              4.2 Contractual Necessity (Article 6(1)(b) UK GDPR)
            </h3>
            <p className="mb-6">
              We process your data when it is necessary for the performance of a
              contract with you or to take steps at your request before entering
              into a contract. This includes processing service inquiries and
              proposals, managing and delivering our creative services, invoicing
              and payment processing, and communicating about ongoing projects.
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              4.3 Legitimate Interests (Article 6(1)(f) UK GDPR)
            </h3>
            <p className="mb-6">
              We process your data based on our legitimate interests, provided
              these interests are not overridden by your fundamental rights and
              freedoms. Our legitimate interests include improving and
              optimising our website and services, understanding how visitors
              use our website (via analytics), protecting our website against
              fraud and security threats, and responding to inquiries submitted
              through our contact form.
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              4.4 Legal Obligation (Article 6(1)(c) UK GDPR)
            </h3>
            <p>
              We process your data when required by law, including compliance
              with tax and accounting obligations under UK law, responding to
              lawful requests from public authorities, and fulfilling any other
              legal requirements under United Kingdom legislation.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              5. How We Use Your Personal Data
            </h2>
            <p>
              We use your personal data for the following purposes: to respond
              to your contact form submissions and inquiries; to provide,
              maintain, and improve our website and services; to send you
              information about our services that you have requested; to send
              you marketing communications (only with your explicit consent); to
              analyse website traffic and user behaviour to improve user
              experience; to comply with legal and regulatory obligations; to
              protect our rights, property, and safety, and the rights,
              property, and safety of others; and to detect and prevent fraud or
              other illegal activities.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              6. Data Sharing and Disclosure
            </h2>
            <p className="mb-6">
              We do not sell, rent, or trade your personal data to third
              parties. We may share your personal data with the following
              categories of recipients, only to the extent necessary:
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              6.1 Service Providers
            </h3>
            <p className="mb-6">
              We engage trusted third-party service providers who process data
              on our behalf, including website hosting providers, email service
              providers, analytics providers (e.g. Google Analytics), cloud
              storage providers, and payment processors (for invoicing). All
              service providers are bound by data processing agreements in
              accordance with Article 28 of the UK GDPR.
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              6.2 Legal and Regulatory Authorities
            </h3>
            <p className="mb-6">
              We may disclose your personal data if required by law, regulation,
              legal process, or governmental request, including to HM Revenue
              &amp; Customs (HMRC), courts or law enforcement agencies, and data
              protection authorities (the Information Commissioner&rsquo;s
              Office).
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              6.3 Business Transfers
            </h3>
            <p>
              In the event of a merger, acquisition, or sale of all or a portion
              of our assets, your personal data may be transferred as part of
              that transaction. We will notify you of any such change and any
              choices you may have regarding your data.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              7. International Data Transfers
            </h2>
            <p className="mb-4">
              Your personal data may be transferred to and processed in
              countries outside the United Kingdom. When such transfers occur, we
              ensure that appropriate safeguards are in place, in accordance
              with Articles 44-49 of the UK GDPR and guidance from the
              Information Commissioner&rsquo;s Office.
            </p>
            <p className="mb-4">
              These safeguards may include transfers to countries that the UK
              Secretary of State has deemed to provide an adequate level of data
              protection (Adequacy Regulations), use of the International Data
              Transfer Agreement (IDTA) or the International Data Transfer
              Addendum to the EU Standard Contractual Clauses, and binding
              corporate rules or other approved transfer mechanisms.
            </p>
            <p>
              For more information about the specific safeguards applied to
              international transfers of your data, please contact us at
              info@talecrafters.studio.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              8. Cookies and Tracking Technologies
            </h2>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              8.1 What Are Cookies
            </h3>
            <p className="mb-6">
              Cookies are small text files placed on your device when you visit
              a website. They are widely used to make websites work efficiently,
              to improve user experience, and to provide information to website
              operators.
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              8.2 Types of Cookies We Use
            </h3>
            <p className="mb-3">
              <strong>Strictly Necessary Cookies:</strong> These cookies are
              essential for the operation of our website. They enable core
              functionality such as security, network management, and account
              access. You cannot opt out of these cookies as the website cannot
              function without them.
            </p>
            <p className="mb-3">
              <strong>Analytics Cookies:</strong> These cookies help us
              understand how visitors interact with our website by collecting
              and reporting information anonymously. We use Google Analytics to
              analyse traffic patterns. These cookies are only set with your
              explicit consent.
            </p>
            <p className="mb-6">
              <strong>Preference Cookies:</strong> These cookies allow our
              website to remember choices you have made (such as your cookie
              consent status) and provide enhanced, personalised features. These
              cookies are only set with your explicit consent.
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              8.3 Cookie Consent
            </h3>
            <p className="mb-6">
              In accordance with the UK GDPR and the Privacy and Electronic
              Communications Regulations 2003 (PECR), we obtain your explicit
              consent before setting any non-essential cookies. You can manage
              your cookie preferences at any time via our cookie consent banner
              or by contacting us at hello@talecrafters.studio. You can also
              control cookies through your browser settings.
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              8.4 How to Disable Cookies
            </h3>
            <p className="mb-6">
              You can set your browser to refuse all or some cookies, or to
              alert you when cookies are being set. Please note that disabling
              cookies may affect the functionality of certain parts of our
              website. For more information about how to manage cookies in your
              browser, visit www.allaboutcookies.org.
            </p>

            <h3
              className="mb-3 text-xl font-semibold"
              style={{
                color: "var(--brand-violet)",
                fontFamily: "var(--font-display)",
              }}
            >
              8.5 Specific Cookies We Use
            </h3>
            <div className="overflow-x-auto">
              <table
                className="w-full text-left text-sm"
                style={{ borderColor: "var(--brand-concrete)" }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid var(--brand-concrete)",
                    }}
                  >
                    <th className="py-2 pr-4 font-semibold">Cookie</th>
                    <th className="py-2 pr-4 font-semibold">Type</th>
                    <th className="py-2 pr-4 font-semibold">Purpose</th>
                    <th className="py-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style={{
                      borderBottom: "1px solid var(--brand-concrete)",
                    }}
                  >
                    <td
                      className="py-2 pr-4"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--brand-gold)",
                      }}
                    >
                      cookie_consent
                    </td>
                    <td className="py-2 pr-4">Strictly Necessary</td>
                    <td className="py-2 pr-4">
                      Stores your cookie consent preference
                    </td>
                    <td className="py-2">12 months</td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid var(--brand-concrete)",
                    }}
                  >
                    <td
                      className="py-2 pr-4"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--brand-gold)",
                      }}
                    >
                      _ga
                    </td>
                    <td className="py-2 pr-4">Analytics</td>
                    <td className="py-2 pr-4">
                      Google Analytics, distinguishes users
                    </td>
                    <td className="py-2">2 years</td>
                  </tr>
                  <tr>
                    <td
                      className="py-2 pr-4"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--brand-gold)",
                      }}
                    >
                      _ga_*
                    </td>
                    <td className="py-2 pr-4">Analytics</td>
                    <td className="py-2 pr-4">
                      Google Analytics, maintains session state
                    </td>
                    <td className="py-2">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              9. Data Retention
            </h2>
            <p className="mb-4">
              We retain your personal data only for as long as necessary to
              fulfil the purposes for which it was collected, or as required by
              applicable law. Our specific retention periods are as follows:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Contact form data:</strong> 12 months from the date of
                submission, unless a business relationship is established.
              </li>
              <li>
                <strong>Client project data:</strong> 6 years from the
                completion of the project, in accordance with UK limitation
                periods.
              </li>
              <li>
                <strong>Invoice and financial data:</strong> 6 years, as
                required by HMRC.
              </li>
              <li>
                <strong>Newsletter subscriber data:</strong> Until you
                unsubscribe or withdraw your consent.
              </li>
              <li>
                <strong>Analytics data:</strong> 14 months, in accordance with
                our analytics provider&rsquo;s settings.
              </li>
              <li>
                <strong>Cookie data:</strong> Varies by cookie type; see Section
                8.5 for details.
              </li>
            </ul>
            <p>
              When personal data is no longer required, we will securely delete
              or anonymise it.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              10. Your Rights as a Data Subject
            </h2>
            <p className="mb-4">
              Under the UK GDPR, you have the following rights in relation to
              your personal data:
            </p>

            <p className="mb-4">
              <strong>Right of Access (Article 15):</strong> You have the right
              to obtain confirmation as to whether your personal data is being
              processed and, if so, to access that data along with information
              about the purposes of processing, categories of data, recipients,
              retention periods, and the source of the data.
            </p>
            <p className="mb-4">
              <strong>Right to Rectification (Article 16):</strong> You have the
              right to request the correction of inaccurate personal data and to
              have incomplete data completed.
            </p>
            <p className="mb-4">
              <strong>Right to Erasure (Article 17):</strong> You have the right
              to request the deletion of your personal data in certain
              circumstances, including when the data is no longer necessary for
              the purpose it was collected, when you withdraw consent, or when
              the data has been unlawfully processed.
            </p>
            <p className="mb-4">
              <strong>Right to Restriction of Processing (Article 18):</strong>{" "}
              You have the right to request the restriction of processing of
              your personal data in certain circumstances, including when you
              contest the accuracy of the data or when the processing is
              unlawful.
            </p>
            <p className="mb-4">
              <strong>Right to Data Portability (Article 20):</strong> You have
              the right to receive your personal data in a structured, commonly
              used, and machine-readable format, and to transmit that data to
              another controller without hindrance.
            </p>
            <p className="mb-4">
              <strong>Right to Object (Article 21):</strong> You have the right
              to object to the processing of your personal data based on
              legitimate interests or for direct marketing purposes. Where you
              object to processing for direct marketing, the data shall no
              longer be processed for that purpose.
            </p>
            <p className="mb-4">
              <strong>
                Right Not to Be Subject to Automated Decision-Making (Article
                22):
              </strong>{" "}
              You have the right not to be subject to a decision based solely on
              automated processing, including profiling, which produces legal
              effects or similarly significantly affects you.
            </p>
            <p className="mb-6">
              <strong>Right to Withdraw Consent:</strong> Where processing is
              based on your consent, you have the right to withdraw that consent
              at any time. Withdrawal does not affect the lawfulness of
              processing carried out before the withdrawal.
            </p>

            <p>
              <strong>How to Exercise Your Rights:</strong> To exercise any of
              the above rights, please contact us at info@talecrafters.studio.
              We will respond to your request within one (1) month of receipt,
              in accordance with the UK GDPR. This period may be extended by two
              (2) further months where necessary, taking into account the
              complexity and number of requests. We may request proof of
              identity before processing your request, to ensure the security of
              your personal data.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              11. Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate technical and organisational measures to
              protect your personal data against unauthorised access, alteration,
              disclosure, or destruction. These measures include SSL/TLS
              encryption for data in transit, secure hosting with reputable
              providers, access controls and authentication mechanisms, regular
              security assessments and updates, and staff training on data
              protection practices.
            </p>
            <p>
              While we take all reasonable precautions, no method of
              transmission over the Internet or method of electronic storage is
              completely secure. We cannot guarantee the absolute security of
              your data.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              12. Children&rsquo;s Privacy
            </h2>
            <p>
              Our website and services are not directed at individuals under the
              age of 13. We do not knowingly collect personal data from children
              under 13. If we become aware that we have inadvertently collected
              data from a child under 13, we will take immediate steps to delete
              that data. If you believe that a child under 13 has provided us
              with personal data, please contact us immediately at
              info@talecrafters.studio.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              13. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites, plugins, or
              services that are not operated by us. We have no control over, and
              assume no responsibility for, the content, privacy policies, or
              practices of any third-party sites or services. We encourage you
              to review the privacy policies of every website you visit.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              14. Changes to This Privacy Policy
            </h2>
            <p>
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be posted on this page with an updated
              &ldquo;Last Updated&rdquo; date. Material changes may be
              communicated to you via email or a prominent notice on our
              website. We encourage you to review this Privacy Policy
              periodically.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              15. Complaints
            </h2>
            <p className="mb-4">
              If you believe that your data protection rights have been
              violated, you have the right to lodge a complaint with the
              supervisory authority. In the United Kingdom, the competent
              authority is:
            </p>
            <ul className="mb-4 list-none space-y-1 pl-4">
              <li>
                <strong>Information Commissioner&rsquo;s Office (ICO)</strong>
              </li>
              <li>
                <strong>Address:</strong> Wycliffe House, Water Lane, Wilmslow,
                Cheshire, SK9 5AF
              </li>
              <li>
                <strong>Phone:</strong> 0303 123 1113
              </li>
              <li>
                <strong>Website:</strong> www.ico.org.uk
              </li>
              <li>
                <strong>Email:</strong> icocasework@ico.org.uk
              </li>
            </ul>
            <p>
              We would, however, appreciate the opportunity to address your
              concerns before you approach the ICO. Please contact us first at
              hello@talecrafters.studio.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2
              className="mb-4 text-2xl font-bold"
              style={{
                color: "var(--brand-cyan)",
                fontFamily: "var(--font-display)",
              }}
            >
              16. Contact Us
            </h2>
            <p className="mb-4">
              For any questions, concerns, or requests regarding this Privacy
              Policy or our data practices, please contact us:
            </p>
            <ul className="list-none space-y-1 pl-4">
              <li>
                <strong>TaleCrafters Ltd</strong>
              </li>
              <li>
                <strong>Company Number:</strong> 15121346
              </li>
              <li>
                <strong>Email:</strong> hello@talecrafters.studio
              </li>
              <li>
                <strong>Address:</strong> 71-75 Shelton Street, Covent Garden,
                London, United Kingdom, WC2H 9JQ
              </li>
              <li>
                <strong>Website:</strong> www.talecrafters.studio
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
