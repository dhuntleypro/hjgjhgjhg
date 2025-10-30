import { ThreatCategoryPage } from '@appsformankind/orbit';

export default function CriticalThreatsPage() {
  return (
    <ThreatCategoryPage
      title="Critical Threats"
      subtitle="6 critical threats requiring immediate attention"
      description="Critical threats represent the most severe security breaches that require immediate action. These breaches often involve sensitive personal information and pose the highest risk to your digital security."
      severity="CRITICAL"
      logoIcon="shield"
      logoColor="#FF4444"
      sectionColor="#FF4444"
    />
  );
}