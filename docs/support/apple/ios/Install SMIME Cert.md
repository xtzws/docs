---
slug: install-smime-cert
---

# Installing an S/MIME Certificate

Apple > iOS

2024-12-30T20:01:09-05:00
Isaac Greene

To install a personal (self-signed) S/MIME certificate, follow these steps.

1. On Mac, open Keychain Access
2. Navigate to Keychain Access > Certificate Assistant > Create a Certificate
3. Enter your name
4. Select Self signed root as the identity type
5. Select S/MIME (Email) as the certificate type
6. Check "Let me override defaults" if you need to change settings, need your certificate available for longer than 1yr, or would like a certificate for an email that is NOT your Apple ID
7. Click Create
8. Right-click on the certificate in your keychain
9. Click Export "name"...
10. Enter a password
11. Save the certificate in a location your iPhone can access it

1. On iPhone, open the certificate you just created
2. Select iPhone when the system asks on which device to install the profile
3. Navigate to Settings > Profile Downloaded
4. Install and trust the profile. Make note of the email address associated with
5. Enter the password you created for the certificate
6. Navigate to Settings > Apps > Mail > Accounts
7. Select the account you created a certificate for on Mac
8. Scroll to Signing and Encryption
9. Enable Signing

Fin.
