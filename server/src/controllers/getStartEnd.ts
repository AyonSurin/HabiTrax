export const getWeekRange = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  const diffToMonday = (dayOfWeek + 6) % 7; // Adjusting Sunday (0) to treat Monday as start of the week

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - diffToMonday);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // Adding 6 days from Monday to get Sunday

  return { startOfWeek, endOfWeek };
};

export const getWeekRangeSunday = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

  // Calculate the start of the week (Sunday)
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - dayOfWeek);

  // Calculate the end of the week (Saturday)
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  return { startOfWeek, endOfWeek };
};



export const getMonthRange = () => {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // First day of the month
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0); // Last day of the month

  return { startOfMonth, endOfMonth };
};

export const getYearRange = () => {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1); // January 1st
  const endOfYear = new Date(today.getFullYear(), 11, 31); // December 31st

  return { startOfYear, endOfYear };
};
