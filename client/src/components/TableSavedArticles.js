import React from 'react';

function TableSavedArticles(props){
    
    return(
        <table className="settings-table">
            <thead>
                <tr>
                <th className = "table-heading" scope="col">Article Title</th>
                <th className = "table-heading" scope="col">Article Link</th>
                
                </tr>
            </thead>
            <hr className = "separate-line"></hr>
            {props.savedArticles.map((article,index)=>(
                <tbody>
                <tr> 
                <th className = "table-row" scope="row">{article.title}</th>
                <td className = "table-row"><a href={article.link} target="_blank">Read More</a></td>
                {/* <button data-id={article.id} onClick={props.handleSave}>Save</button> */}
                </tr>
                <hr className = "separate-line"></hr>
            </tbody>
            ))}
            
        </table>
  
    )
    
}

export default TableSavedArticles;