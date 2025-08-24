---
slug: updating
---
# Updating Dedicated Bedrock Server
VPS > Minecraft

2025-05-23T16:57:18-04:00
Isaac Greene

Instructions on updating the Dedicated Bedrock Server from Mojang.

1. Download the latest server from https://www.minecraft.net/en-us/download/server/bedrock/
2. `scp /path/to/zip.zip user@ip:/srv/`
3. SSH into the server
4. `cd /srv/`
5. `mv /srv/mcbedrock /srv/mcbedrock[version]`
6. `mkdir mcbedrock`
7. `unzip /srv/bedrock-server[version] -d /srv/mcbedrock`
8. `tmux attach`
9. `cd mcbedrock`
10. `./bedrock_server`
11. Immediately stop the server then detach
12. Then copy the server.properties file and the worlds folder from the backup into the new mcbedrock folder
13. Go back into the tmux window and restart the server
