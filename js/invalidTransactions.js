/**
 * @param {string[]} transactions
 * @return {string[]}
 */
const invalidTransactions = (transactions) => {
	const parseTransaction = (transactionStr) => {
		const [name, time, amount, city] = transactionStr.split(',');
		return {
			name,
			time: parseInt(time),
			amount: parseInt(amount),
			city,
		};
	};

	const filterTransaction = (transactionObj, _, transactionsList) => {
		return (
			transactionObj.amount > 1000 ||
			transactionsList.some(
				(transaction) =>
					transactionObj.name === transaction.name &&
					transactionObj.city !== transaction.city &&
					Math.abs(transaction.time - transactionObj.time) <= 60
			)
		);
	};

	return transactions
		.map(parseTransaction)
		.filter(filterTransaction)
		.map(
			({ name, time, amount, city }) =>
				`${name},${time},${amount},${city}`
		);
};

console.log(
	invalidTransactions([
		'bob,689,1910,barcelona',
		'alex,696,122,bangkok',
		'bob,832,1726,barcelona',
		'bob,820,596,bangkok',
		'chalicefy,217,669,barcelona',
		'bob,175,221,amsterdam',
	])
);
