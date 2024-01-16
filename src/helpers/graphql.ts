export const fetchData = async (query: string, slug?: string, cursor: string = '') => {
  try {
    const variables = slug ? {
      slug: slug,
      userId: slug,
      after: cursor,
    } : {
      after: cursor,
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const { data, errors } = await response.json();

    // Handle the data here
    return data;
  } catch (error) {
    // Handle the error here
    console.error(error);
  }
};