# dragAndPos.JS

https://cdn.rawgit.com/jx2bandito/dragAndPosJSF/master/dragAndPosF.js<br /> 

Useful when you want to position a CSS object by eye or if you need to get an idea of any positioning pattern you may need.<br /> 

Call the dragAndPos function, passing in a jQuery DOM object that has an ID.<br /> 
The output will show the CSS position of the element you're moving around.<br /> 
Paste the code into your CSS file and its default position will be where you last dragged it.<br /> 
Note that the draggable function overwrites CSS positioning at the moment of use.<br /> 
Otherwise, the position will stick and is completely responsive. <br /> 
This version automatically creates the output area as a span positioned absolutely at left: 0 and top: 0 in the body.<br />
Styling the output area must be done in JS after the function call, eg.: $("#dragAndPosOutput").css({'property':'value'});
