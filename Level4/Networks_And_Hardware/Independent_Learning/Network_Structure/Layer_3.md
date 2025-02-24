# Layer 3 - Network

The network layer is all about the IP address

This is ultimately the address we want to send data to. MAC address (layer 2) is used to primarily send data locally, though IP is still used to knwo where we want to go. IP address becomes more relevant from a Intermediatory Device point of view when you want to leave your local network and send data to a device that resides elsewhere.

The primary Layer 3 device is the Router.

## The Router

The router has quite a simple job. It looks at the IP address and makes a decision on how it is going to reach that address.

In our home networks, we generally only have one subnet (LAN). 1 working IP range that our devices are associated to (see IPv4 addressing). This means that if we use an IP address that isn't on our subnet, the Router is generally sending our data to the ISP (Internet Service Provicer) Router to find the address.

On larger networks, we may have multiple subnets that our router allows access to.

## The Layer 3 Switch

In modern networking we have gained the Layer 3 switch which allows switches (layer 2) to be able to route at layer 3. These are also called multi-layer switches.

The main driving force behind this was Virtual Local Area Networks.