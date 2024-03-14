from youtube_transcript_api import YouTubeTranscriptApi
 
# assigning srt variable with the list of dictionaries 
# obtained by the .get_transcript() function
# and this time it gets only the subtitles that 
# are of english language.
srt = YouTubeTranscriptApi.get_transcript("ZqTbOAmh3Tc", 
                                          languages=['en'])
 
# prints the result

for i in srt:
    print(i['text'])
