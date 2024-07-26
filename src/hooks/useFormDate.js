export const useFormDate = (date) => {

    const Dateformat = new Date(date)
  const year = Dateformat.getFullYear();
  const month = String(Dateformat.getMonth() + 1).padStart(2, "0");
  const day = String(Dateformat.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
