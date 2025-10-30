import { SecurityScanViewPage } from '@appsformankind/orbit';
import { useThemeManager } from '@appsformankind/orbit';

/**
Registration Screen
 * Uses the SecurityScanViewPage component with registered mode for registration flow
 */
export default function RegisterScreen() {
  const { colors } = useThemeManager();

  return (
    <SecurityScanViewPage
      colors={colors}
      initialScanMode="registered"
    />
  );
}
