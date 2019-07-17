export default ({ $axios, redirect }) => {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url);
  });

  $axios.onError((error) => {
    redirect('/errors/404');
    switch (error.response.status) {
      case 500:
        redirect('/errors/500');
        break;
      case 404:
        redirect('/errors/404');
        break;
      default:
        break;
    }
  });
};
