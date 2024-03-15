import ai
from youtube_transcript_api import YouTubeTranscriptApi
 
# assigning srt variable with the list of dictionaries 
# obtained by the .get_transcript() function
# and this time it gets only the subtitles that 
# are of english language.
srt = YouTubeTranscriptApi.get_transcript("mxz8KyV3Ydc?si=tF688HKUdkpRfVy5",
                                          languages=['en'])
 
# prints the result

def int_to_en(num):
    d = { 0 : 'zero', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five',
          6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine', 10 : 'ten',
          11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen',
          15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen',
          19 : 'nineteen', 20 : 'twenty',
          30 : 'thirty', 40 : 'forty', 50 : 'fifty', 60 : 'sixty',
          70 : 'seventy', 80 : 'eighty', 90 : 'ninety' }
    k = 1000
    m = k * 1000
    b = m * 1000
    t = b * 1000

    assert(0 <= num)

    if (num < 20):
        return d[num]

    if (num < 100):
        if num % 10 == 0: return d[num]
        else: return d[num // 10 * 10] + '-' + d[num % 10]

    if (num < k):
        if num % 100 == 0: return d[num // 100] + ' hundred'
        else: return d[num // 100] + ' hundred and ' + int_to_en(num % 100)

    if (num < m):
        if num % k == 0: return int_to_en(num // k) + ' thousand'
        else: return int_to_en(num // k) + ' thousand, ' + int_to_en(num % k)

    if (num < b):
        if (num % m) == 0: return int_to_en(num // m) + ' million'
        else: return int_to_en(num // m) + ' million, ' + int_to_en(num % m)

    if (num < t):
        if (num % b) == 0: return int_to_en(num // b) + ' billion'
        else: return int_to_en(num // b) + ' billion, ' + int_to_en(num % b)

    if (num % t == 0): return int_to_en(num // t) + ' trillion'
    else: return int_to_en(num // t) + ' trillion, ' + int_to_en(num % t)

    raise AssertionError('num is too large: %s' % str(num))

#print(srt)

def removePunctuation(word):
    import string
    returnString = ""
    punctuation = False

    for char in word:
        if char in string.punctuation:
            punctuation = True

            continue
        else:
            returnString += char
        
    return returnString, punctuation

formatted_script = []

def checkForSymbols(word):
    unalteredString = ""

    for char in word:
        if char == "@" or char == "%":
            unalteredString += " " + removePunctuation([x for x in ai.sendRequest(char, 2).split(" ") if '"' in x][1])[0]
        else:
            unalteredString += char

    return unalteredString

import re

def find_numbers(text):
    pattern = r'\b\d+\b'
    numbers = re.findall(pattern, text)
    
    return numbers


for i in srt:
    if "[" not in i['text']:
        x = i['text']

        if "n't" in x:
            x = x.replace("n't", " not")
        
        if "%" in x or "@" in x:
            x = checkForSymbols(x)

        formatted_script.append(x)

singular_script = []

for i in formatted_script:
    word_list = (i).split(' ')
    for j in word_list:
        number = find_numbers(j)

        if number:
            number[0] = int(number[0])
            print(number)
            singular_script.append(int_to_en(number[0]))
        else:
            singular_script.append(j)



print(singular_script)
