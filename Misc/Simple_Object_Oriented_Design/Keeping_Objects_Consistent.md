# Keeping Objects Consistent

# What are consistent objects?

When objects are consistent, their internal state is synchronised and coherent
with the program's requirements and user's expectations. The rule of thumb is:
Does the client of the class need to work to be sure the object is in a 
consistent state? Maintaining a consistent state should take minimal,
if not zero, effort from clients.

# Make the class responsible for its consistency

You should ensure that consistency checks are coded in the class itself.
If there is a Room class, with a member variable of chairs, then the 
Room class should be the thing to change the number of chairs, even if a
client class calls on it to change the number.

# For complex dependencies

If you need to have, for example, a database query before ensuring the 
consistency of an entity, you can have a service class containing the 
entity, with logic in the service class dealing with some of the 
consistency, and the rest that can be handled by the entity internally
done in the entity class.

# Design effective data validation mechanisms

Validate client data to prevent unexpected errors and reduce the risk of odd
behaviour in the system. Clearly define the consequences of invalid data. This 
pattern improves code reliability and user experience by ensuring that the system
can better handle and communicate problems.

## Make preconditions explicit

We can design different actions when preconditions aren't met. We can take harsh 
measures against invalid input values, such as throwing an exception. However, this 
decision increases the workload for client classes because they have to handle this possible
exception.

We could handle the invalid value by early returning or assigning it a default value.
Design your code to not fail.

## Create validation components

Business validation rules are pervasive in enterprise systems, so you should handle
validation explicityly in your code by giving rules their own classes. This enables
reusability and clarity when clients call validation methods.

# Use nulls carefully or avoid them if you can

The possibility of a class returning null forces clients to perform null checks everywhere,
which hampers readability. Adding null checks everywhere is something you should avoid.
Use Optional types if they are available in your language.

# Encapsulate State Checks

Encapsulate state checks, regardless of their complexity. Doing so ensures that clients
remain ignorant about other classes' internal details, enabling classes to change their
internal implementation without breaking the clients.

# Shotgun surgery

If you have to choose, in the client class, between doing
```
if(offering.getNumberOfAvailableSpots() == 0)
```

or

```
if(!offering.hasAvailableSpots())
```

you should go with the second one, as in the first one if the 
getNumberOfAvailableSpots() method changes, then you might have to
change the conditonal check, so there is more than one change.

# Provide only getters and setters that matter

offer clients only relevant getters and setters. Getters should not modify
or allow modifications of the class state, and setters should be provided
for descriptive properties only. This pattern promotes code clarity and
maintainability by limiting the public interface of a class to what is 
necessary and relevant for clients.

# Good properties of getters

- Getters should never change the state of the class. 
Command-query separtion (CQS) is a principle that says that a method
should be either a command (perform an action that changes the state of
a system) or a query (returns data to the caller) but never both.
- Returning unmodifiable collections is a good practice, but obviously
increases memory overhead.

# Good properties of setters

A safe rule of thumb for using setters is when the attributes being 
changed mainly describes the object, such as a description attribute for
an Offering class or a name attribute in an Employee class.

