import numpy as np


def sigmoid(z):
    return 1 / (1 + np.exp(-z))


def cost(predict, actual):
    m = actual.shape[1]

    cost__ = -np.sum((np.log(predict) * actual) +
                     ((1 - actual) * np.log(1 - predict)))/m
    return np.squeeze(cost__)


class ANN:
    def __init__(self, itr=100, lr=.1, hidden=3):
        self.hidden_size = hidden
        self.itr = itr
        self.lr = lr

    def initialize(self, X, Y):
        np.random.seed(3)
        input_size = X.shape[0]  # number of neurons in input layer
        output_size = Y.shape[0]  # number of neurons in output layer.
        self.W1 = np.random.randn(
            self.hidden_size, input_size)*0.01
        self.b1 = np.zeros((self.hidden_size, 1))
        self.W2 = np.random.randn(
            output_size, self.hidden_size)*0.01
        self.b2 = np.zeros((output_size, 1))

    def forward(self, X):
        Z1 = np.dot(self.W1, X) + self.b1
        A1 = sigmoid(Z1)
        Z2 = np.dot(self.W2, A1)+self.b2
        y = sigmoid(Z2)

        return (Z1, A1, Z2, y)

    def backward(self, X, Y, cache):
        Z1, A1, Z2, y = cache

        m = X.shape[1]
        dy = y - Y
        dW2 = (1 / m) * np.dot(dy, np.transpose(A1))
        db2 = (1 / m) * np.sum(dy, axis=1, keepdims=True)
        dZ1 = np.dot(np.transpose(self.W2), dy) * (A1 * (1 - A1))
        dW1 = (1 / m) * np.dot(dZ1, np.transpose(X))
        db1 = (1 / m) * np.sum(dZ1, axis=1, keepdims=True)

        return (dW2, dW1, db2, db1)

    def fit(self, X, Y):
        self.initialize(X, Y)

        for _ in range(self.itr):
            cache = self.forward(X)

            dW2, dW1, db2, db1 = self.backward(X, Y, cache)

            print("cost = ", cost(cache[-1], Y))

            # update weights
            self.W2 -= self.lr * dW2
            self.W1 -= self.lr * dW1
            self.b2 -= self.lr * db2
            self.b1 -= self.lr * db1

    def predict(self, X):
        a2 = self.forward(X)[-1]
        return [0 if c < .5 else 1 for c in a2.T]
