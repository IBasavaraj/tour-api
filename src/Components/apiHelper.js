const headers = { "content-type": "application/json" };
const doGETCall = (getUrl) => {
    return fetch(getUrl, {
      method: "GET",
      headers: headers,
    }).then((res) => res.json());
  };
  
  const doPUTCall = (postUrl, body) => {
    fetch(postUrl, {
      method: "PUT",
      headers: headers,
      body: body,
    })
      .then((response) => response.json())
  };
  
  const doDELETECall = (deleteUrl) => {
    return fetch(deleteUrl, {
      method: "DELETE",
    }).then((res) => res.json());
  };
  
  export { doGETCall, doPUTCall, doDELETECall };