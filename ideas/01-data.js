var ideas = null,
    ideasEndpoint = '//game-ideas.glitch.me/api/ideas'

function loadData (url, which, parser)
{
	$.ajax(
  {
    url: url,
    dataType: 'json',
    success: function(responseJSON)
    {
      var things = []
      console.log(which + ' loaded!')
      // console.log(responseJSON)
      for (var i = 0; i < responseJSON.records.length; i++)
      {
        var thing = parser(responseJSON.records[i])
        if (thing != undefined) things.push(thing)
      }
      console.log(things)
      document.dispatchEvent(new CustomEvent(which + ' LOADED', {detail: things} ))
    }
  });
}

function parseIdea(data)
{
  var fields = data.fields

  var idea =
  {
    id: data.id,
    name: fields.name,
    date: new Date(fields.date),
    description: fields.description,
    censor: fields.censor,
  }

  if (fields.images) idea.images = fields.images

  return idea
}

function compareByDate(a,b)
{
  var aTime = a.date.getTime(),
      bTime = b.date.getTime(),
      comparison = bTime - aTime

  console.log(bTime + ' - ' + aTime + ' ? ' + comparison)
  return comparison
}

function getFormattedDate(idea)
{
  var options =
  {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return idea.date.toLocaleDateString('en-GB', options)
}

// https://stackoverflow.com/a/10142256/2928562
Array.prototype.shuffle = function()
{
  var i = this.length, j, temp
  if ( i == 0 ) return this
  while ( --i )
  {
     j = Math.floor( Math.random() * ( i + 1 ) )
     temp = this[i]
     this[i] = this[j]
     this[j] = temp
  }
  return this
}
