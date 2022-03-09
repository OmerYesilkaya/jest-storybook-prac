import { ThemeProvider } from "styled-components";

import theme from "../src/styled.config/theme";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [(s) => <ThemeProvider theme={theme}>{s()}</ThemeProvider>];
