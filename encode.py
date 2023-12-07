from sentence_transformers import SentenceTransformer
from sys import argv

encoder = SentenceTransformer('all-MiniLM-L6-v2')
encoder.max_seq_length = 250

_, *queries = argv
print(list(map(list, encoder.encode(queries))))
