---
slug: change-ssh-port
---
# Change SSH Port

VPS > OS

2025-06-08T00:25:53-04:00
Isaac Greene

1. `systemctl status ssh`
2. Enable ssh (even if running)
3. Edit the `/etc/ssh/sshd_config` file to uncomment Port 22 to whatever number you want
4. `systemctl restart ssh`
You may need to open your firewall to allow the new port. You can check that the port is open by running `ss -ntl`

Fin.
