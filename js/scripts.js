$(document).ready(function()
{
  $("button#cat").click(function()
  {
    $("ul#meow").prepend("<li> Meow!</li>");
    $("ul#bark").prepend("<li>Bark!</li>");
  })
  $("button#dog").click(function()
  {
    $("ul#bark").prepend("<li>Bark!</li>");
    $("ul#meow").prepend("<li> Meow!</li>");
  })
})
