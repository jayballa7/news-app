import React from 'react';
import '../styles/TableSavedArticles.scss';


function TableSavedArticles(props){
    
    return(
        <table className="settings-table">
            <thead>
                <tr>
                <th className = "table-heading" scope="col">Article Title</th>
                </tr>
            </thead>
            {props.savedArticles.map((article,index)=>(
                <tbody>
                <hr className = "separate-line2"></hr>
                <tr> 
                <th className = "table-row" scope="row">{article.title}</th>
                <td className = "table-row"><a className = "more" href={article.link} target="_blank">Read</a></td>
                {/* <button data-id={article.id} onClick={props.handleSave}>Save</button> */}
                </tr>
            </tbody>
            ))}
            
        </table>
  
    )
    
}

export default TableSavedArticles;