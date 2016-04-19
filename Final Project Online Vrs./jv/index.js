// menu DropDown

document.getElementsByTagName("li")[0].addEventListener("click",function(){
  if(!this.parentNode.getAttribute("class")){
    this.parentNode.setAttribute("class","slideDown");
  }
  else{
    this.parentNode.removeAttribute("class");
  }
});


// Comments FORM





function addEvent(node, type, callback)
{
  if(node.addEventListener)
  {
    node.addEventListener(type, function(e)
    {
      callback(e, e.target);
      
    }, false);
  }
  else if(node.attachEvent)
  {
    node.attachEvent('on' + type, function(e)
    {
      callback(e, e.srcElement);
    });
  }
}

function shouldBeValidated(field)
{
  return (
    !(field.getAttribute('readonly') || field.readonly)
    &&
    !(field.getAttribute('disabled') || field.disabled)
    &&
    (field.getAttribute('pattern') || field.getAttribute('required'))
  ); 
}

function instantValidation(field)
{
  if(shouldBeValidated(field))
  {
    var invalid = 
    (
      (field.getAttribute('required') && !field.value)
      ||
      (
        field.getAttribute('pattern') 
        && 
        field.value 
        && 
        !new RegExp(field.getAttribute('pattern')).test(field.value)
      )
    );

    if(!invalid && field.getAttribute('aria-invalid'))
    {
      field.removeAttribute('aria-invalid');
    }
    else if(invalid && !field.getAttribute('aria-invalid'))
    {
      field.setAttribute('aria-invalid', 'true');
    }
  }
}

addEvent(document, 'change', function(e, target)
{
  instantValidation(target);
});

var fields = [
  document.getElementsByTagName('input'), 
  document.getElementsByTagName('textarea')
  ];
for(var a = fields.length, i = 0; i < a; i ++)
{
  for(var b = fields[i].length, j = 0; j < b; j ++)
  {
    addEvent(fields[i][j], 'change', function(e, target)
    {
      instantValidation(target);
    });
  }
}


// jQuery for both contact form and commenting section
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
});
