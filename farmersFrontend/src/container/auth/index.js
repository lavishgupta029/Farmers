export const Signupuser = (user) => {
  return fetch(`http://localhost:3001/api/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const Signinuser = (user) => {
  return fetch(`http://localhost:3001/api/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const authenticate = (data, next) => {
  if (typeof window != "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
  }
  next();
};

export const signout = () => {
  if (typeof window != "undefined") {
    localStorage.removeItem("jwt");
  }
  return fetch(`http://localhost:3001/api/signout`, {
    method: "GET",
  })
    .then((response) => {
      console.log("signout", response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const isAuthenticate = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else return false;
};
