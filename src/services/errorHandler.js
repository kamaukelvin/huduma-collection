async function handle_api_error(error) {
  try {
    // change error.message to relevant field that has the error from the server response incase of error
    return new Error(error.message);
  } catch (err) {
    return err;
  }
}

export { handle_api_error };
