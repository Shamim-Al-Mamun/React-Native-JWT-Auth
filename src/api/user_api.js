import ApiManager from './ApiManager';

export const user_login = async data => {
  console.log('API');
  try {
    const result = await ApiManager('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return alert(result);
  } catch (error) {
    // alert(error);
    return error.response.data;
  }
};
