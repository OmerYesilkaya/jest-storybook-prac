import styled, { css } from "styled-components";

import { ComponentProps, StyleProps } from "./types";

const Rect = styled.button(({ theme: { colors, shadow } }) => {
	return css<StyleProps>`
		user-select: none;
		pointer-events: ${(props) => (props.disabled ? "none" : "all")};
		background-color: ${(props) => (props.variant === "primary" ? colors.green[400] : colors.green[900])};
		box-shadow: ${shadow.lg};
		border: ${(props) => (props.variant === "primary" ? "1px solid transparent" : `1px solid ${colors.green[400]}`)};
		border-radius: 4px;
		padding: 0 2rem;
		cursor: pointer;
		transition: all 300ms;
		opacity: ${(props) => (props.disabled ? 0.4 : 1)};

		:hover {
			filter: brightness(0.5);
			box-shadow: ${shadow.sm};
		}
		:active {
			filter: brightness(0.3);
			box-shadow: ${shadow.sm};
		}
	`;
});

const Text = styled.p(({ theme: { colors, fontFamily } }) => {
	return css<StyleProps>`
		color: ${(props) => (props.variant === "primary" ? colors.green[900] : colors.green[400])};
		font-family: ${fontFamily};
		font-weight: 800;
	`;
});

const Button: React.FC<ComponentProps> = ({ label, variant, disabled }) => {
	return (
		<Rect variant={variant} disabled={disabled}>
			<Text variant={variant}>{label}</Text>
		</Rect>
	);
};

export default Button;
