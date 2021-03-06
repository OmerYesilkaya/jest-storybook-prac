import "styled-components";

type Size = { xl: string; lg: string; md: string; sm: string; xs: string };
type Shade = {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
};

declare module "styled-components" {
	export interface DefaultTheme {
		fontFamily: string;
		shadow: Size;
		colors: {
			green: Shade;
			cyan: Shade;
		};
	}
}
