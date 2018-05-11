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

