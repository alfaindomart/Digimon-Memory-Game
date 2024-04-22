user load page
on load => {
get image and name from an api
put it on element:
<div>api.image<div>
<div>api.name<div>
render the element with map
useState score is 0
best score is 0
}

user clicked a card or the first time => {
setscore++
save the clicked object name or id (ex: let clickedCards = [tree])
randomize the data and rerender (use useffect)
}

user clicked a different card, turn 2++ => {
get the clicked card name or id, compare with clickedCards array => {
use array find, search for e.target.id, return false
}
assume the above function return false, then repeat the first click
}

user clicked same card for the first time => {
get the clicked card name or id, compare with clickedCards array => {
use array find, search for e.target.id, return true
}
set current score as bestScore
setscore = 0
randomize the data and rerender (use useffect)
}

user clicked the same card, again and again => {
find and match the clicked card like before
if currentScore > bestScore, bestScore = currentScore
setScore = 0
randomize
}
