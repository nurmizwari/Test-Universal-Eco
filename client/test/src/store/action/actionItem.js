export const fetching = (payload) => {
  return {
    type: "fetchData",
    payload,
  };
};
export const fetchingById = (payload) => {
  return {
    type: "fetchDataById",
    payload,
  };
};

export const fetchingData = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetching(data));
      });
  };
};
export const fetchingDataById = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchingById(data));
      });
  };
};
export const editDataById = (id, email) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        // street: street,
        // house: house,
        // city: city,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.error);
      }
      return response.json();
    });
  };
};
