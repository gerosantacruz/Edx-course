s = "bobbbobobbbooboboboboboboboobzobobsobobprbobobzbo"
number=0

for x in range(len(s)-2):
    if s[x]=="b":
        if s[x+1]=="o":
            if s[x+2]=="b":
                number+=1
        
print("Number of times bob occurs is:" +  str(number))

