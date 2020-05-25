import React from 'react';
import '../styles/TableData.scss';

function TableData(props){
    return(
        <table className="settings-table">
            <thead>
                <tr>
                <th className = "table-heading" scope="col">Article Title</th>
                <th className = "table-heading" scope="col">Article Link</th>
                <th className = "table-heading" scope="col"></th>
                </tr>
            </thead>
            {props.suggestedArticles.map((article,index)=>(
                <tbody>
                <hr className = "separate-line"></hr>
                <tr>
                <th className = "table-row" scope="row">{article.title}</th>
                <td className = "table-row"><a href={article.link} target="_blank">{article.link}</a></td>
                <button className = "sugg-btn" data-id={article.id} onClick={props.handleSave}>Save</button>
                </tr>
            </tbody>
            ))}
        </table>
    )
}

export default TableData;