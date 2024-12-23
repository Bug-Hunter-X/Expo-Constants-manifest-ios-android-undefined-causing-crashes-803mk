```javascript
// bugSolution.js
import * as Constants from 'expo-constants';

const getPlatformSpecificValue = (key) => {
  // Safely access the ios or android properties from Constants.manifest
  const platformValue = Constants.manifest?.ios?.[key] ?? Constants.manifest?.android?.[key] ?? null;
  return platformValue;
};

const iosSpecificValue = getPlatformSpecificValue('someKey');
const androidSpecificValue = getPlatformSpecificValue('anotherKey');

console.log('iOS Specific Value:', iosSpecificValue);
console.log('Android Specific Value:', androidSpecificValue);
```