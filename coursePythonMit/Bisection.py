# Assume s is a string of lower case characters.

# Write a program that prints the longest substring of s in which the letters occur in alphabetical order. For example, if s = 'azcbobobegghakl', then your program should print

# Longest substring in alphabetical order is: beggh
# In the case of ties, print the first substring. For example, if s = 'abcbcd', then your program should print

# Longest substring in alphabetical order is: abc
# Note: This problem may be challenging. We encourage you to work smart. 
# If you've spent more than a few hours on this problem, we suggest that you move on to a different part of the course. If you have time, come back to this problem after you'
# ve had a break and cleared your head


low=0
high=100
ans=int(low + high)//2
guess=""

print("Please think of a number between 0 and 100!")
while guess !="c":
    print("is your secret  numbrer " + str(ans) + "!")
    guess=input("Enter 'h' to indicate the guess is too high. Enter 'l' to indicate the guess is too low. Enter 'c' to indicate I guessed correctly.")
    
    if guess == "l":
        low=ans
        ans=int(low + high)//2
    elif  guess == "h":
        high=ans
        ans=int(low + high)//2
    elif guess =="c":
        break
    else:
        print("put a valid comannd")

    
print("youtr number is " + str(ans) + "!" )

