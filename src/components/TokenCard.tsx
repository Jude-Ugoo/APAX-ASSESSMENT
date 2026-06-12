import { AVATAR_COLORS, type Token } from "../data";
import { formatUSD } from "../utils";
import "../styles/TokenCard.css";

interface TokenCardProps {
	token: Token;
	portfolioTotal: number;
}

const styles = {
	barFill: {
		height: "3px",
		borderRadius: "9999px",
	},
};

function TokenCard({ token, portfolioTotal }: TokenCardProps) {
	const percentage = (token.usdValue / portfolioTotal) * 100;
	const avatar = AVATAR_COLORS[token.symbol] ?? {
		bg: "#f3f4f6",
		color: "#374151",
	};

	return (
		<div className="card_container">
			<div className="card_top">
				<div
					className="card_symbol"
					style={{ backgroundColor: avatar.bg, color: avatar.color }}
				>
					{token.symbol}
				</div>
				<div>
					<p className="card_token_symbol">{token.symbol}</p>
					<p className="card_token_name">{token.name}</p>
				</div>
			</div>

			<hr className="card_divider" />

			<div className="card_row">
				<span className="card_row_label">Balance</span>
				<span className="card_row_value">{token.balance}</span>
			</div>

			<div className="card_row">
				<span className="card_row_label">USD value</span>
				<span className="card_row_usd_value">
					{formatUSD(token.usdValue)}
				</span>
			</div>

			<div className="card_bar_track">
				<div
					style={{
						...styles.barFill,
						width: `${percentage.toFixed(1)}%`,
						backgroundColor: avatar.color,
					}}
				/>
			</div>
		</div>
	);
}

export default TokenCard;
