function setTheme(pData)
{
  switch(pData) {
  case "default":
    // code block
    break;


  //A standart theme
  case "night":
    setBackgroundcolor("#09073d");
    setBackgroundId(1);
    setForegroundId(1);
    break;



  //The default theme
  default:
    setBackgroundcolor();
    setBackgroundId();
    setForegroundId();
  }

  draw();
}
