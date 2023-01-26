
import numpy as np

class KNN:
    def __init__(self, k=5):
        if k % 2 == 0:
            raise "K must be an odd number"

        self.k = k

    def fit(self, X_train, y):
        _max, _min = X_train.max(axis=0, keepdims=True), X_train.min(axis=0, keepdims=True)
        self.data = (X_train - _min) / (_max - _min)


    def predict(self, X_test):
        for el in X_test:
            print(np.sum(np.abs(el - self.data()), axis=1, keepdims=True))
        