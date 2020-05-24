import React from 'react';
import '../styles/TableData.scss';

function TableData(props){
    return(
        <table className="settings-table">
            <thead>
                <tr>
                <th scope="col">Article Title</th>
                <th scope="col">Article Link</th>
                <th scope="col"></th>
                </tr>
            </thead>
            {props.suggestedArticles.map((article,index)=>(
                <tbody>
                <tr>
                <th scope="row">{article.title}</th>
                <td>{article.link}</td>
                <button data-id={article.id} onClick={props.handleSave}>Save</button>
                </tr>
            </tbody>
            ))}
        </table>
    )
}

export default TableData;