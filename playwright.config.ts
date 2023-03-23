import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/login.test.ts"],
    use: {
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure"
    },
    reporter: [
        ["dot"],
        ["html", { open: "never" }]
    ],
    retries: 0,
};

export default config;