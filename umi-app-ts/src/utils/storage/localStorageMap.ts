interface localStorageConfig {
  name: string;
  clear: boolean;
}

const localStorageMap: localStorageConfig[] = [
  { name: 'token', clear: true },
  { name: 'VERSION', clear: false },
];

export default localStorageMap;
