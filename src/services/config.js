import Config from 'react-native-config';

const AppConfig = {
  API_BASE_URL: Config.API_BASE_URL || 'Not Found',
  APP_NAME: Config.APP_NAME || 'Not Found',
  DEBUG_MODE: Config.DEBUG_MODE || 'false',
  VERSION: Config.VERSION || 'Not Found',
};

export default AppConfig;
