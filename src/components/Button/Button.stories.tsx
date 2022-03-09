import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./Button";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Button", variant: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { label: "Button", variant: "secondary" };

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = { label: "Button", variant: "primary", disabled: true };

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = { label: "Button", variant: "secondary", disabled: true };
