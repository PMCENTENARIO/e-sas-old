import app from './app';

app.listen(3333, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Server started');
  }
});
