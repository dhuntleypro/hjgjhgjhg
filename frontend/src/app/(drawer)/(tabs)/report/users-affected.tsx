import { ThreatCategoryPage } from '@appsformankind/orbit';
import { BreachItem } from '@appsformankind/models';

export default function UsersAffectedPage() {
  return (
    <ThreatCategoryPage
      title="Users Affected"
      subtitle="Threats sorted by impact scale"
      description="This view shows all threats sorted by the number of users affected, helping you understand which breaches had the largest impact and affected the most people."
      sortFunction={(a: BreachItem, b: BreachItem) => (b.pwnCount || 0) - (a.pwnCount || 0)}
      logoIcon="people"
      logoColor="#0088FF"
      sectionColor="#0088FF"
    />
  );
}