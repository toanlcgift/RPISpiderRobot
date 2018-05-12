raspivid -o video.h264 -t 10000
MP4Box -add video.h264 video.mp4
# Remove the source raw file, leaving the remaining pivideo.mp4 file to play
rm video.h264
