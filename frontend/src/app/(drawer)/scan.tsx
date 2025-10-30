import { SecurityScanViewPage } from '@appsformankind/orbit';
import { useThemeManager } from '@appsformankind/orbit';
import { useLocalSearchParams } from 'expo-router';

const Scan = () => {
  const { colors } = useThemeManager();
  const params = useLocalSearchParams<{ mode?: string }>();
  
  // Determine scan mode from URL parameter
  const scanMode = params.mode === 'registered' ? 'registered' : 'free';

  return (
    <SecurityScanViewPage
      colors={colors}
      initialScanMode={scanMode}
    />
  );
};

export default Scan;






