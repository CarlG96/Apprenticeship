# Achieving Modularisation

As you encapsulate data within a class, you can encapsulate related functionality within a module.

## Build Deep Modules

Modules should provide simple interfaces on top of complex features. The simple interface makes
integrating other modules easier, reduces coupling, and simplifies their evolution. Modules should
also be cohesive and own everything related to the functionality they expose.

All the rules related to delivery should be in a Delivery module, and all the rules related to invoicing 
and payment should be in a Billing module.

## Find ways to reduce the effects of change

Have modules that encompass entire business domains. All classes related to invoices should be in the same
module, and all classes related to delivery should be in a dedicated Delivery module.

## Fight accidental coupling, or document it when you can't

Although keeping related things in the same module seems straightforward in theory, it is more nuanced in
practice. Business domains are highly interconnected, and developers often need to couple different 
modules. When you can't fight coupling, add code comments in the codebase, create documentation in the
team's wiki, and automate processes in your pipeline that alert you whenever you make a breaking change.

## Design clear interfaces

Modules should offer public interfaces that are easy to use, require as little information as possible
from clients, and are stable. That simplifies the integration between two modules and reduces the chances
of breaking changes.

## APIs and monolithic systems

Although the term API is commonly associated with remote HTTP calls, an API does not always have to
be offered exclusively through a web API. In modular monolithic systems, good, old-fashioned method 
calls are used to exchange messages between modules.

## Keep the module's interface small

Keep the module's interface to the external world as simple as possible. The challenge in designing
such interfaces is that modules encapsulate complex business logic by their very nature. Ensuring that
the complexity does not leak outside the module is crucial.

## Consider events as a way to decouple modules

The idea is that instead of coupling modules with each other through calls, we publish an event 
announcing what just happened, and interested modules subscribe to this stream of events.

