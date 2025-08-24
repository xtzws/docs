---
slug: updating-php
---
# Updating PHP
VPS > Web Server

2025-07-21T23:22:47-04:00
Isaac Greene

Updating PHP requires certain steps unique to LiteSpeed server.

1. `apt update` then `apt-get install build-essential pkg-config openssl libssl-dev bison autoconf automake libtool re2c flex libxml2-dev libssl-dev libbz2-dev libcurl4-openssl-dev libdb++-dev libjpeg-dev libpng-dev libxpm-dev libfreetype-dev libgmp3-dev libc-client2007e-dev libldap2-dev libmcrypt-dev libmhash-dev freetds-dev zlib1g-dev libmysqlclient-dev libncurses-dev libpcre3-dev unixodbc-dev libsqlite3-dev libaspell-dev libreadline-dev librecode-dev libsnmp-dev libtidy-dev libxslt1-dev libkrb5-dev libc6-dev libonig-dev libzip-dev`
2. `cd /tmp`
3. `wget https://www.php.net/distributions/php-8.4.10.tar.gz`, replace 8.4.10 with the current version
4. `tar -xf php-8.4.10.tar.gz`
5. `cd php-8.4.10`
6. `./configure --prefix=/usr/local/lsws/lsphp84 --enable-litespeed --with-mysqli --with-zlib --enable-gd --enable-shmop --enable-sockets --enable-sysvsem --enable-sysvshm --enable-mbstring --with-iconv --with-pdo-mysql --enable-ftp --with-zip --with-curl --enable-soap --enable-xml --with-openssl --enable-bcmath` replace the lsphp84 in the prefix with the current version
7. `make` then `make install` which can both take a while
8. Log into the OpenLiteSpeed web admin portal
9. Go to Server Configuration > External App > edit lsphp > change "command" to `lsphp84/bin/lsphp` (again replace lsphp84 with current version)
10. Restart server

Fin.
