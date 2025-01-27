export function formatDate(dateString: string): string {
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }
  
    // Get day, month, and year
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    // Add suffix to day
    const suffix = (day: number): string => {
      if (day === 1 || day === 21 || day === 31) return 'st';
      if (day === 2 || day === 22) return 'nd';
      if (day === 3 || day === 23) return 'rd';
      return 'th';
    };
  
    return `${day}${suffix(day)} ${month}, ${year}`;
  }
  