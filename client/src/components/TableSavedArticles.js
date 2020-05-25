import React from 'react';

function TableSavedArticles(props){
    
    return(
        <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">Article Title</th>
                <th scope="col">Article Link</th>
                
                </tr>
            </thead>

            {props.savedArticles.map((article,index)=>(
                <tbody>
                <tr> 
                <th scope="row">{article.title}</th>
                <td><a href={article.link} target="_blank">Read More</a></td>
                {/* <button data-id={article.id} onClick={props.handleSave}>Save</button> */}
                </tr>
      
            </tbody>
            ))}
            
        </table>
  
    )
    
}

export default TableSavedArticles;