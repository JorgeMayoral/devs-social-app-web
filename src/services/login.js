export default async function login({ username, password }) {
  const userData = { username, password };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
