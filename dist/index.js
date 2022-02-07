

  //Routing
  const routes = {
    '/' : home,
    '/project1' : project1
  };

  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = routes[window.location.pathname];

  const onNavigate = (pathName) => {
    window.history.pushState(
      {},
      pathName,
      window.location.origin + pathName
    )
    rootDiv.innerHTML = routes[pathName];
  }

  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }

