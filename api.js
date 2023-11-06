export function getTodos() {
  return  fetch("https://wedev-api.sky.pro/api/v1/vorobyeva-tatyana/comments", {
      method: "GET",
    })
      .then((response) => {
        return response.json();

      })
}