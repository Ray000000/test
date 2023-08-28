#!/bin/bash

echo "歡迎使用自定義 shell！"

echo "請選擇您要執行的任務："
echo "1. 更新並檢測系統"
echo "2. 打開終端"
echo "0. 退出"

read choice

# 根據用戶選擇執行操作

case $choice in
  1)
    apt update -y && apt full-upgrade -y && apt upgrade -y && apt autoremove -y && apt autoclean -y
    lsb_release -a
    ;;
  2)
    gnome-terminal
    ;;
  0)
    exit
    ;;
  *)
    echo "無效選項"
    ;;
esac

exit 0
