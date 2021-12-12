res = ''

file = open('css/test.scss', 'r')

for line in file:
    temp = line.strip()[:7]
    if temp == 'border:':
        pass
    else:
        res += line
file.close()

f = open('css/test.scss', 'w')
f.write(res)
f.close()
