#!/bin/bash

# 此腳本將顯示一個簡單的選單

echo "歡迎使用自定義 shell！"

echo "請選擇您要執行的任務："

# 設定條目顏色
echo "\e[38;5;34m1. 更新並檢測系統\e[0m"
echo "\e[38;5;34m2. 打開終端\e[0m"
echo "\e[38;5;34m0. 退出\e[0m"

read choice

# 根據用戶選擇執行操作

case $choice in
  1)
    # 更新並檢測系統
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
