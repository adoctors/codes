interface localStorageConfig {
  name: string;
  clear: boolean;
}

const localStorageMap: localStorageConfig[] = [
  { name: 'business', clear: true },
  { name: 'DealTape-profile', clear: true },
  { name: 'token', clear: true },
  { name: 'logout', clear: true },
  { name: 'logo', clear: false },
  { name: 'favicon', clear: false },
  { name: 'tab', clear: false },
  { name: 'VERSION', clear: false },
];

export default localStorageMap;
