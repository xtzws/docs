---
slug: configuration
---
# OpenLiteSpeed Configuration
VPS > Web Server

2025-03-12T15:18:53-04:00
Isaac Greene

To get started with a web server on VPS, follow these steps.

1. In your DNS settings, create an A record pointing to the IPv4 address of your web server
2. Create an AAAA record pointing the IPv6 address of your server
3. Run these commands to install your SSL certificate:
	1. `sudo apt update`
	2. `sudo apt install python3 python3-venv libaugeas0`
	3. `sudo python3 -m venv /opt/certbot/`
	4. `sudo /opt/certbot/bin/pip install --upgrade pip`
	5. `sudo ln -s /opt/certbot/bin/certbot /usr/bin/certbot`
	6. `sudo certbot certonly --standalone`
	7. `echo "0 0,12 * * * root /opt/certbot/bin/python -c 'import random; import time; time.sleep(random.random() * 3600)' && sudo certbot renew -q" | sudo tee -a /etc/crontab > /dev/null`
	8. Run `sudo /opt/certbot/bin/pip install --upgrade certbot` monthly to get security updates
4. Run these commands to install and start OpenLiteSpeed
	1. `wget https://openlitespeed.org/packages/openlitespeed-1.7.16.tgz`
	2. `tar -zxvf openlitespeed-*.tgz`
	3. `cd openlitespeed`
	4. `./install.sh`
	5. `/usr/local/lsws/bin/lswsctrl start`
5. Then follow the instructions from OpenLiteSpeed on creating vhosts and listeners. [instructions](https://docs.openlitespeed.org/config/) WebAdmin is (ipv4):7080
	1. Create access log in `/srv/www/bgs/logs` and load in vhost log settings
	2. Set owner of `conf` to `lsadm:lsadm`
	3. Change DOCROOT to `/srv/www/bgs/html/`
6. Activate Firewall to allow only ports 22, 80, 443, and 7080.
