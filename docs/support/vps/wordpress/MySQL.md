---
slug: mysql-config
sidebar_position: 1
---
# MySQL for WordPress
1. To get started, run `mysql -u root -p` as `root`
2. Once you're logged in, create your environment:
	1. `CREATE DATABASE database_name;`
	2. `CREATE USER "example"@"localhost" IDENTIFIED BY "password";` (use Keychain Access to generate a password)
	3. `GRANT ALL PRIVILEGES ON database_name TO "example"@"localhost";`
	4. `FLUSH PRIVILEGES;`
	5. `EXIT`
3. After this point, you should be able to let WordPress take care of the rest. If you need to do manual labor, rerun MySQL as a non-root user, for example `example` with `mysql -u example -p`

To aid immensely in system performance (I got memory usage down from 47% to 13%), edit the `.cnf` file at `/etc/mysql/my.cnf` (might be called something else) with these flags:
```
[mysqld]
performance_schema = off
key_buffer_size = 16M
tmp_table_size = 1M
innodb_buffer_pool_size = 1M
innodb_log_buffer_size = 1M
max_connections = 25
sort_buffer_size = 512K
read_buffer_size = 256K
read_rnd_buffer_size = 512K
join_buffer_size = 128K
thread_stack = 196K
```
