---
title: 'How to ensure files are only accessible by allowed parties'
---

## Multi-factor Authentication to access files

- pros and cons of different authentication methods
- password hashing options
- look into TOTP
- look into U2F/FIDO
- look into passkeys
- look into IP/IP Range/ASN/Country whitelisting
- face recognition?
- voice recognition?
- time of day whitelisting
- GPS
- 3rd party app authentication
- other account authentication?
- email notifications on correct password
- look into best practices such as banks, and available products such as passage.id, clerk.dev, hanko.io, zitadel.com, ory.sh, fusionauth.io, secureauth.com
- look into intelligent MFA (ex. require email confirmation on new ASN)
- require re-authentication for important actions such as deleting files

### Rate limiting

### Password reset

- look into encrypted email

### Access tokens

- httpOnly strict cookie
- [more](/portfolio-cs7/en/specialization/endpoint#session-stealer-ex-redline-stealer)

## Client-side encryption to view contents

### Private key management

## XSS protection

## SQL injections
