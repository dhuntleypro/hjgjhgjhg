import { AnalyticsReportViewV4 } from '@appsformankind/orbit';

/**
 * Report Tab - Shows the security report view
 * This tab is only visible when there are scan results or user is authenticated
 * Tab routing handles showing the correct tab based on scan results
 */
export default function ReportScreen() {
  // This tab only shows when there are scan results or user is authenticated
  // Tab routing handles showing the correct tab based on scan results
  return <AnalyticsReportViewV4 />;
}

