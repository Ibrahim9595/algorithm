# Uses python3
# import random

# def pairWiseProduct(arr):
#     n = len(arr)
#     max_1 = "a"
#     for i in range(n):
#         if max_1 == "a" or arr[i] > max_1:
#             max_1 = arr[i]
#     arr.pop(arr.index(max_1))
    
#     n = len(arr)

#     max_2 = "a"
#     for i in range(n):
#         if max_2 == "a" or (arr[i] >= max_2):
#             max_2 = arr[i]

#     return (max_1 * max_2)


# def pairWiseProductCorrect(arr):
#     arr.sort()
#     return arr[-1]*arr[-2]
# n = int(input())
# x = input()
# arr = [int(a) for a in x.split(' ')]
# assert(n == len(arr))

# print(pairWiseProduct(arr))

# #Stress Test
# # xx = 0
# # while(xx < 1000):
# #     xx += 1
# #     n = random.randint(2, 200000)
# #     arr = []
    
# #     for i in range(n):
# #         arr.append(random.randint(0, 100000))
    
# #     test2 = pairWiseProductCorrect(arr)
# #     test1 = pairWiseProduct(arr)
    

# #     if test1 == test2:
# #         print("ok"+str(xx))
# #     else:
# #         print("Wrong Answer")
# #         print(n)
# #         print(arr)
# #         print("tested = " + str(test1))
# #         print("correct = " + str(test2))
# #         break

user_input = input().split(' ')
user_output = int(user_input[0]) + int(user_input[1])
print(user_output)