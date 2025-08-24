---
slug: enable-ip-address
---
# Enabling IP Address
VPS > OS

2025-08-18T15:24:47-04:00
Isaac Greene

1. Cd into `/etc/network` then ls to see available file
2. Edit the file, and under "Addresses" add the address(es) you want to enable
:::info

Make sure that the address is "quoted" and includes the address prefix, even though you're adding one at a time.

Example: `"2001:db8::a823:c16/32"`

:::
3. Save and close the file, then run `netplan apply`
