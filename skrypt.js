const getInputValues = () => {
    const shapeType = document.querySelector("#ksztalt").value;
    const r = parseInt(document.querySelector("#R").value, 10);
    const g = parseInt(document.querySelector("#G").value, 10);
    const b = parseInt(document.querySelector("#B").value, 10);
    return { shapeType, r, g, b };
  };
  
  const getShape = ({ shapeType }) => {
    if ((shapeType == 1)) {
      let shape = "miś";
      return shape;
    } else if ((shapeType == 2)) {
      let shape = "żabka";
      return shape;
    } else if ((shapeType == 3)) {
      let shape = "serce";
      return shape;
    }
  };
  
  const assingShape = (shape) => {
    document.querySelector(".form").innerHTML +=
      "<p>Zamówiłeś żelka: " + shape + "</p>";
  };
  
  const getRGB = ({ r, g, b }) => {
    if ((r, g, b > 255 || r, g, b < 0)) {
      document.querySelector(".colorPicker").innerHTML = "Podaj poprawną wartość";
    } else {
      document.querySelector(".colorPicker").style.backgroundColor =
        "rgb(" + r + ", " + g + ", " + b + ")";
    }
  };
  
  const calculate = () => {
    const getValues = getInputValues();
    const shapeValue = getShape(getValues);
    assingShape(shapeValue);
    getRGB(getValues);
  };