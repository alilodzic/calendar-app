const flatColors = [
  "#1abc9c", // Turquoise
  "#e74c3c", // Alizarin
  "#3498db", // Peter River
  "#6c5ce7", // Sunflower
  "#9b59b6", // Amethyst
  "#00b894", // Nephritis
  "#e67e22", // Carrot
  "#2980b9", // Belize Hole
  "#34495e", // Wet Asphalt
  "#2ecc71", // Emerald
];


const Slot = ({ slots }) => {

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * flatColors.length);
    return flatColors[randomIndex];
}
const randomColor   = getRandomColor();

  const getTime = (slots) => {
    const date = new Date(slots);
    const hours = date.getHours();
    const minutes = date.getMinutes() == "0" ? "00" : date.getMinutes();
    return `${hours}:${minutes} `;
  };
  return (
    <div className="slot">
      <hr />
      <div style={{backgroundColor : randomColor}} >{getTime(slots.start)} </div>
      <div style={{backgroundColor : randomColor}}>{getTime(slots.end)}</div>
    </div>
  );
};

export default Slot;
