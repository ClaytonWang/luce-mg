/**
 * 
 * @param url API endpoint URL
 * @param results Number of results to return
 */
export const fetchData = async (url: string, results: number): Promise<any> => {
  try {
    const response = await fetch(`${url}?results=${results}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};