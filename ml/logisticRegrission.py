import numpy as np


def sigmiod(z):
    return 1 / (1 + np.exp(-z))


class LogisticRegression:
    def __init__(self, lr):
        self.itr = 1000
        self.lr = lr

    def fit(self, X, y):
        self.samples, self.features = X.shape
        self.w = np.zeros(self.features)
        self.b = 0

        for _ in range(self.itr):
            z = np.dot(X, self.w) + self.b
            a = sigmiod(z)

            dw = (1 / self.samples) * np.dot(X.T, (a - y))
            db = (1 / self.samples) * np.sum(a - y)

            self.w -= self.lr * dw
            self.b -= self.lr * db

    def predict(self, X):
        pred = np.dot(X, self.w) + self.b
        y_pred = sigmiod(pred)

        class_pred = [0 if c < .5 else 1 for c in y_pred]

        return class_pred
