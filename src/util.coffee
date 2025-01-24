###
Sample utility library in CoffeeScript.
###

square = (x) -> x * x
cube = (x) -> square(x) * x

printLoop = (num) ->
  for i in [0..num]
    console.log i

getUserName = (user) -> user.name

###
Example usages.
###

# Square and cube
console.log "Square of 5 is ", (square 5)
console.log "Cube of 5 is ", (cube 5)

# List of squares
squares = ((square x) for x in [1..5])
console.log squares

# Person

alice =
  name: 'Alice'
  age: 24
  intro: -> console.log "Hello, my name is #{this.name}"

console.log (getUserName alice)