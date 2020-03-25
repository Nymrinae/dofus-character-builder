const isAuthMiddleware = ({ store, redirect }) => {
  if (!store.state.auth.isAuth) {
    return redirect('/')
  }
}

export default isAuthMiddleware
