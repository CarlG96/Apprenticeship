# Making Code Small

Small code is easier to maintain

The primary strategy for reducing code complexity is to decrease the unit's size.

Longer methods are more susceptible to changes and defects

# Testability 

Smaller classes let developers decide whether to write isolated unit tests
for specific parts of the business logic.

# Code Cohesion Meaning

A cohesive component (class or method) has a single, clear responsibility within the system,
it does only one thing. A class that does one thing is undoubtly smaller than a class that 
does multiple things. If we strive for cohesive code, we naturally strive for simple code.

# Break complex methods into private methods

Breaking a large method into a few smaller ones is an excellent and easy way to reduce
complexity. All you need to do is identify a piece of code within a large method that 
can be moved to a private method.

An excellent way to determine whether a new private method makes sense of whether a code
segment can be an independent unit is by evaluating the following:

- Can you assign a clear name to the private method that explains its purpose?
- Does the new method perform a cohesive, small action that the public method
can easily use?
- Is the new method dependent on numerous parameters or class dependencies,
or is it concise enough for a developer to understand its requirements
quickly?
- When the method is called, is its name sufficient to explain its function
without examining the implementation?
- Could this private method be made static? Such methods often make good 
candidates for extraction, as they don't really rely on the original class.

# How do you test private methods?

Because a test method can't invoke private methods, a private method should be 
tested through the public method that calls it. If you want to test the
private method in isolation, consider moving the code to another class.

# Move a complex unit of code to another class

Consider the following to decide whether to move code to another class 
instead of a private method:

- Does the piece of code do something different than the rest of the class?
- Does it do something important enough for the domain that it deserves its 
own name and class?
- Do you want to test this piece of code in isolation?
- Does this code depend on classes you don't want the rest of the code to depend on?
- Is it too big to break into many other private methods?

# When not to divide code into small units

- when two or more puzzle pieces can't live apart. Forcing separation often results 
in complex method signatures
- When a puzzle piece is unlikely to be replaced
- When there's little value in testing a part in complete isolation
- When there are few puzzle pieces. If you only need two to four private methods,
why complicate your code?

# Move new complexity away from existing classes

Move any new complexity arising from feature requests or code evolution to a separate
location. This pattern fosters simplicity and cohesiveness within existing units, making
them easier to maintain and comprehend.

# Give the complex business logic a class of its own

In such cases, it's best to create another class that isolates the feature, keeping the other classes free from growing in complexity. There are a few advantages to doing that:

- Dedicating an entire class to a complex feature makes it easier to see all its dependencies.
In this case, email-related classes and different repositories are explicitly listed in the 
service's constructor
- The feature's code is isolated from the rest of the system. When reading the code,
there's no need to separate what belongs to this feature and what doesn't, reducing
cognitive overload.
- Isolation also makes testing easier. We can write tests for this feature without 
worrying about other behaviours.
- It simplifies reusing the functionality. This class can be called from any part of the
system that needs the same functionality.
- The class is highly cohesive, doing only one thing.

# Single Responsibility Principle

A class (or method) should have one and only one reason to change.

# Breaking code down into smaller classes

Move any new complexity away from existing units. You can do that by, for example, moving the new 
feature to a new class.






