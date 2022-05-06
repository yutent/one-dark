

# 控件主题
# echo "重置控件主题……"
# gsettings set org.cinnamon.desktop.interface gtk-theme "Mint-Y"
# echo "重置完成, 0.5秒之后, 修改为one-dark"
# sleep 0.5
# gsettings set org.cinnamon.desktop.interface gtk-theme "one-dark"

# 鼠标主题
# gsettings set org.cinnamon.desktop.interface cursor-theme "Adwaita"

# 图标主题
# gsettings set org.cinnamon.desktop.interface icon-theme "Mint-Y"

# 桌面主题
# echo "重置桌面主题……"
# gsettings set org.cinnamon.theme name "Mint-Y"
# echo "重置完成, 0.5秒之后, 修改为one-dark"
# sleep 0.5
# gsettings set org.cinnamon.theme name "one-dark"

# 窗口主题
echo "重置窗口主题……"
gsettings set org.cinnamon.desktop.wm.preferences theme "Mint-Y"
echo "重置完成, 0.5秒之后, 修改为one-dark"
sleep 0.5
gsettings set org.cinnamon.desktop.wm.preferences theme "one-dark"