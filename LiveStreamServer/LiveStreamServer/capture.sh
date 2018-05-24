raspivid -o ClientApp/dist/video.h264 -t 10000
MP4Box -add ClientApp/dist/video.h264 ClientApp/dist/video.mp4
# Remove the source raw file, leaving the remaining pivideo.mp4 file to play
rm -rf ClientApp/dist/video.h264
