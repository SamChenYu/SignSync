from youtube_transcript_api import YouTubeTranscriptApi
 
# assigning srt variable with the list of dictionaries 
# obtained by the .get_transcript() function
# and this time it gets only the subtitles that 
# are of english language.
srt = YouTubeTranscriptApi.get_transcript("NjwQzJuHG4I", 
                                          languages=['en'])
 
# prints the result
print(srt)
