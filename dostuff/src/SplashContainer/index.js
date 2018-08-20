import React, { Component } from 'react';


// Data needed: userId, userCategories, loggedIn,  userEvents, userLocation, userCategoryEvents
// /getAllEvents, /login

const SplashContainer = () => {
  return(
    <ul>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/categories'>Categories</Link></li>
    </ul>  
  )
}




  // getCategories = async () => {
  //   const categories = await fetch('', {
  //     credentials: 'include',
  //     method: 'GET'
  //   });
  //   const parsedCategories = categories.json();

  //   return parsedCategories
  // }



export default SplashContainer;

