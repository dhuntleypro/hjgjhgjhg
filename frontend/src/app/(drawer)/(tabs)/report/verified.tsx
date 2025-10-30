import { ThreatCategoryPage } from '@appsformankind/orbit';
import { BreachItem } from '@appsformankind/models';

export default function VerifiedThreatsPage() {
  return (
    <ThreatCategoryPage
      title="Verified Threats"
      subtitle="8 verified threats with confirmed data"
      description="Verified threats are breaches that have been confirmed to contain actual data from the affected service. These represent real security incidents that have been validated."
      filterFunction={(threat: BreachItem) => !!threat.isVerified}
      logoIcon="checkmark-circle"
      logoColor="#00FF88"
      sectionColor="#00FF88"
    />
  );
}