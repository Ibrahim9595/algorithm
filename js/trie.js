/**
 * @typedef {({
 *  children: Record<string, TrieNode>,
 *  words: string[],
 *  isWord: boolean,
 * })} TrieNode
 */

/**
 * Crate a TrieNode
 * @param {string} word
 * @param {boolean} isWord
 * @returns {TrieNode}
 */
const createTrieNode = (word, isWord) => ({
	children: {},
	words: word ? [word] : [],
	isWord: isWord || false,
});

/**
 * Add word to TrieNode
 * @param {TrieNode} node
 * @param {string} word
 */
const addWordToNode = (node, word) => {
	const { _word, words } = node.words.reduce(
		({ _word, words }, curr) => {
			return {
				words: words.concat(_word > curr ? curr : _word),
				_word: _word > curr ? _word : curr,
			};
		},
		{
			_word: word,
			words: [],
		}
	);

	node.words = words.length < 3 ? [...words, _word] : words;
};

/**
 * Add a word to the Trie
 * @param {TrieNode} root
 * @param {string} word
 * @param {string} wordRest
 * @returns {TrieNode}
 */
const addWord = (root, word, wordRest) => {
	const [ch, ...rest] = wordRest;
	if (!ch) {
		root.isWord = true;
		return root;
	}

	const nextNode = root.children[ch] || createTrieNode(word);
	root.children[ch] = nextNode;
	if (nextNode.words.findIndex((w) => w === word) === -1)
		addWordToNode(nextNode, word);
	return addWord(nextNode, word, rest);
};

/**
 * Find a node for a prefix
 * @param {TrieNode} root
 * @param {string} word
 * @returns {TrieNode | null}
 */
const getNode = (root, word) => {
	const [ch, ...rest] = word;

	if (!root) return null;

	if (!ch) return root;

	return getNode(root.children[ch], rest);
};

/**
 * Add a word to the Trie
 * @param {TrieNode} root
 * @param {string} word
 */
const getTrie = () => {
	const root = createTrieNode();

	return {
		addWord: (word) => addWord(root, word, word),
		getNode: (word, startNode = root) => getNode(startNode, word),
		log: () => console.log(JSON.stringify(root, null, 2)),
	};
};

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
	const trie = getTrie();

	products.forEach(trie.addWord);

	const { values } = searchWord.split('').reduce(
		({ currentNode, values }, c) => {
			const nextNode = trie.getNode(c, currentNode);
			return {
				currentNode: nextNode,
				values: values.concat(nextNode ? [nextNode.words] : [[]]),
			};
		},
		{ currentNode: undefined, values: [] }
	);

	return values;
};
