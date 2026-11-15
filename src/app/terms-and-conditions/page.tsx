import { LegalView, legalMetadata } from "@/components/pages/LegalView"

export const metadata = legalMetadata("terms")

export default function TermsPage() {
  return <LegalView kind="terms" />
}
