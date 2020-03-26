const isAuthMiddleware = ({ store, redirect }) => {
  if (!store.state.auth.isAuthed) {
    return redirect('/')
  }
}

export default isAuthMiddleware
