# Handling External Dependencies and Infrastructure

Software systems rarely exist in isolation; they often interact with databases for data persistence
or web services from external companies or internal teams. A significant challenge in software 
design is preventing our code from being contaminated by these outside details.

Without encapsulation, your code becomes tightly coupled to the data structures and abstractions
of third party APIs. Many libraries are not particularly stable and undergo frequent changes. You
don't want minor updates to those libraries affecting numerous places in your code.

## Separate infrastructure from the domain code

Code that handles infrastructure should be separated from the domain code. These classes 
should be kept as thin as possible and contain no business logic. This separation keeps 
the design clean, easier to evolve, and more testable.

## Reasons to use an interface that separates the infrastructure and domain code

Although many argue that interfaces support us in changing the infrastructure's 
implementation later, the primary reason to use an interface is to prevent you 
from writing code that relies on the infrastructure directly. Within an interface,
you can only define a set of methods you anticipate from the infrastructure, and 
nothing more.

## Hide details from the code, not from the developers

Your design should conceal the internal details of the infrastructure from the
rest of the code to minimise the effect of implementation changes. However, it's 
important not to hide too much from developers, because understanding what's happening
behind the scenes enables them to write optimal and efficient code.

## Changing the infrastructure someday: Myth or reality?

Here are some common examples where you might need to evolve the system
without breaking the rest of it:

- The system requires caching, and we wish to cache specific queries without 
altering the entire codebase
- Scaling demands necessitate the introduction of a read replica. We don't 
want to change every place in the code that calls the database and redirects
it to the replica. Instead, we want the infrastructure abstraction to handle it.
- The authentication mechanism used internally by our company to validate calls 
from internal web services has changed. It shouldn't be necessary to modify every
occurrence of a call due to this change.
- The system now needs to handle large file uploads and downloads, prompting a
decision to transition to Amazon's S3 instead of storing files on on-premises
disks. This migration becomes much easier if the infrastructure code is
encapsulated behind a well-defined interface.

## Use the infrastructure fully

Get to know your underlying infrastructure and use it to the best advantage. 
Design your classes in a way that optimises what they have to offer. This helps
you to write the best system you can with the least effort.

## Do your best not to break your design

In the world of software design, nothing comes without tradeoffs. If you wish to
use a remarkable feature from your infrastructure, it may require creating additional
abstractions. This ensures that your design remains protected if there are changes in
how this operation is handled in the future, which is not uncommon.

## Only depend on the things you own

Create wrappers on top of third-party data structures and libraries. Doing so prevents
third-party dependencies from spreading too far in the codebase, saving you time
whenever such out-of-control classes change.

## Don't fight your frameworks

Although it's important to minimise coupling to external dependencies you don't control, 
it's equally essential to avoid fighting against them. Complete decoupling from all
dependencies is an unattainable goal.

## Encapsulate low-level infrastructure errors in high-level domain errors

Any errors triggered by the infrastructure must be fully encapsulaed into the
infrastructure layer, converted to an error that makes sense to the domain, and 
gracefully handled by the application.



