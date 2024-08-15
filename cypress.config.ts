import { defineConfig } from "cypress";
import { reseed } from "./cypress/tasks/reseed";

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "http://localhost:3100",
    setupNodeEvents(on, config) {
      config.env.GITHUB_USERNAME = process.env.GITHUB_USERNAME;
      config.env.GITHUB_PASSWORD = process.env.GITHUB_PASSWORD;
      on("task", {
        reseed: reseed,
        async GitHubSocialLogin(options) {
          try {
            if (!options.username || !options.password) {
              throw new Error("Username or Password missing for social login");
            }

            return { cookies: [] };
          } catch (error) {
            console.error("GitHubSocialLogin Error:", error.message);
            throw error;
          }
        },
      });

      return config;
    },
  },
});
