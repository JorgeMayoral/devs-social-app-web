export default async function register(userData) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
