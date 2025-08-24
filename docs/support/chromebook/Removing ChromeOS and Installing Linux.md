---
slug: remove-chromeos
---
# Remove ChromeOS and install Linux
1. Have a spare USB drive
2. Insert it when the Firmware Utility Script asks for it
3. Then create a bootable USB using something like Balenta
4. Insert after Firmware Utility Script finished and before UEFI boot starts
5. Press ESC if you can, otherwise wait until UEFI boot finishes, then type `exit`
6. Select Boot device or something
7. Select USB drive then boot

**THESE TWO INSTRUCTION SETS ARE NOT LINEAR**

1. Remove all screws on the back
2. Pop out the keyboard (takes a lot of work)
3. Remove internal battery connector from main board
4. Attach external power supply, like 45W or higher
5. Restart ChromeOS setup
6. Click Continue as guest
7. Open Crosh (`Ctrl-Alt-T`)
8. Type `shell`
9. Then open sudo-capable shell (`Ctrl-Alt-Right arrow`)
10. Login as `chronos`
11. Type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh`
12. Follow prompts
