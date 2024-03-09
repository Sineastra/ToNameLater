"use client";

import { Button, useMantineColorScheme } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";

const ThemeSwitcher = () => {
	const { setColorScheme } = useMantineColorScheme();
	const [value, toggle] = useToggle(["dark", "light"] as const);

	return (
		<Button
			variant="default"
			size="compact-md"
			onClick={() => {
				toggle();
				setColorScheme(value === "dark" ? "light" : "dark");
			}}
		>
			{value === "dark" ? <IconSunHigh size={17} /> : <IconMoon size={17} />}
		</Button>
	);
};

export default ThemeSwitcher;
