import { DigitalImmunityHome } from '@appsformankind/orbit';

/**
 * Discover Tab - Shows welcome page for users without scan results
 * This tab is only visible when shouldShowDiscover is true
 */
export default function KingHomeScreen() {
  // This tab only shows when there are no scan results
  // Tab routing handles showing the correct tab based on scan results
  // DigitalImmunityHome handles all the conditional logic internally
  return <DigitalImmunityHome />;
}
