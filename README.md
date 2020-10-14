# headlessdesk

A headless spacedesk client.

## Description

This is a fork of [spacedesk-HTML5-VIEWER-Offline](https://github.com/eagleoflqj/spacedesk-HTML5-VIEWER-Offline), which itself is an adaption of [spacedesk-HTML5-VIEWER](http://spacedesk.ph/html5viewer/) v0.9.9z.63 for offline use.

It's point is to allow for the server to have a persistant emulated display, by having a client always running in the background as a Windows service, that you might view with another remote desktop client e.g. Parsec.

## Requirements

[Node.js](https://github.com/nodejs/node)

[Spacedesk Server](https://spacedesk.net/#downloads)

## Usage

Use ```npm install``` to install the client as a service to be run automatically on startup.

To uninstall the service, use ```npm run uninstall```

Configure with ```settings.json```, which is created on startup if no existing file is present.

**Example:**

```json
{
  "server": "127.0.0.1",
  "port": 28252,
  "resolution": {
    "width": 1920,
    "height": 1080
  },
  "connectionTimeout": 20000,
  "reconnections": 5,
  "reconnectionTimeout": 60000
}
```
