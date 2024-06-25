import { useState } from 'react';

const useDependencies = () => {
	const [lambda, setLambda] = useState<number | null>(null);
	const [mu, setMu] = useState<number | null>(null);
	const [results, setResults] = useState<{
		L?: number;
		W?: number;
		Lq?: number;
		Wq?: number;
	}>({});

	const calculateResults = () => {
		console.log(lambda);
		console.log(mu);
		if (lambda !== null && mu !== null) {
			const Lq = lambda ** 2 / (2 * mu * (mu - lambda));
			const Wq = lambda / (2 * mu * (mu - lambda));
			const L = Lq + (lambda / mu);
			const W = Wq + (1 / mu);
			setResults({ L, W, Lq, Wq});
			console.log(results);
		}
	};

	return { lambda, setLambda, mu, setMu, calculateResults, results };
};

export default useDependencies;
