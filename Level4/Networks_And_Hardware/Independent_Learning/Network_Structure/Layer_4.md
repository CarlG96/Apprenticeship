# Layer 4 - Transport

The transport layer is responsible for how our data is communicated to another device. It's main concerns are:

- The protocol: A language, a set of rules, and procedures
- Port Number - Think of this like a post-box, or pigeon hole - which service is going to pick up the data

## Protocol

Main protocols are:

- TCP - Transmission Control Protocol
 - TCP ensures that the data we send arrives at the destination and is intact
 - This is vital when sending a file for example. We don't want any data to be missing - it ensures that integrity is maintained.
 - It is known as a connection orientated protocol

- UDP - User Datagram Protocol
 - UDP sends data but with no checks
 - Primary use is for Video and Voice Data
 - It is known as a connection-less protocol
 - Eg consider each time a video call has issues - missing block or someone freezes. If TCP was used, then the data would need to be resent and the video wouldn't work

We don't make this decision from the networking point of view, it is made in the application layer.

## Port Number

The port number has 2 primary concerns:
- Which service am I sending this data too?
- When data leaves my LAN, how do I get a response back to my computer?

## Service Port

For example, when browsing the internet, there are 2 primary ports:
- 80 (HTTP) - Non secure web browsing
- 443 (HTTPS) - Secure web browsing

In essence, in our browser, two things are hidden from us, IP Address and Port number

eg https://www.bbc.co.uk/ is actually 212.58.236.1:443 (443 is the port where the webserver is located at that IP address)

## Data leaving the LAN

PAT (Port Address Translation) is used in conjunction with NAT (Network Address Translation). This mechanism allows data from my local device to leave my LAN, go to the internet and return the data to me.

