# Managing Dependencies

## Separate high-level and low-level code

Separate code with high-level behaviour from low-level
implementation code to minimise the effect of changes. 
High-level code should primarily depend on other high-level
code, reducing the potential effects of changes to low-level
details. By isolating high-level code, we can create a more
modular and adaptable system that is easier to maintain and
update over time.

## Design Stable Code

When writing higher-level code, ensure it is more 'stable'.
Interfaces are an example of units of code that are stable over
time because they define, in a high-level way, what a component
offers the external world. Interfaces don't care about internal
implementation details and are a great way to decouple high-level
code from low-level code.

## Interface discovery

Writing all the high-level code first and implementing the 
details later is an interesting programming style, which you
get better at the more you practice.

## When not to separate the higher level from the lower level

Not every feature needs to separate the high-level and the low-level,
especially when the feature is not complex. Although you should never 
mix SQL queries or HTTP call to get information from a web services with
your business logic.

## Avoid coupling to details or things you don't need

Minimise dependencies on the implementation details of other components
to reduce the effect of internal changes. The less you know about how 
components do their job, the less likely you are to be affected by changes
to their implementation.

## Only require or return classes that you own

When designing classes or interfaces, it's important to require or return
only classes you own, not classes from a framework or third-party library.
By a "class you own", it means a class that belongs to your domain model and
over which you have complete control and ownership; for example, an entity,
repository, or new data structure you created for this new requirement. By
returning only classes you own, you avoid coupling your code to external
dependencies, such as a particular library or structure.

## Don't give clients more than they need

In information systems, it's common to reuse the same domain enteties in different
parts of the application. The same entity retrieved from a repository is used bu the
service and then sent back to the client that requested it (after, say, being serialized
to JSON). We do this becuase it's too easy to reuse an existing class even if the
client's needs differ.

A great solution to this issue is to decouple the entity from what the clients requested.
We can achieve this by creating a more specific data structure representing the client's
needs and then converting the entity to this data structure before sending it to the
client. This way, we can change the entity without worrying about how it will affect 
clients.

## Break down classes that depend on too many other classes

Break down classes with too many dependencies to limit the scope of potential
changes. This improves code maintainability and flexibility, allowing your
system to better adapt to changing requirements.

## Inject Dependencies, aka dependency injection

Enable dependency injection in components to increase flexibility and testability. 
By allowing dependencies to be injected, components become more modular and can
be easily tested in isolation.

## Avoid static methods for operations that chagne state

Static methods can't be changed at runtime, making the design inflexible and 
hindering testing. Using static methods as a design pattern can lead to a 
chaotic, hard to maintain system.

Try to make sure that static methods only consist of pure functions.

## Collaborators should always be injected

For example, if a MessageSender class has a Bot, UserDirectory and 
MessageRepository class, then they are its collaborators, and might need
to be switched out in the future.

## 
