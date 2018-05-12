s = 'azcbobobegghakl'
base=s[0]
longest=s[0]
large=0


for x in range (len(s)-1):
    if s[x+1] >= s[x] :
        base+=s[x+1]
        if len(base) > large:
            large= len(base)
            longest= base
    else:
        base=s[x+1]
x +=1

    
print ('Longest substring in alphabetical order is: ' + longest)
    

