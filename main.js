const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

randomize.addEventListener('click', result);


function result() {
    let text = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

    let arrayX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

    let arrayY = ["the soup kitchen", "Disneyland", "the White House"];

    let arrayZ = ["spontaneously combusted",
	"melted into a puddle on the sidewalk",
	"turned into a slug and crawled away"];


    if (customName.value !== '') {
	let name = customName.value;
	text = text.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
	let weight = Math.round(300/2.205);
	let temperature = Math.round((94 - 32) * 5 / 9);
	text = text.replaceAll('300', weight);
	text = text.replaceAll('pounds', 'kg');
	text = text.replaceAll('94', temperature);
	text = text.replaceAll('fahrenheit', 'celcius');

    }
    text = text.replaceAll(":insertx:", randomValueFromArray(arrayX));
    text = text.replaceAll(":inserty:", randomValueFromArray(arrayY));
    text = text.replaceAll(":insertz:", randomValueFromArray(arrayZ));

    story.textContent = text;
    story.style.visibility = 'visible';
}
