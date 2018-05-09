s = 'azcbobobegghakl'
x=""
temp=s[0]
c=0
while c < len(s):
    for e in range(len(s)-1):
            if s[e] <= s[e+1]:
                if temp < x:
                    temp+=x
                    c+=1

    
            
    
print(temp)
print(x)
    

