import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { orgSchema, websiteSchema } from "@/lib/seo";
import { pageCopy } from "@/content/copy";
import { getSolutions, getPrimaryNav, getNavGroups } from "@/content/collections";

/**
 * How often a rendered page goes back to the dataset.
 *
 * Route segment config cascades, so this one line puts every page under the
 * site group on a sixty-second window. Without it the whole site is generated
 * once at deploy and an edit in the Studio never appears, which is the
 * difference between a CMS that is wired up and one that only looks it.
 */
export const revalidate = 60;

/**
 * The public site: header, footer, consent, analytics and the Organization
 * graph. It lives in a route group so that the Studio, which sits outside it,
 * gets a bare page instead of the marketing chrome. Route groups do not appear
 * in URLs, so every path here is unchanged.
 */
export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const footerCopy = (await pageCopy("footer")).main;
  const solutions = await getSolutions();
  const [primaryNav, navGroups] = await Promise.all([getPrimaryNav(), getNavGroups()]);
  return (
    <>
      <GoogleAnalytics />
      <JsonLd graph={[orgSchema(), websiteSchema()]} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader primaryNav={primaryNav} navGroups={navGroups} />
      <main id="main">{children}</main>
      <Footer copy={footerCopy} solutions={solutions} navGroups={navGroups} />
      <CookieConsent />
    </>
  );
}
