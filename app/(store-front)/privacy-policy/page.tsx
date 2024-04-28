// NEXT
import { Mdx } from "@/components/mdx";
import { type Metadata } from "next";
// PACKAGES
import { allPrivacyPolicies } from "@/.contentlayer/generated";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com/privacy-policy'),
  title: 'Privacy Policy Page',
  description: 'Details of our privacy policy and how we handle your data.',
}

export default async function PrivacyPolicyPage() {
  // SERVER LAND
  const privacyPolicy = allPrivacyPolicies.find((policy) => policy._raw.sourceFileName === 'index.mdx');

  return (
    <main className="container flex flex-col justify-start items-center pt-10 px-10 min-h-[90dvh]">
      <h2 className="font-font font-poppins text-xl text-primary text-center">{privacyPolicy?.title}</h2>
      <Mdx code={privacyPolicy?.body?.code ?? ''} />
    </main>
  )
}