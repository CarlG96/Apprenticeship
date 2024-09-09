# Managing Complexity

What constitutes a simple object oriented design? There are six different
criteria:

- Simple code
- Consistent objects
- Proper dependency management 
- Good abstractions
- Properly handled external dependencies and infrastructure
- Well modularised

## Simple code

In order to keep classes and methods simple you should keep them
small. A method shouldn't be too long. A class shouldn't have
too many methods.

## Consistent objects

Good design in this regard is that objects can't ever be in an
inconsistent state. For example, using validation and properly guarded
setter methods to ensure that a state is always valid.

## Proper dependency management

Minimise dependencies among classes. The less they depend on each
other and the less the know about each other, the better.

## Good abstractions

A class that has no abstractions grows in complexity indefinitely.

## Properly handled external dependencies and infrastructure

Letting infrastructure details leak into your domain code may hinder
your ability to make changes in the infrastructure.

## Well modularised

Dividing systems into smaller components makes them easier to
maintain and understand. It also helps different teams work on 
separate components without conflicts.

## Simple design as a day-to-day activity

Creating a simple design isn't usually a complex challenge, but 
keeping it simple as the system evolves is.

## Reducing complexity is similar to personal hygiene

Constantly working toward simplifying the design can be compared to
brushing your teeth.

## Complexity may be necessary but should not be permanent

Sometimes a degree of complexity is needed to uncover a simpler
and more elegant solution to a problem. When you identify a simpler
solution, it's time to plan for refactoring.

## Consistently addressing complexity is cost effective

Regularly addressing complexity keeps both the time and cost 
associated with it within reasonable limits. Delaying complexity
management can result in significantly higher expenses and make
refactoring more difficult and time consuming.

## High-quality code promotes good practices

When developers work with well-structured code with proper abstractions,
straightforward methods, and comprehensive tests, they are more likely to
maintain the code's quality.

## Controlling complexity isn't as difficult as it seems

The key to ensuring that complexity doesn't grow out of hand is recognising
the signs as soon as possible and addressing them early.

## Keeping the design simple is a developer's responsibility

Find the right balance between simplicity and complexity.

## Good enough designs

Often, the most effective designs emerge after several iterations.

