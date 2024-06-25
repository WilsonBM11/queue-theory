import { useState } from 'react';

const useDependencies = () => {
	const [lambda, setLambda] = useState<number | null>(null);
	const [mu, setMu] = useState<number | null>(null);
	const [k, setK] = useState<number | null>(null);
	const [results, setResults] = useState<{
		L?: number;
		W?: number;
		Lq?: number;
		Wq?: number;
		p?: number;
		Po?: number;
		PnK?: number;
	}>({});

	const calculateResults = () => {
		if (lambda !== null && mu !== null && k !== null) {
			const L = lambda / (mu - lambda);
			const W = 1 / (mu - lambda);
			const Lq = lambda ** 2 / (mu * (mu - lambda));
			const Wq = lambda / (mu * (mu - lambda));
			const p = lambda / mu;
			const Po = 1 - lambda / mu;
			const PnK = (lambda / mu) ** (k + 1);
			setResults({ L, W, Lq, Wq, p, Po, PnK });
			console.log(results);
		}
	};

	return { lambda, setLambda, mu, setMu, k, setK, calculateResults, results };
};

export default useDependencies;
