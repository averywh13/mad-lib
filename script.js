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
let color = prompt('Enter a color:')

let story = `Grandma got run over by a <u><b>${animal}</b></u>, walking home from our house <u><b>${holiday}</b></u>.
You can say there's no such thing as Santa, but as for me and grandpa we believe. She'd been drinking too much <u><b>${drink}</u></b>, and we begged her not to go, but she forgot her medication and she staggered out the door into the <u><b>${weather}</u></b>. When we found her Christmas morning, at the scene of the attack, she had <u><b>${marks}</u></b> on her forehead and incriminating Claus marks on her back. Grandma got run over by a <u><b>${animal2}</u></b> walking home from our house <u><b>${holiday2}</u></b>. You can say there's no such thing as Santa, but as for me and grandpa we believe. Now we're all so proud of grandpa, he's been taking this so well. See him in there watching <u><b>${sport}</u></b>, drinking beer and playing cards with cousin <u><b>${name}</u></b>. It's not Christmas without Grandma, all the family's dressed in <u><b>${color}</u></b> and we just can't help but wonder, should we open up her gifts, or send them back.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`