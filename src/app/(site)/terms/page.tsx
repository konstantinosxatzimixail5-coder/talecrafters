import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import Link from "next/link";
import { pageCopy } from '@/content/copy';

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "TaleCrafters Ltd Terms of Service. Terms and conditions governing the use of our website.",
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title: "Terms of Service — TaleCrafters",
    url: `${SITE_URL}/terms`,
    siteName: "TaleCrafters",
    type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default async function TermsPage() {
  const copy = await pageCopy('terms');
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
      <div className="px-6 pt-28 md:px-12 md:pt-32 lg:px-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
          style={{ color: "var(--brand-cyan)", fontFamily: "var(--font-mono)" }}
        >
          <span aria-hidden="true">&larr;</span> Back to Home
        </Link>
      </div>

      {/* Content */}
      <main className="px-6 py-12 md:px-12 lg:px-24 max-w-4xl mx-auto">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--brand-magenta)" }}
        >
          {copy.header.title}
        </h1>

        <p
          className="text-lg mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--brand-white)" }}
        >
          TaleCrafters Ltd
        </p>

        <div
          className="flex gap-6 text-xs tracking-wider mb-6"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand-concrete-light)" }}
        >
          <span>Last Updated: 1 April 2026</span>
          <span>Effective Date: 1 April 2026</span>
        </div>

        {/* Gradient divider */}
        <div
          className="h-px w-full mb-12"
          style={{
            background:
              "linear-gradient(to right, var(--brand-magenta), var(--brand-cyan), var(--brand-violet))",
          }}
        />

        {/* Section 1 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            1. Acceptance of Terms
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            By accessing or using the TaleCrafters website at talecrafters.studio (the
            &ldquo;Website&rdquo;), you agree to be bound by these Terms of Service
            (&ldquo;Terms&rdquo;). If you do not agree to all of these Terms, you must not access or
            use the Website.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            These Terms constitute a legally binding agreement between you (the &ldquo;User&rdquo;,
            &ldquo;you&rdquo;, or &ldquo;your&rdquo;) and TaleCrafters Ltd, a company registered in
            England and Wales under company number 15121346, with its registered office at 71-75
            Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ (the
            &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
          </p>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            We reserve the right to modify these Terms at any time. Changes will be effective upon
            posting to the Website with an updated &ldquo;Last Updated&rdquo; date. Your continued
            use of the Website after changes are posted constitutes your acceptance of the modified
            Terms.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            2. Description of Services
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            TaleCrafters is a synthetic media and creative content studio. Through this Website, we
            provide information about our services, including but not limited to creative content
            production, synthetic media creation, brand narrative development, video production,
            AI-assisted content creation, and related creative and consulting services.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            The Website serves as an informational and marketing platform. Specific service
            agreements will be governed by separate contracts between TaleCrafters Ltd and its
            clients.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            3. Intellectual Property Rights
          </h2>

          <h3
            className="text-xl tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-violet-text)" }}
          >
            3.1 Our Intellectual Property
          </h3>
          <p className="leading-relaxed mb-6" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            All content on this Website, including but not limited to text, graphics, logos, icons,
            images, audio clips, video clips, data compilations, software, and the overall design and
            layout of the Website (collectively, &ldquo;Website Content&rdquo;), is the property of
            TaleCrafters Ltd or its content suppliers and is protected by United Kingdom, European
            Union, and international copyright, trademark, and other intellectual property laws.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            The TaleCrafters name, logo, brand identity, and all related names, logos, product and
            service names, designs, and slogans are trademarks of TaleCrafters Ltd. You may not use
            such marks without our prior written permission.
          </p>

          <h3
            className="text-xl tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-violet-text)" }}
          >
            3.2 Limited Licence
          </h3>
          <p className="leading-relaxed mb-8" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            We grant you a limited, non-exclusive, non-transferable, revocable licence to access and
            use the Website for personal, non-commercial purposes. This licence does not include the
            right to reproduce, distribute, modify, create derivative works from, publicly display,
            publicly perform, republish, download, store, or transmit any of the Website Content,
            except as incidental to normal web browsing (e.g. temporary caching).
          </p>

          <h3
            className="text-xl tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-violet-text)" }}
          >
            3.3 Portfolio and Case Studies
          </h3>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            Portfolio items, case studies, and showcased work displayed on our Website may be subject
            to third-party intellectual property rights. Such content is displayed with appropriate
            permissions and is strictly for demonstration purposes. Reproduction of any portfolio
            content without express written permission is prohibited.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            4. User Conduct
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            When using our Website, you agree not to:
          </p>
          <ul className="space-y-3 ml-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            <li className="leading-relaxed">
              (a) Use the Website in any way that violates any applicable local, national, or
              international law or regulation;
            </li>
            <li className="leading-relaxed">
              (b) Use the Website in any manner that could disable, overburden, damage, or impair it
              or interfere with any other party&apos;s use of the Website;
            </li>
            <li className="leading-relaxed">
              (c) Attempt to gain unauthorised access to any part of the Website, other accounts,
              computer systems, or networks connected to any part of the Website;
            </li>
            <li className="leading-relaxed">
              (d) Use any robot, spider, scraper, or other automated means to access the Website for
              any purpose without our express written permission;
            </li>
            <li className="leading-relaxed">
              (e) Introduce any viruses, Trojan horses, worms, logic bombs, or other material that
              is malicious or technologically harmful;
            </li>
            <li className="leading-relaxed">
              (f) Attempt to decompile, reverse engineer, or disassemble any software contained on
              the Website;
            </li>
            <li className="leading-relaxed">
              (g) Remove, alter, or obscure any proprietary notice or identification, including
              copyright, trademark, patent, or other notices displayed on or within the Website; or
            </li>
            <li className="leading-relaxed">
              (h) Use the Website to collect or harvest any personally identifiable information,
              including account names, from the Website.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            5. Contact Form and Communications
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            Our Website provides a contact form and other means for you to communicate with us. By
            submitting information through our contact form, you represent that the information you
            provide is accurate and complete, you consent to our processing of the information in
            accordance with our Privacy Policy, and you understand that submitting a contact form does
            not create a contractual obligation on our part to provide services.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            We reserve the right not to respond to communications that are abusive, contain spam, or
            are otherwise inappropriate.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            6. Third-Party Links and Content
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            Our Website may contain links to third-party websites or services that are not owned or
            controlled by TaleCrafters Ltd. We have no control over, and assume no responsibility
            for, the content, privacy policies, or practices of any third-party websites or services.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            You acknowledge and agree that TaleCrafters Ltd shall not be responsible or liable,
            directly or indirectly, for any damage or loss caused or alleged to be caused by or in
            connection with use of or reliance on any content, goods, or services available on or
            through any third-party websites or services.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            7. Disclaimer of Warranties
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            The Website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis,
            without any warranties of any kind, either express or implied. To the fullest extent
            permitted by applicable law, TaleCrafters Ltd disclaims all warranties, express or
            implied, including but not limited to implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            We do not warrant that the Website will be uninterrupted, timely, secure, or error-free;
            that the results obtained from the use of the Website will be accurate or reliable; or
            that any errors in the Website will be corrected.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            Nothing in these Terms excludes or limits our liability for death or personal injury
            arising from our negligence, fraud or fraudulent misrepresentation, or any other
            liability that cannot be excluded or limited by English law.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            8. Limitation of Liability
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            Subject to Section 7, to the maximum extent permitted by applicable law, in no event
            shall TaleCrafters Ltd, its directors, employees, partners, agents, suppliers, or
            affiliates be liable for any indirect, incidental, special, consequential, or punitive
            damages, including without limitation loss of profits, data, use, goodwill, or other
            intangible losses, resulting from:
          </p>
          <ul className="space-y-3 ml-4 mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            <li className="leading-relaxed">
              (a) Your access to, use of, or inability to access or use the Website;
            </li>
            <li className="leading-relaxed">
              (b) Any conduct or content of any third party on the Website;
            </li>
            <li className="leading-relaxed">
              (c) Any content obtained from the Website; or
            </li>
            <li className="leading-relaxed">
              (d) Unauthorised access, use, or alteration of your transmissions or content.
            </li>
          </ul>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            Our total liability to you for all claims arising out of or relating to the use of or
            inability to use the Website shall not exceed one hundred pounds sterling (&pound;100).
          </p>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            Nothing in these Terms shall limit or exclude our liability for any liability that cannot
            be limited or excluded under applicable law, including liability for death or personal
            injury caused by negligence, fraud, or fraudulent misrepresentation.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            9. Indemnification
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            You agree to defend, indemnify, and hold harmless TaleCrafters Ltd and its officers,
            directors, employees, and agents from and against any and all claims, damages,
            obligations, losses, liabilities, costs, or debt, and expenses (including but not limited
            to reasonable legal fees) arising from your use of the Website, your violation of these
            Terms, or your violation of any third-party right, including any intellectual property
            right or privacy right.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            10. Governing Law and Jurisdiction
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            These Terms shall be governed by and construed in accordance with the laws of England and
            Wales.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            Any disputes arising out of or in connection with these Terms or the use of the Website
            shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            If you are a consumer, you will benefit from any mandatory provisions of the law of the
            country in which you are resident. Nothing in these Terms affects your rights as a
            consumer to rely on such mandatory provisions of local law.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            11. Severability
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            If any provision of these Terms is held to be invalid, illegal, or unenforceable by a
            court of competent jurisdiction, the remaining provisions shall continue in full force and
            effect. The invalid or unenforceable provision shall be modified to the minimum extent
            necessary to make it valid and enforceable, while preserving the original intent of the
            provision.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            12. Waiver
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            The failure of TaleCrafters Ltd to enforce any right or provision of these Terms shall not
            constitute a waiver of such right or provision. Any waiver of any provision of these
            Terms will be effective only if in writing and signed by an authorised representative of
            TaleCrafters Ltd.
          </p>
        </section>

        {/* Section 13 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            13. Entire Agreement
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            These Terms, together with our Privacy Policy, constitute the entire agreement between
            you and TaleCrafters Ltd regarding the use of the Website and supersede all prior and
            contemporaneous understandings, agreements, representations, and warranties, both written
            and oral.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            For the avoidance of doubt, these Terms govern your use of the Website only. Any services
            provided by TaleCrafters Ltd will be governed by separate service agreements entered into
            between TaleCrafters Ltd and its clients.
          </p>
        </section>

        {/* Section 14 */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)" }}
          >
            14. Contact Information
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="space-y-2" style={{ color: "var(--brand-white)", opacity: 0.85 }}>
            <li className="leading-relaxed">
              <strong style={{ color: "var(--brand-white)" }}>TaleCrafters Ltd</strong>
            </li>
            <li className="leading-relaxed">Company Number: 15121346</li>
            <li className="leading-relaxed">
              Email:{" "}
              <a
                href="mailto:info@talecrafters.studio"
                className="transition-opacity hover:opacity-70"
                style={{ color: "var(--brand-cyan)" }}
              >
                info@talecrafters.studio
              </a>
            </li>
            <li className="leading-relaxed">
              Address: 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
            </li>
            <li className="leading-relaxed">
              Website:{" "}
              <a
                href="/"
                className="transition-opacity hover:opacity-70"
                style={{ color: "var(--brand-cyan)" }}
              >
                talecrafters.studio
              </a>
            </li>
          </ul>
        </section>

        {/* Bottom divider */}
        <div
          className="h-px w-full mt-8 mb-8"
          style={{
            background:
              "linear-gradient(to right, var(--brand-magenta), var(--brand-cyan), var(--brand-violet))",
          }}
        />

        {/* Footer nav */}
        <div className="flex justify-between items-center pb-12">
          <Link
            href="/"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--brand-cyan)", fontFamily: "var(--font-mono)" }}
          >
            &larr; Home
          </Link>
          <Link
            href="/privacy"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--brand-magenta)", fontFamily: "var(--font-mono)" }}
          >
            Privacy Policy &rarr;
          </Link>
        </div>
      </main>
    </div>
  );
}
