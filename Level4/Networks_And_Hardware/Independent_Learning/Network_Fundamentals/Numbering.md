# Numbering

## Base-10 system

The decimal-system, also known as the base-10 system, uses ten-digits: 0,1,2,3,4,5,6,7,8, and 9

## Positional Notation

Each digit in a decimal number system has a position, and the value of the digit depends on its position.
For example, in the number 543.1, the digit 5 is in the hundreds place, 4 is in the tens place, 3 is in the ones place, 2 is in the tens place, 1 is in the hundreds place.

## Binary 

The binary system only uses 0s and 1s, and is read right to left. Each digit represents a power of 2.

## Binary to decimal conversion

Here is a conversion chart for a byte:

128  64  32  16  8  4  2  1
  0   0   0   0  0  0  0  0

## Decimal to binary conversion

For example, what is 154 in binary? 

1) It has to have a 1 in the '128' slot as it is larger than 128
2) The next number it is larger than after taking off 128 (26 left) is the '16' slot.
3) The next number after the 16 is taken off (144) is the '8' slot.
4) After that is the '2' slot.

So the answer is 10011010

## Hexidecimal 

The hexadecimal numbering system is an advanced numbering system that represents a binary number in a different way than a decimal. Hexadecimal represents large binary number simpler than decimal and thus is used by computer programmers

In networking, hexidecimal is mainly used in MAC addresses and IPv6 addresses

Hexadecimal is a base-16 system, going:

0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

Each hexidecimal digit represents 4 bits - aka a nibble

## Hexidecimal math

Here is a number chart for hexidecimal, it goes in powers of 16:

4096  256  16  1
   0    0   0  0

Hexidecimal numbers are represented with 0x before them

## Converting hexidecimal to decimal

So 0x27 would be 

4096  256  16  1
    0   0   2  7 

Which would be 32 + 7 = 39

## Converting decimal to hexidecimal

For 122, firstly, you divide 122 by 16 and keep the remainder, which leaves 10 (a in hexidecimal). So in the chart you would have:

4096  256  16  1
   0    0   7  a

So the conversion would be 0x7a

350 would be 0x15E
