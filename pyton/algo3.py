#Uses python3
##problem 1
# x = int(input())
# change = [10, 5, 1]
# num = 0

# for i in change:
# 	if(not x):
# 		break
# 	temp = int(x / i)
# 	num += temp
# 	x = x - temp * i

# print(num)

# #problem 2
# a = input().split(' ')
# n = int(a[0])
# W = int(a[1])
# x = []

# for i in range(n):
# 	a = input().split(' ')
# 	x.append(a)

# x.sort(key = lambda x: (int(x[0])/int(x[1])))
# x = x[::-1]

# energy = 0

# for i in x:
# 	if not W:
# 		break

# 	temp = min(int(i[1]), W)
# 	W -= temp
# 	energy += round((int(i[0])/int(i[1]))*temp, 4)

# print(energy)

##problem 3
# n = int(input())

# x = input().split(" ")
# a = [int(s) for s in x]
# a.sort()

# x = input().split(" ")
# b = [int(s) for s in x]
# b.sort()
# b = b[::-1]

# assert(n == len(a) or n == len(b))

# s = 0

# for i in range(n):
# 	s += a[i]*b[i]

# print(s)

# #problem 4
# x = int(input())
# s = x
# arr = []

# for i in range(1, s+1):
# 	if x-i > i:
# 		arr.append(str(i))
# 	else:
# 		arr.append(str(x))
# 		break
# 	x -= i
# print(len(arr))
# print(" ".join(arr))
