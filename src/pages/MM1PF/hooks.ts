import { factorial } from 'mathjs';
import { useState } from 'react';

const useDependencies = () => {
	const [lambda, setLambda] = useState<number | null>(null);
	const [mu, setMu] = useState<number | null>(null);
	const [N, setN] = useState<number | null>(null);
	const [results, setResults] = useState<{
		L?: number;
		W?: number;
		Lq?: number;
		Wq?: number;
		Po?: number;
		Pn?: Record<number, number>;
	}>({});

	const calculateResults = () => {
		if (lambda !== null && mu !== null && N !== null) {
			const Po = calculatePo();
			if(Po !== undefined){
				const Lq = N - ((lambda + mu) / lambda) * (1 - Po);
				const L = Lq + (1 - Po);
				const Wq = Lq / ( (N - L) * lambda);
				const W = Wq  + (1 / mu);
				const Pn = calculatePn(Po);
				setResults({ L, W, Lq, Wq, Po, Pn});
			}
			console.log(results);
		}
	};

	const calculatePo = () => {
		if (lambda !== null && mu !== null && N !== null) {
			let sum = 0;
			for (let n = 0; n <= N; n++) {
				sum += (factorial(N) / factorial(N - n)) * Math.pow(lambda / mu, n);
			}
			return 1 / sum;
		}
	}

	const calculatePn = (Po:number) => {
		const pn: Record<number, number> = {};
		if (lambda !== null && mu !== null && N !== null) {
			for (let n = 0; n <= N; n++) {
				pn[n] = (factorial(N) / factorial(N - n)) * Math.pow(lambda / mu, n) * Po;
			}
			return pn;
		}
	}
	  

	return { lambda, setLambda, mu, setMu, N, setN, calculateResults, results };
};

export default useDependencies;
