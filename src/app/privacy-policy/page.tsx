import { LegalView, legalMetadata } from "@/components/pages/LegalView"

export const metadata = legalMetadata("privacy")

export default function PrivacyPage() {
  return <LegalView kind="privacy" />
}
