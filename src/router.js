import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Books from "./views/Books.vue";
import Book from "./views/Book.vue";
import BookPart from "./views/BookPart.vue";
import Profile from "./views/Profile.vue";
import Login from "./views/Login.vue";
import Store from './store';


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import("./views/About.vue")
    },
    {
      path: "/books",
      name: "books",
      component: Books
    },
    {
      path: "/book/:id",
      name: "book",
      props: true,
      component: Book
    },
    {
      path: "/book/:bookId/part/:partId",
      name: "bookPart",
      props: true,
      component: BookPart
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
  ]
});

function AuthGuard(from, to, next) {
  if(Store.getters.isUserAuthenticated)
    next();
  else
    next('/login')
}
