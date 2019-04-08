var interface =
{
  ideas: $('#ideas')
}

// https://github.com/jonschlinkert/remarkable
var md = new Remarkable()

function displayIdea(idea)
{
  // self-censorship :)
  if (idea.censor) return

  var template = '<li class="idea" id="' + idea.id + '">'
  template += '<h3>💡 ' + idea.name + '</h3>'
  template += '<div class="date">' + getFormattedDate(idea) + '</div>'
  if (idea.images)
  {
    template += '<div class="images"><img src="' + idea.images[0].url + '"></div>'
  }
  template += '<div class="description">' + md.render(idea.description) + '</div>'
  // TODO images
  template += '</li>'

  interface.ideas.append(template)
}
