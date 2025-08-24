---
slug: wp-config
---
# WordPress Configuration
1. Make sure that the virtual host in the web server is enabled to serve PHP files
2. If you had a Content-Security-Policy, you need to throw that out the window. If you want to keep it, you'll need to modify it to include `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.example.com; style-src 'self' 'unsafe-inline' data:; font-src 'self' data:; img-src https://*.gravatar.com https://woocommerce.com`
3. Change dir to `/srv/www/main/html` and use `wget https://wordpress.org/latest.tar.gz` then extract it with `tar -xzvf latest.tar.gz`
4. If you `ls` the current dir, you should have a folder called wordpress so `cd` into it. Use `mv ./* ..` to move the files where they're supposed to be. `cd ..` then `rm -rf wordpress` once you've verified that all the files have moved and `wordpress` is empty
5. `mv wp-sample-config.php wp-config.php` then set DB_NAME, DB_USER, DB_PASSWORD, and DB_HOST to the values you set in [MySQL](mysql-config)
