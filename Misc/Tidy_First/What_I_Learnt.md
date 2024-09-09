# Tidy First

## Guard clauses

```
if (condition)
    ... some code ...

or 

if (condition)
    if (not some other condition)
        ... some code ...

is better written as

if (not condition) return
if (other conditon) return
... some code ...
```

## Dead code

Delete all dead code that cannot get executed. You have version control 
to get it back

## Normalize Symmetries

When doing something similar, do it the same way throughout your code

```
foo()
    return foo if foo not nil
    foo := ...
    return foo

or 

foo()
    if foo is nil
        foo:= ...
    return foo

but not both
```

## Reading Order

If understanding a file is dependent on understanding something,
reorder the file so that is the first thing that you see.

## Move Declaration and Initialization together

Nuff said, don't have them separated in the code if you don't need
them to be.

## Explaining variables

```
return new Point(
    ...big long expression...
    ...another big long expression...
)

is less readable than

width := ...big long expression...
height := ...another big long expression...
return new Point(width, height)
```

## Explaining constants

Create a symbolic constant, replace uses of the literal constant
with the symbol.

```
if response.code = 404
    ...some code...

is worse than 

PAGE_NOT_FOUND = 404
if response.code = PAGE_NOT_FOUND
    ...some code...
```

## Chunk statements

Put a blank line between chunks of code that do different things.

## Extract Helpers

```
Instead of 

routine()
    ...stuff that stays the same...
    ...stuff that needs to change...
    ...stuff that stays the same...

do

helper()
    ...stuff that needs to change...

routine()
    ...stuff that stays the same...
    helper()
    ...stuff that stays the same...
```

## Temporal coupling

```
If you regularly see

foo.a()
foo.b()

then instead have:

ab()
    a()
    b()
```

## Explaining Comments

Write down only what isn't obvious from the code

## Delete redundant comments

When you see a comment that says exactly what the code says, remove it.





