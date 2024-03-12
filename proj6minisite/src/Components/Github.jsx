import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setdata] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setdata(data);
    //     })
    // }, [])
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Gihub Followers : {data.followers}
            <img src={data.avatar_url} alt='Github-Image' width={300} />
        </div>
    </>
  )
}

export default Github

export const githubLoader = async () => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary');
    return res.json();
}