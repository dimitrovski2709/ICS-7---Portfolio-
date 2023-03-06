---
title: 'Design'
---

## Misuser stories

- As an **unethical hacker**, I want to phish users to steal their passwords or TOTP tokens to access their account
- As an **rogue employee** I want to access other users' files to harm the project's reputation
- As an **activist** that doesn't like the hosted files I want to DDoS the website to make them inaccessible
- As a **nation state**, I want to block access to a non-desirable files so that users can't access them
- As a **nation state**, I want run MitM attacks so that I can read the data inside
- As a **criminal** that has malware on the user's device, I want to steal the users data from the device
- As a **script kiddie**, I want to use past leaked passwords to log in to users accounts
- As a **script kiddie**, I want to run brute force attacks to get into users' accounts
- As a **blackhat hacker**, I want to do SQL injection attacks so that I can read and/or write to the database
- As a **blackhat hacker**, I want to run XSS attacks so that I can read data from the user's browser
- As a **malicious actor with physical access**, I want to read authenticated user files

## Misuse case diagram

### Legend

Orange circle: actor

White circle: standard activity

Green rectangle: filter or mitigation that prevents or reduces the risk of malicious activities

Black rhombus: malicious activity

Black circle: malicious actor doing malicious activity

### Diagram <sup>(click to enlarge)</sup>

[![misuse diagram](/portfolio-cs7/misuse-diagram.png)](/portfolio-cs7/misuse-diagram.png)

### Explanation

With diagram above I aim to encapsulate as much as possible of the malicious actors and all the malicious activity they could be doing. There are always unknowns so an "unknown attack" is added too.

Then there are the green rectangles which are the mitigations for the malicious activities. Following the **best practices**, in this case the defense in depth strategy, I've aimed to provide many mitigations for the same malicious activity, such as preventing the potential attack of past leaked password by not allowing them in the first place (checking on registration with the haveibeenpwned API), a U2F security key, face/voice authentication or authorization, and network based whitelisting. Or preventing brute force attacks by rate limitng, captchas and client side hashing.

For efficiency, there are some mitigations that solve or reduce the risk of multiple attack scenarios at once, such as moving work like encryption and hashing to the client which makes data inaccessible to anyone but the client but also prevents resource exhaustion on the server as the work is done on the client only. It also prevents some SQL injection attacks as data is hashed or encrypted before being sent.

What isn't measured, can't be managed, so logging is applied as a mitigation strategy to all user actions to potentially log (and optionally notify of) any unknown attacks. An adaptive WAF can also be used for unknown attacks.

For endpoint security, there is not much information available as that usually is something out of scope. I could think of some solutions for keyloggers, cookie stealers and clipboard stealers, though.

### Implementation

Due to the limited time available for the project, likely not all mitigations will be applied as the end product will be a prototype or proof of concept and not a ready for production software.

---

- SDLC
- pipeline with SAST/DAST
- misuse case diagram?
- WAFs

[![devsecops playbook](https://raw.githubusercontent.com/6mile/DevSecOps-Playbook/main/images/devsecops-loop-securestack-final-1280x640.png)
](https://github.com/6mile/DevSecOps-Playbook)

[![devsecops controls](https://raw.githubusercontent.com/6mile/DevSecOps-Playbook/main/images/devsecops-controls.jpg)](https://github.com/6mile/DevSecOps-Playbook)
