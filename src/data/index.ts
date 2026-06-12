export type Token = {
	symbol: string;
	name: string;
	balance: number;
	usdValue: number;
};

const tokens: Token[] = [
	{ symbol: "GOLD", name: "Tokenized Gold", balance: 2.5, usdValue: 7500 },
	{ symbol: "SLVR", name: "Tokenized Silver", balance: 100, usdValue: 3200 },
	{
		symbol: "PLAT",
		name: "Tokenized Platinum",
		balance: 1.2,
		usdValue: 1440,
	},
];

export default tokens;

export const AVATAR_COLORS: Record<string, { bg: string; color: string }> = {
	GOLD: { bg: "#FAEEDA", color: "#92400e" },
	SLVR: { bg: "#ede9fe", color: "#4c1d95" },
	PLAT: { bg: "#d1fae5", color: "#064e3b" },
};
