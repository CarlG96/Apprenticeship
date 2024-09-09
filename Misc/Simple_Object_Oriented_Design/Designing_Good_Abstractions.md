# Designing Good Abstractions

"Being abstract is something profoundly different from being vague.
The purpose of abstraction is not to be vague but to create a new
semantic level in which one can be absolutely precise." - Edsger
Dijkstra

## Design abstractions and extension points

Create abstractions and extension points in your system to accomodate 
variability and simplify adding new functionality. They improve 
maintainability and flexibility while minimizing the need to 
rewrite existing code.

## Identifying the need for an abstraction

When is it a good idea to introduce an abstraction?

- Features that require lots of variations. This way, whenever a new
variation appears, all you need to do is create yet another implementation
of the abstraction.
- Features that require flexibility in terms of composability. If a feature
has dozens of variations and you may assemble a different combination 
for each client, then having an abstraction helps you combine variations without
much extra code.
- Places where you expect changes in the future. If you know that parts of the
feature will likely change, you can do yourself a favour and facilitate this 
change through good design.
- Decisions or code you want to hide from the rest of the system. You can use 
abstractions to prevent details from leaking to other parts of the code. For 
example, you should hide database access logic from your domain model. You can
do that by introducing an interface that's ignorant of the details.

## Designing good abstractions

A good abstraction separates the "what" from the "how". A good abstraction
focuses on what they should do but know nothing about how it's done.

## Separate the concrete data from the generalised business rule

The main challengearound generalising business rules is related to data. In most
information systems, business related data comes from a database. Mixing business 
rules and data retrieval concerns without a proper design is easy, but doing so 
leads to code that is complex and hard to follow.

When generalising business logic, you should avoid tying it to specific data.
Instead, ensure that the abstraction depends not on specific values but rather 
on generic ones. For example, instead of having "JK Rowling" and "Tolkien" hard-
coded in the code, the generlaised business logic should deal with a list of 
author's names, whoever those authors are.

## Prefer simple abstractions

Abstractions should be simple and require their implementations to do as little
work as possible. Such abstractions simplify the creation of new concrete 
implementations and reduce the overall complexity of the code that may 
accumulate over time when the number of implementations grows.

Abstractions add complexity to the code. It's harder for developers to follow
a flow full of interfaces and polymorphic calls. But this is the tradeoff you make
in exchange for more flexibility. You should strive to simplify the abstraction as
much as possible by letting it represent only the bare minimum of behaviour and
delegating the rest to concrete implementations.

## Rules of thumb

You might need an abstraction if:

- You keep changing the same class again and again
- Classes keep getting bigger
- You are constantly using if statements to implement variability
- You are finding clunky ways to glue existing business rules to other parts of the
system