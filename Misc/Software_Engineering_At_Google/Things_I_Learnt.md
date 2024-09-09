# Things I Learnt

## First Learning

Somewhere between a years long project and a decades long one, 
upgrading will have to come into play. Because of this, you 
should plan for maintainability, and this gem:

```
With a sufficient number of users of an API, 
it does not matter
what you promise in the contract:
all observable behaviors of your system
will be depended on by somebody.
```

Basically meaning that you can never eradicate breaking changes,
but you can mitigate them as far as is reasonably possible.

## Second Learning

```
It's Programming if 'clever' is a compliment.
It's Software Engineering if 'clever' is an accusation.
```

## Third Learning

```
If a product experiences outages or other problems as a result
of infrastructure changes, but the issue wasn't surfaced by tests
in our Continuous Integration system, it is not the fault of the
infrastructure change. Or 'If you liked it, you should have put
a CI test on it.'
```

## Fourth Learning

```
Five things affect the flexibility of a codebase, here are 
the principles and some examples:

Expertise:
We know how to do this; for some languages, we've now done
hundreds of compiler upgrades across many platforms.

Stability:
There is less change between releases because we adopt
releases more frequently; for some languages, we're now
deploying compiler upgrades every week or two.

Conformity:
There is less code that hasn't been through an upgrade 
already, again because we are upgrading regularly.

Familiarity:
Because we do this regularly enough, we can spot redundancies
in the process of performing an upgrade and attempt to automate. 
This overlaps significantly with SRE views on toil.

Policy:
We have processes and policies. The net effect of these processes
is that upgrades remain feasible because infrastructure teams do 
not need to worry about every unknown usage, only the ones that 
are visible in our CI systems.
```

## Fifth Learning

```
"Just because", "because I said so", or "because everyone
else does it this way" are places where bad decisions 
lurk.
```

## Sixth Learning