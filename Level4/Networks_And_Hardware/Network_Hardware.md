# Network Hardware

Broadly speaking, there are two types of transmission technology in widespread use: broadcast links and point-to-point links.

## Point-to-point links

Point-to-point links connect individual pairs of machines. To go from the source to the destination on a network made up of point-to-point links, short messages, called packets in certain contexts, may have to first visit one or more intermediate machines. Often multiple routes, of different lengths, are possible, so finding good ones is important in point-to-point networks. Point-to-point transmission with exactly one sender and one receiver is sometimes called unicasting.

## Broadcast links

On a broadcast network, the communication channel is shared by all the machines on the network; packets sent by any machine are received by all the others. An address field within each packet specifies the intended recipient. Upon a receiving a packet, a machine checks the address field. if the packet is intended for the receiving machine, that machine processes the packet; if the packet is intended for some other machine, it is just ignored.

