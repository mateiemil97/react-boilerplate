const environmentConfigs = {
  acceptance: {
    baseUrl: "http://acceptance/",
  },
  production: {
    baseUrl: "https://production/",
  },
};

export const environment = environmentConfigs.acceptance;
