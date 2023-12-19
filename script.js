let adjective = prompt('Enter an adjective:')
let noun = prompt('Enter a noun:')
let verb = prompt('Enter a verb:')
let adverb = prompt('Enter an adverb:')
let animal = prompt('Enter an animal:')
let holiday = prompt('Enter a holiday:')
let drink = prompt('Enter a drink:')
let weather = prompt('Enter weather:')
let marks = prompt('Enter tracks from an animal:')
let animal2 = prompt('Enter another animal:')
let holiday2 = prompt('Enter another holiday:')
let sport = prompt('Enter a sport:')
let name = prompt('Enter a name:')

let story = `Grandma got run over by a ${animal}, walking home from our house ${holiday}. You can say there's no such thing as Santa, but as for me and grandpa we believe. She'd been drinking too much ${drink}, and we begged her not to go, but she forgot her medication and she staggered out the door into the ${weather}. When we found her Christmas morning, at the scene of the attack, she had ${marks} on her forehead and incriminating Claus marks on her back. Grandma got run over by a ${animal2} walking home from our house ${holiday2}. You can say there's no such thing as Santa, but as for me and grandpa we believe. Now we're all so proud of grandpa, he's been taking this so well, see him in there watching ${sport}, drinking beer and playing cards with cousin ${name}. It's not Christmas without Grandma, all the family's dressed in black and we just can't help but wonder, should we open up her gifts, or send them back.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`