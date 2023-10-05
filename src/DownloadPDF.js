import React, { useEffect } from 'react'



const DownloadPDF = () => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  useEffect(() => {
    const urlParmas = new URLSearchParams(window.location.search)
    const id = urlParmas.get('id');
    alert(id)

    const apiUrl = `${apiPrefix}/alluser/all/get_rukka_pdf/${id}`;
    const headers = {
      'Content-Type': 'application/json',
    };
    fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }
  )
  return (
    <div>

    </div>
  )
}

export default DownloadPDF
