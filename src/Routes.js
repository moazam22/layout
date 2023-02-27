

export const routes = ([
  {
    path: '/',
    element: <div>Home</div>
  },
  {
    path: '/dashboard',
    element: <div>Dashboard</div>
  },{
    path: '/product',
    element: <div>Product-Detail</div>
  },{
    path: '/profile',
    element: <div>Profile</div>
  },{
    path: '*',
    element: <div>Page not found.</div>
  }
]);