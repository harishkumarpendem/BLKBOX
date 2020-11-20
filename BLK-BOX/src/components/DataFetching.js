import React,{useState, useEffect} from 'react'
import axios from 'axios';

function DataFetching() {
    const[post, setPost] = useState([])

    useEffect(() => {
        axios.get(`http://devserver.blkbox.ai/api/box/analysisPerformanceImpact?auth_test=true`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])
    return (
        <div>
            <ul>
                {
                    post.map(post => (
                    <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DataFetching;
