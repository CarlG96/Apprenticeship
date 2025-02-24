# IPv4

- Stands for Internet Protocol Addressing version 4
- 32 bit address
- Represented as a dot-decimal value eg 192.168.1.1
- It is broken into 4 octets or bytes - 8 bits per octet, each 8 bits calculates to a decimal value
- Each decimal value ranges from 0-255 ie 0.0.0.0 to 255.255.255.255

If decimal representation is 192.168.0.1
Binary is 11000000.10101000.000000000.00000001

## IPv4 Basic Addressing

Example:
- I have a PC with an IP address of 192.168.0.100
- I have a Printer with an IP Address of 192.168.0.101
- Both devices are connected wirelessly to my SOHO Router which has an IP address of 192.168.0.1

## Scenario "Local" - Part 1

When you want to print a document, the computer works down these layers to send the data to the printer:

The first two layers aren't necessarily networking. It's layers 3 and 2 we care about
- Layer 5 is the application selecting the installed printer on the operating system with the correct drivers. It sends the data from here
- Layer 4 is the protocol being used, in this case it will be by TCP, the port will depend on the printer
- Layer3 - I want to send this data to 192.168.0.101 

## Subnet mask

At this stage, your computer looks at another IP address called the subnet Mask

Typing:

`ipconfig`

into Windows command prompt shows the decimal value of the subnet mask for connections

## What is a subnet mask?

The subnet mask allows your computer to break your IP address into 2 distinct halves: Network ID and Host ID.

The Network ID is your 'Local Address', Host Id is your "House Number"

It uses ANDs between the network ID and subnet mask and NANDs between Host ID and subnet mask to calculate a result binary number.

## Part 2

Now we have our network ID, our computer needs to make the decision if this IP Address is on our subnet or not.

Ie does the network ID of our computer equal that of the device we are trying to reach (the printer)

In this case it does, both are 192.168.0

As it is local, we move onto the next layer, Layer 2 - Data Link. The computer will then check it's ARP table to see if the MAC address has been discovered. If it hasn't it will broadcast to find it, if it does have it, it will send the data out via Layer 1

Layer 1 is as simple as using the active network connection, in this case "Wireless"

## Not local IPs

If the Network ID with the IP of the website we want isn't equal. It will use DNS to resolve the website, coming back with the IP address.

Your computer turns to the default gateway, at Layer 2 instead of looking for the MAC address it will now look for the destination IP in the ARP table and uses the Default Gateway IP

It moves to Layer 1 and sends the data to the Router and then onto an ISP

Using the windows command:

`tracert <website url>`

You can see the number of hops (routers) it takes to reach the destination.