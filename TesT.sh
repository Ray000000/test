#!/bin/bash

echo "歡迎使用自定義 shell！"

echo "請選擇您要執行的任務："
echo "1. 更新並檢測系統"
echo "2. 打開終端"
echo "3. 退出"

read choice

# 根據用戶選擇執行操作

case $choice in
  1)
    lsb_release -a
    apt update -y && apt full-upgrade -y && apt upgrade -y && apt autoremove -y && apt autoclean -y
    echo "OS：$(lsb_release -sc)"
    echo "代號：$(lsb_release -r)"
    echo "Linux 內核：$(uname -r)"
    ;;
  2)
    gnome-terminal
    ;;
  3)
    exit
    ;;
  *)
    echo "無效選項"
    ;;
esac

exit 0
