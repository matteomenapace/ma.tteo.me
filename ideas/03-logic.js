// does this have to use jQuery?
$(document).ready(function()
{
  // from data.js
  loadData(ideasEndpoint, 'IDEAS', parseIdea)
})

// when ideas are loaded
document.addEventListener('IDEAS LOADED', displayIdeas)

function displayIdeas(event)
{
  // populate the ideas array (declared in data.js)
  // with the event's detail object
  ideas = event.detail
  // console.log('before sort', ideas)

  // sort the ideas by date
  ideas.sort(compareByDate)
  // console.log('after sort', ideas)

  // flush the list
  interface.ideas.empty()
  // and add each idea to the list
  ideas.forEach(function(idea)
  {
    // from interface.js
    displayIdea(idea)
  })
}
