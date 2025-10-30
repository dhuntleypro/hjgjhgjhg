import { ThreatCategoryPage } from '@appsformankind/orbit';

export default function HighRiskThreatsPage() {
  return (
    <ThreatCategoryPage
      title="High Risk Threats"
      subtitle="12 high risk threats requiring attention"
      description="High risk threats represent significant security breaches that should be addressed promptly. These breaches may contain sensitive information and pose a substantial risk to your digital security."
      severity="HIGH"
      logoIcon="warning"
      logoColor="#FF8800"
      sectionColor="#FF8800"
    />
  );
}