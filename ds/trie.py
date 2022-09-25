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



# class TrieNode:
#     def __init__(self, val):
#         self.val = val
#         self.children = {}
#         self.isWord = False
#         self.numWords = 0

#     def __str__(self):
#         return "{} {} {} {}".format(self.val, self.isWord, self.numWords, self.children)

# class Trie:
#     def __init__(self):
#         self.root = TrieNode(None)

    
#     def add(self, word):
#         p = self.root

#         for ch in word:
#             p.numWords += 1
#             if ch not in p.children:
#                 p.children[ch] = TrieNode(ch)
            
#             p = p.children[ch]

#         p.numWords += 1
#         p.isWord = True
    

#     def find(self, part):
#         p = self.root

#         for ch in part:
#             if ch not in p.children:
#                 return 0
            
#             p = p.children[ch]

#         return p.numWords


# class TrieNode:
#     def __init__(self, val):
#         self.val = val
#         self.children = {}
#         self.isWord = False


# class Trie:
#     def __init__(self):
#         self.root = TrieNode(None)

#     def insert(self, word):
#         p = self.root

#         for ch in word:
#             if ch not in p.children:
#                 p.children[ch] = TrieNode(ch)

#             p = p.children[ch]

#         p.isWord = True

#     def prefix(self, prefix) -> 'TrieNode':
#         p = self.root

#         for ch in prefix:
#             if ch not in p.children:
#                 return None

#             p = p.children[ch]

#         return p

#     def isWord(self, word):
#         res = self.prefix(word)

#         return True if res and res.isWord else False
