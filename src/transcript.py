from youtube_transcript_api import YouTubeTranscriptApi
 
# assigning srt variable with the list of dictionaries 
# obtained by the .get_transcript() function
# and this time it gets only the subtitles that 
# are of english language.
srt = YouTubeTranscriptApi.get_transcript("mxz8KyV3Ydc?si=tF688HKUdkpRfVy5",
                                          languages=['en'])
 
# prints the result

for i in srt:
    if "[" not in i['text']:
        if "n't" in i['text']:
            print(i['text'].replace("n't", " not"))
        else :
            print(i['text'])






