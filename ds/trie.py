class TrieNode:
    def __init__(self, key, isWord=False):
        self.key = key
        self.children = {}
        self.isWord = isWord

    def __str__(self):
        return str({
            "key": self.key,
            "children": self.children,
            "isWord": self.isWord,
        })


class Trie:
    def __init__(self):
        self.root = TrieNode('')

    def addWord(self, word):
        n = self.root

        for ch in word:
            if ch not in n.children:
                n.children[ch] = TrieNode(ch)

            n = n.children[ch]

        n.isWord = True
