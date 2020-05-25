import React from 'react';

function TableData(props){
    
    return(
        <table className="table table-dark">
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
       
            // <table class="table table-dark">
               
            // <tbody>
            //     <tr>
            //     <th scope="row">1</th>
            //     <td>Mark</td>
            //     <button>Save</button>
                
            //     </tr>
            //     <tr>
            //     <th scope="row">2</th>
            //     <td>Jacob</td>
            //     <button>Save</button>
            
            //     </tr>
            //     <tr>
            //     <th scope="row">3</th>
            //     <td>Larry</td>
            //     <button>Save</button>
            //     </tr>
            // </tbody>
            // </table>
  
    )
    
}

export default TableData;