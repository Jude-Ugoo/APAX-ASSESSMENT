import React from "react";
import tokens, { type Token } from "../data";
import "../styles/TokenHoldings.css";
import { formatUSD } from "../utils";
import TokenCard from "./TokenCard";

function TokenHoldings() {
	const portfolioTotal = tokens.reduce(
		(sum, total) => sum + total.usdValue,
		0,
	);

	return (
		<section className="container">
			<div className="container_header">
				<h2 className="container_title">Token holdings</h2>
				<span className="container_total">
					Total: {formatUSD(portfolioTotal)}
				</span>
			</div>
			<div className="container_grid">
				{tokens.map((token) => (
					<TokenCard
						key={token.symbol}
						token={token}
						portfolioTotal={portfolioTotal}
					/>
				))}
			</div>
		</section>
	);
}

export default TokenHoldings;
