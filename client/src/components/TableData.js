import React from 'react';
import '../styles/TableData.scss';

function TableData(props){
    return(
        <table className="settings-table">
            <thead>
                <tr>
                <th className = "table-heading" scope="col">Headline</th>
                <th className = "table-heading" scope="col"></th>
                <th className = "table-heading" scope="col"></th>
                </tr>
            </thead>
            {props.suggestedArticles.map((article,index)=>(
                <tbody>
                <hr className = "separate-line"></hr>
                <tr>
                <th className = "table-row" scope="row">{article.title}</th>
                <td className = "button-row"><a className = "read-more" href={article.link} target="_blank">Read</a></td>
                <td className = "button-row"><button className = "sugg-btn" data-id={article.id} onClick={props.handleSave}>Save</button></td>
                </tr>
            </tbody>
            ))}
        </table>
    )
}

export default TableData;