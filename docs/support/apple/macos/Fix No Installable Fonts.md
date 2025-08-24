---
slug: no-installable-fonts
---
# Fix "No installable fonts"
Apple > macOS

2024-10-21T02:46
Isaac Greene

If you are trying to install fonts on macOS and Font Book returns the error "No Installable Fonts selected" when opening, follow these steps to fix it. If you have multiple typefaces or fonts, you will need to repeat these steps for each file.

1. Open FontForge
2. Open your font
3. Navigate to Element > Font Info...
4. Under PS Names, look for Fontname, Family Name, and Name for Humans.
5. If they contain only a period (.), change that to the name of the typeface. If you have other styles in the same typeface already installed, make sure to copy it exactly including spaces.
6. Click OK when done.
7. Export fonts as normal.

Fin.
