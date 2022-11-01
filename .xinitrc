#!/usr/bin/sh
. /etc/X11/xinit/xinitrc-common

xrandr -s 1920x1080 &
exec startxfce4
