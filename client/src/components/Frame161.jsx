import React from "react";
import "../css/Frame161.css";
import axios from 'axios';
import AxiosConfig from "../AxiosConfig";

const handleDeletePost = async (postId) => {
    try {
        await AxiosConfig.delete(`/api/v1/auth/posts/${postId}`); // Use the correct endpoint URL
        alert("Post Removed");
        window.location.reload();
    } catch (error) {
        console.error('Error Removing post:', error);
        alert("Error Removing post");
    }
};

const confirmRemovePost = (postId) => {
    const shouldDelete = window.confirm("Are you sure you want to remove this post?");
    if (shouldDelete) {
        handleDeletePost(postId); // Pass the post ID to the delete function
    }
};

const Frame161 = ({ postList, tableHeader }) => {

    return (
        <div className="Frame161">
            <h2 className="tableTitle">{tableHeader.tableTitle}</h2>
            <table className="postListTable">
                <thead>
                    <tr>
                        <th>{tableHeader.col1}</th>
                        <th>{tableHeader.col2}</th>
                        <th>{tableHeader.col3}</th>
                        <th>{tableHeader.col4}</th>
                    </tr>
                </thead>
                <tbody>
                    {postList.map((post, index) => (
                        <tr key={index}>
                            <td>{post.username}</td>
                            <td>{post.caption}</td>
                            <td>{post.id}</td>
                            <td>
                                <button
                                    onClick={() => confirmRemovePost(post.id)} // Use the correct post ID
                                    style={{
                                        borderRadius: '5px',
                                        backgroundColor: 'transparent',
                                        transition: 'background-color 0.3s',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = 'lightblue')}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = 'blue')}
                                >
                                    Remove Post
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Frame161;



// import React from "react";
// import "../css/Frame161.css";
// import axios from 'axios';
// import AxiosConfig from "../AxiosConfig";

// //edit post
// // const handleEditPost = async (postId) => {
// //     try {
// //       await AxiosConfig.edit(`/api/v1/auth/posts/delete/${postId}`);
// //         alert("Post Deleted");
// //         window.location.reload();
// //     } catch (error) {
// //       console.error('Error deleting post:', error);
// //       alert("Error changing details");
// //     }
// // };

// // //confirm before edit post
// // const confirmEditPost = (postId) => {
// //     const shouldDelete = window.confirm("Are you sure you want to edit this post details?");
// //     if (shouldDelete) {
// //       handleEditPost(postId);
// //     }
// //   };

// //delete post
// const handleDeletePost = async (postId) => {
//     try {
//       await AxiosConfig.delete(`/api/v1/posts/${postId}`);
//         alert("Post Removed");
//         window.location.reload();
//     } catch (error) {
//       console.error('Error Removing post:', error);
//       alert("Error Removing post");
//     }
// };

// //confirm before delete post
// const confirmRemovePost = (postId) => {
//     const shouldDelete = window.confirm("Are you sure you want to remove this post?");
//     if (shouldDelete) {
//       handleDeletePost(postId);
//     }
//   }; 

// const Frame161 = ({ postList , tableHeader } ) => {
    
//     return (
//         <div className="Frame161">
//             <h2 className="tableTitle">{tableHeader.tableTitle}</h2>
//             <table className="postListTable">
//             <thead>
//                 <tr>
//                 <th>{tableHeader.col1}</th>
//                 <th>{tableHeader.col2}</th>
//                 <th>{tableHeader.col3}</th>
//                 <th>{tableHeader.col4}</th>
//                 {/* <th>{tableHeader.col5}</th> */}
//                 {/* <th>{tableHeader.col6}</th> */}
//                 </tr>
//             </thead>
//             <tbody>
//                 {postList.map((post, index) => (
//                 <tr key={index}>
//                     <td>{post.username}</td>
//                     <td>{post.caption}</td>
//                     {/* <td>{post.location}</td> */}
//                     <td>{post.id}</td>
//                     <td>
//                         {/* //<button onClick={() => confirmEditPost(post.postId)}>Edit Post</button> */}
//                         {/* <button onClick={() => confirmRemovePost(post.postId)} style={{ borderRadius: '5px' }}>Remove Post</button> */}
//                         <td> 
//                     {/* <button onClick={() => confirmRemovePage(page.vehicleProfileId)} style={{ borderRadius: '5px' }}>Remove Page</button> */}
//                     <button
//                         onClick={() => confirmRemovePost(post.postId)}
//                         style={{
//                         borderRadius: '5px',
//                         backgroundColor: 'transparent', // Set the initial background color
//                         transition: 'background-color 0.3s', // Add a smooth transition
//                         cursor: 'pointer', // Change the cursor to a pointer on hover
//                         }}
//                         onMouseEnter={(e) => (e.target.style.backgroundColor = 'lightblue')} // Change the background color on hover
//                         onMouseLeave={(e) => (e.target.style.backgroundColor = 'blue')} // Reset the background color on mouse leave
//                     >
//                     Remove Post
//                     </button>
//                     </td>
//                     </td>
//                 </tr>
//                 ))}
//             </tbody>
//             </table>
//         </div>
//     );
//     };

// export default Frame161;
